/**
 *
 * Required External Modules
 *
 */

import { userModel, IUser } from "../../models";
import { APIError, jwt, SendEmail, signupTemplate, hashPassword, comparePassword, LoginTemplate, generate2FACode, doctorPassword, VerifyUserTemplate, WelcomeTemplate, AddDoctorTemplate, ForgetPasswordTemplate  } from "../../commons";
import { VendorLoginOtp, VendorOtp } from "../../models/auth";

/**
 *
 * Services
 *
 */

export default {
  /**
   *
   * create user
   *
   */

  capitalize(word: string): string {
    return word
      .toLowerCase()
      .replace(/\w/, (firstLetter) => firstLetter.toUpperCase());
  },

  async createUser(params: IUser ){
    const { email, password, phone_number} = params;
    // const confirmPassword = params.confirmPassword;
    const LCEmail = email.toLowerCase();
    // const LCUsername = username.toLowerCase();
    // const CCFirstName = this.capitalize(firstName);
    // const CCLastName = this.capitalize(lastName);
    const duplicate = await userModel.findOne({ email: LCEmail })

    if (duplicate) {
      throw new APIError({
        status: 403,
        message: "A user with this email already exists. You can resend email verification if you are yet to verify your account",
        path: "registration email",
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = await userModel.create({
      ...params,
      email: LCEmail,
      phone_number: phone_number,
      // username: LCUsername,
      // firstName: CCFirstName,
      // lastName: CCLastName,
      password: hashedPassword,
    });
    const accessToken = await jwt.encode({ id: user.id, role: user.role });

    const otp = generate2FACode();
    console.log(otp);
    const otpData = await VendorOtp.create({
      email: LCEmail,
      otp,
    });

    setImmediate(async () => {
      await SendEmail({
        email,
        subject: "Welcome To askadoctor",
        body: VerifyUserTemplate(otp),
      })
    });

    return { accessToken, user };
  },


  /**
   *
   * sendVerification
   *
   */

  async sendVerification(params: { email: string }) {
    const { email } = params;
    const LCEmail = email.toLowerCase();
    const user = await userModel.findOne({ email: LCEmail });
    if(!user) {
      throw new APIError({
        status: 404,
        message: "user does not exist. Verification mail can only be sent to a user that has signed up. Proceed to sign up",
        path: "email",
      });
    };
    if(user.is_verified === true) {
      throw new APIError({
        status: 403,
        message: "user is already verified. Proceed to login",
        path: "email",
      });
    }

    const cancelOtp = await VendorOtp.findOneAndDelete({ email: LCEmail });
    
    const otp = generate2FACode();
    console.log(otp);
    const otpData = await VendorOtp.create({
      email: LCEmail,
      otp,
    });
    setImmediate(async () => {
      await SendEmail({
        email,
        subject: "Welcome To askadoctor",
        body: VerifyUserTemplate(otp),
      })
    });
    return { user };
  },



/**
   *
   * VerifyUser
   *
   */

async verifyUser(params: { email: string, otp: string }) {
  const { email, otp } = params;
  const LCEmail = email.toLowerCase();
  const user =  await userModel.findOne({ email: LCEmail })
  if (!user) {
    throw new APIError({
      status: 404,
      message: "user does not exist, proceed to sign-up",
      path: "email",
    });
  }

  if (user.is_verified === true) {
    throw new APIError({
      status: 403,
      message: "user is already verified",
      path: "email",
    });
  }

  // Verify OTP
  const checkOtp = await VendorOtp.findOne({ email: LCEmail, otp });
  if (!checkOtp) {
    throw new APIError({
      status: 403,
      message: "Invalid OTP supplied",
      path: "otp",
    });
  }

  const cancelOtp = await VendorOtp.findOneAndDelete({ email: LCEmail, otp });
  const updatedUser = await userModel.findOneAndUpdate({ email: LCEmail }, { is_verified: true }, { new: true });
  if(!updatedUser) {
    throw new APIError({
      status: 404,
      message: "user does not exist, proceed to sign-up",
      path: "email",
    });
  }

  setImmediate(async () => {
    await SendEmail({
      email,
      subject: "Welcome To askadoctor",
      body: WelcomeTemplate(),
    })
  });
  
  const accessToken = await jwt.encode({ id: updatedUser.id, role: updatedUser.role });

  return { accessToken, updatedUser };
},



  /**
   *
   * find user
   *
   */

  async findUser(params: { email: string, password: string }) {
    const { email, password } = params;
    const LCEmail = email.toLowerCase();
    const user = await userModel.findOne({ email: LCEmail })

    if (!user) {
      throw new APIError({
        status: 404,
        message: "user does not exist, proceed to sign-up",
        path: "email",
      });
    }
    if(user.is_verified === false) {
      throw new APIError({
        status: 404,
        message: "Email not verified! Please use the otp code sent to your email to verify your account!",
        path: "email",
      });
    }

    const isMatch = await comparePassword(password, user.password);
    if(!isMatch) {
      throw new APIError({
        status: 404,
        message: "Incorrect credentials",
        path: "password",
      });
    }
    // Generate vendor 2fa otp code
    const loginVerificationCode = generate2FACode();
    const otp = new VendorLoginOtp();
    otp.email = email;
    otp.otp = loginVerificationCode;

    const fiveMinutesLater = new Date();
    await fiveMinutesLater.setMinutes(fiveMinutesLater.getMinutes() + 5);
    otp.expiration_time = fiveMinutesLater;
    await otp.save();

    // send login verification email
     setImmediate(async () => {
      await SendEmail({
        email,
        subject: "Login Verification",
        body: LoginTemplate(loginVerificationCode),
      })
    });

    const { id, role } = user;
    const accessToken = await jwt.encode({ id: id, role: role });

    return { accessToken, user };
  },

  /**
   *
   * verify login
   *
   */
  

  async verifyLogin(params: { email: string, otp: string }) {
    const {otp, email} = params;
    const LCEmail = email.toLowerCase();
    const user = await userModel.findOne({ email: LCEmail });
    if (!user) {
      throw new APIError({
        status: 404,
        message: "user does not exist or invalid email",
        path: "email",
      });
    }

    const otpData = await VendorLoginOtp.findOne({ email: LCEmail });
    if (!otpData ) {
      throw new APIError({
        status: 404,
        message: "Invalid OTP, No OTP generated for this email.",
        path: "otp",
      });
    }
    const isValid = await VendorLoginOtp.findOne({ email: LCEmail, otp: otp, used: false });
    if (!isValid) {
      throw new APIError({
        status: 404,
        message: "Invalid OTP or OTP has been used",
        path: "otp",
      });
    }
    if(new Date() > otpData.expiration_time) {
      throw new APIError({
        status: 404,
        message: "OTP has expired",
        path: "otp",
      });
    }
    if(otpData.otp === otp) {
      otpData.used = true;
      await otpData.save();
    }

    const { id, role } = user;
    const accessToken = await jwt.encode({ id: id, role: role });

    return { accessToken, user };
    
},

/**
   *
   * Add a doctor
   *
   */

async addDoctor(params: IUser ){
  // const { firstName, lastName, designation, email, phone_number} = params;
  const {email} = params;

  // const confirmPassword = params.confirmPassword;
  const LCEmail = email.toLowerCase();
  // const LCUsername = username.toLowerCase();
  // const CCFirstName = this.capitalize(firstName);
  // const CCLastName = this.capitalize(lastName);
  const duplicate = await userModel.findOne({ email: LCEmail })
  if (duplicate) {
    throw new APIError({
      status: 403,
      message: "A user with this email already exists. You can resend email verification if you are yet to verify your account",
      path: "registration email",
    });
  }

  
  const password = doctorPassword(2,6);
  
  const hashedPassword = await hashPassword(password);

  const user = await userModel.create({
    ...params,
    email: LCEmail,
    // phone_number: phone_number,
    // username: LCUsername,
    // firstName: CCFirstName,
    // lastName: CCLastName,
    role: "doctor",
    status: "active",
    password: hashedPassword,
  });
  const accessToken = await jwt.encode({ id: user.id, role: user.role });

  console.log("password", password, email, JSON.stringify(password), JSON.stringify(email), parseInt(password), parseInt(email), Number(password), Number(email));
  setImmediate(async () => {
    await SendEmail({
      email,
      subject: "Welcome To askadoctor",
      body: AddDoctorTemplate(password, email),
    })
  });

  return { 
    accessToken,
     user 
    };
},

/**
   *
   * Change Password
   *
   */

async changePassword(params: { id: string, role:string, password: string, confirmPassword: string }) {
  const { id, role, password, confirmPassword } = params;
  if(password !== confirmPassword) {
    throw new APIError({
      status: 403,
      message: "Passwords do not match",
      path: "password",
    });
  }
  const hashedPassword = await hashPassword(password);
  const user = await userModel.findOneAndUpdate({ _id: id, role }, { password: hashedPassword }, { new: true });
  if (!user) {
    throw new APIError({
      status: 404,
      message: "User does not exist",
      path: "user",
    });
  }
  return user;
},

/**
   *
   * Forget Password
   *
   */


async forgotPassword(params: { email: string }) {
  const { email } = params;
  const LCEmail = email.toLowerCase();
  const user = await userModel.findOne({ email: LCEmail });
  if (!user) {
    throw new APIError({
      status: 404,
      message: "user does not exist or invalid email",
      path: "email",
    });
  }

  // Generate token
   const Token = generate2FACode();
  const token = await jwt.encode({ id: user.id, role: user.role });
  // const link = `https://localhost:5200/api/auth/reset-password?token=${resetToken}&id=${vendor._id}`;

  const otpData = await VendorLoginOtp.create({
    email: LCEmail,
    otp: Token,
  });
  const fiveMinutesLater = new Date();
  await fiveMinutesLater.setMinutes(fiveMinutesLater.getMinutes() + 5);
  otpData.expiration_time = fiveMinutesLater;
  await otpData.save();
  setImmediate(async () => {
    await SendEmail({
      email,
      subject: "Reset Password",
      body: ForgetPasswordTemplate(Token),
    })
  });

}
}

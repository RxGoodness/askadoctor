/**
 *
 * Required External Modules
 *
 */

import { Request, Response, NextFunction } from 'express';
import { APIresponse } from '../../commons';
import service from './service';

/**
 *
 * controllers
 *
 */

export default {

  /**
   *
   * create user
   *
   */

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = req.body;
      const data = await service.createUser(payload);

      APIresponse(res, 201, 'User created. Please check your mail and verify your account.', data);
    } catch (error) {
      next(error);
    }
  },



  /**
   *
   * send verification code
   *
   */

  async sendVerification(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = req.body;
      const data = await service.sendVerification(payload);

      APIresponse(res, 201, 'Verification code sent', data);
    } catch (error) {
      next(error);
    }
  },



  /**
   *
   * confirm user
   *
   */

  async verifyUser(req: Request, res: Response, next: NextFunction) {
    try {
      const creatorId = <string>req.decoded?.id;
      const creatorRole = <string>req.decoded?.role;
      const payload = {...req.body, creatorId, creatorRole};
      const data = await service.verifyUser(payload);

      APIresponse(res, 201, 'User verified', data);
    } catch (error) {
      next(error);
    }
  },



  /**
   *
   * find user
   *
   */

  async findUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const user = await service.findUser(data);
      APIresponse(res, 201, 'Successful. Pleaase check your mail and enter the otp sent', user);
    } catch (error) {
      next(error);
    }
  },

  /**
   *
   * verify login
   *
   */

  async verifyLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const user = await service.verifyLogin(data);
      APIresponse(res, 201, 'OTP verified successfully and user logged in', user);
    } catch (error) {
      next(error);
    }
  },

 /**
   *
   * create user
   *
   */

 async addDoctor(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = req.body;
    const data = await service.addDoctor(payload);

    APIresponse(res, 201, 'Doctor added successfully', data);
  } catch (error) {
    next(error);
  }
},

async fogetPassword(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = req.body;
    const data = await service.forgotPassword(payload);

    APIresponse(res, 201, 'Password reset successful', data);
  } catch (error) {
    next(error);
  }
},

async changePassword(req: Request, res: Response, next: NextFunction) {
  try {
    const id = <string>req.decoded?.id;
    const role = <string>req.decoded?.role;
    const payload = {...req.body, id, role};
    const data = await service.changePassword(payload);

    APIresponse(res, 201, 'Please verify the OTP sent to you mail to complete your passwor reset process', data);
  } catch (error) {
    next(error);
  }
},

async resetPassword(req: Request, res: Response, next: NextFunction) {
  try {
    const payload = req.body;
    const data = await service.resetPassword(payload);

    APIresponse(res, 201, 'Password reset successful', data);
  } catch (error) {
    next(error);
  }
},

};

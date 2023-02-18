/**
 *
 * Required Exernal Modules
 *
 */

import { string, object, literal } from "zod";
import { parseUrl } from "../../commons";

/**
 *
 * Schemas
 *
 */

export default {
  /**
   *
   * create user
   *
   */

  createUser: object({
    // firstName: string({ required_error: "firstName is required" }),
    // lastName: string({ required_error: "lastName is required" }),
    email: string({ required_error: "email is required" }).email({
      message: "email format is not supported",
    }),
    password: string({ required_error: "password is required" }),
    phone_number: string({ required_error: "phone number is required" }),
    // username: string({ required_error: "username is required" }),
    // banner: string()
    //   .refine((val: string) => parseUrl(val), {
    //     message: "banner is not properly formatted",
    //   })
    //   .or(literal(""))
    //   .optional(),
    // profileImg: string()
    //   .refine((val: string) => parseUrl(val), {
    //     message: "profile image is not properly formatted",
    //   })
    //   .or(literal(""))
    //   .optional(),
    // bio: string()
    //   .max(100, { message: "bio cannot be more than 100 chars" })
    //   .or(literal(""))
    //   .optional(),
    // organization: string({ required_error: "organization is required" }),
    // country: string({ required_error: "country is required" }),
    // role: string().(),

  }),

  /**
   *
   * find user
   *
   */

  findUser: object({
    email: string({ required_error: "email is required" }).email({
      message: "email format is not supported",
    }),
  }),
};

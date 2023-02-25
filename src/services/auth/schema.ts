/**
 *
 * Required Exernal Modules
 *
 */

import { string, object, literal, z } from "zod";
import { parseUrl, parseUserRole, parseUserStatus } from "../../commons";

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
    password: string({ required_error: "password is required" }).min(8),
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
  }).strict(),

  /**
   *
   * find user
   *
   */

  login: object({
    email: string({ required_error: "email is required" }).email({
      message: "email format is not supported",
    }),
    password: string({ required_error: "password is required" }).min(8),
  }).strict(),

  sendUserverification: object({
    email: string({ required_error: "email is required" }).email({
      message: "email format is not supported",
    }),
  }).strict(),

  verification: object({
    email: string({ required_error: "email is required" }).email({
      message: "email format is not supported",
    }),
    otp: string({ required_error: "otp is required" }).length(6, {
      message: "Must be exactly 6 characters long",
    }),
  }).strict(),

  addDoctor: object({
    email: string({ required_error: "email is required" }).email({
      message: "email format is not supported",
    }),
    role: z.enum(['doctor']).optional(),
    status: z.enum(['active', 'inactive']).optional()
  }).strict(),

  changePassword: object({
    password: string({ required_error: "password is required" }).min(8),
    confirmPassword: string({ required_error: "password is required" }).min(8),
  })
    .strict()
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    }),

  resetPassword: object({
    email: string({ required_error: "email is required" }).email({
      message: "email format is not supported",
    }),

    otp: string({ required_error: "otp is required" }).length(6, {
      message: "Must be exactly 6 characters long",
    }),
    password: string({ required_error: "password is required" }).min(8),
    confirmPassword: string({ required_error: "password is required" }).min(8),
  })
    .strict()
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    }),
};

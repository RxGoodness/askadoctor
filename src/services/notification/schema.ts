/**
 *
 * Required Exernal Modules
 *
 */

import { string, number, object, literal } from "zod";
import { parseUrl } from "../../commons";

/**
 *
 * Schemas
 *
 */

export default {
  /**
   *
   * send email
   *
   */

  sendEmail: object({
    email: string({ required_error: "email is required" }).email({
      message: "email format is not supported",
    }),
    subject: string().optional(),
    body: string({
      required_error: "email body is required",
    }),
  }),

};

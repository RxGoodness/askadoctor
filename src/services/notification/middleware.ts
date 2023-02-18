/**
 *
 * Required External Modules
 *
 */

import { Request, Response, NextFunction } from "express";
import schema from "./schema";

/**
 *
 * middlewares
 *
 */

export default {
  /**
   *
   * send email
   *
   */

  async sendEmail(req: Request, res: Response, next: NextFunction) {
    try {
      await schema.sendEmail.parseAsync(req.body);
      next();
    } catch (error) {
      next(error);
    }
  },

};

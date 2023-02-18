/**
 *
 * Required External Modules
 *
 */

import { Request, Response, NextFunction } from "express";
import { APIresponse } from "../../commons";
import service from "./service";

/**
 *
 * controllers
 *
 */

export default {


  /**
   *
   * SendEmail
   *
   */
  async sendEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const options = req.body
      const data = await service.SendEmail(options);
      APIresponse(res, 200, `Email Sent successfully to ${options.email}`, data);
    } catch (error) {
      next(error);
    }
  },


};

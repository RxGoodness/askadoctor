/**
 *
 * Required External Modules
 *
 */

import { Request, Response, NextFunction } from 'express';
import schema from './schema';

/**
 *
 * middlewares
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
      await schema.createUser.parseAsync(req.body);
      next();
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
      await schema.findUser.parseAsync(req.body);
      next();
    } catch (error) {
      next(error);
    }
  },

};

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
  
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      await schema.login.parseAsync(req.body);
      next();
    } catch (error) {
      next(error);
    }
  },

  async sendUserVerification(req: Request, res: Response, next: NextFunction) {
    try {
      await schema.sendUserverification.parseAsync(req.body);
      next();
    } catch (error) {
      next(error);
    }
  },


  async verification(req: Request, res: Response, next: NextFunction) {
    try {
      await schema.verification.parseAsync(req.body);
      next();
    } catch (error) {
      next(error);
    }
  },

  async addDoctor(req: Request, res: Response, next: NextFunction) {
    try {
      await schema.addDoctor.parseAsync(req.body);
      next();
    } catch (error) {
      next(error);
    }
  },
  

  async changePassword(req: Request, res: Response, next: NextFunction) {
    try {
      await schema.changePassword.parseAsync(req.body);
      next();
    } catch (error) {
      next(error);
    }
  },

  async resetPassword(req: Request, res: Response, next: NextFunction) {
    try {
      await schema.resetPassword.parseAsync(req.body);
      next();
    } catch (error) {
      next(error);
    }
  },
  

};

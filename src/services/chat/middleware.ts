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
     * create chat
     *
     */

    async createChat(req: Request, res: Response, next: NextFunction) {
        try {
          await schema.createChat.parseAsync(req.body);
          next();
        } catch (error) {
          next(error);
        }
      },

      async addMessage(req: Request, res: Response, next: NextFunction) {
        try {
          await schema.addMessage.parseAsync(req.body);
          next();
        } catch (error) {
          next(error);
        }
      },

}
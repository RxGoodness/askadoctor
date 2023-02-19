import { Router } from 'express';
// import middleware from './middleware';
import {chatController} from './controller';
import { verifyAcessToken } from '../../commons';


/**
 *
 * define and export router
 *
 */

export const chatRouter: Router = Router();

/**
 *
 * Mount endpoints
 *
 */

// chatRouter.post('/create-chat', verifyAcessToken, chatController)
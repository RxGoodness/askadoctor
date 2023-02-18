/**
 *
 * Required External Modules
 *
 */

import { Router } from 'express';
import middleware from './middleware';
import controller from './controller';

/**
 *
 * define and export router
 *
 */

export const authRouter: Router = Router();

/**
 *
 * Mount endpoints
 *
 */

authRouter.post('/create-user', [middleware.createUser, controller.createUser]);
authRouter.post('/send-verification', [controller.sendVerification]);
authRouter.post('/verify-user', [controller.verifyUser]);
/**
 * @swagger
 * /api/auth/handshake:
 *   post:
 *     summary: AskADoctor Login
 *     tags: [AUTH]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Login email
 *                 example: example@example.com
 *     responses:
 *       200:
 *         description: Login successfully
 *       400:
 *         description: An error occured while Login in
 */
authRouter.post('/initiate-login', [middleware.findUser, controller.findUser]);

authRouter.post('/verify-login', [controller.verifyLogin]);

authRouter.post('/add-doctor', [controller.addDoctor])

authRouter.post('/change-password', [controller.changePassword])

authRouter.post('/forget-password', [controller.fogetPassword])



// authRouter.post('/verify-otp', [controller.verifyOtp]);

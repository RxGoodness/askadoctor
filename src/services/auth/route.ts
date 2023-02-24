/**
 *
 * Required External Modules
 *
 */

import { Router } from 'express';
import middleware from './middleware';
import controller from './controller';
import { verifyAcessToken } from '../../commons';

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
authRouter.post('/send-verification', [middleware.sendUserVerification, controller.sendVerification]);
authRouter.post('/verify-user', [middleware.verification, controller.verifyUser]);
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
authRouter.post('/initiate-login', [middleware.login, controller.findUser]);

authRouter.post('/verify-login', [middleware.verification, controller.verifyLogin]);

authRouter.post('/add-doctor', [verifyAcessToken, middleware.addDoctor,controller.addDoctor])

authRouter.post('/change-password', [verifyAcessToken, middleware.changePassword, controller.changePassword])

authRouter.post('/forget-password', [middleware.sendUserVerification, controller.fogetPassword])

authRouter.post('/reset-password', [middleware.resetPassword, controller.resetPassword])

authRouter.post('/login', [middleware.login, controller.login])


// authRouter.post('/verify-otp', [controller.verifyOtp]);

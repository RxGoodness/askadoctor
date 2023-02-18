/**
 *
 * Required External Modules
 *
 */

import { Router } from "express";
import middleware from "./middleware";
import { verifyAcessToken, authorize } from "../../commons";
import controller from "./controller";

/**
 *
 * define and export router
 *
 */

export const notificationRouter: Router = Router();

/**
 *
 * Mount endpoints
 *
 */

/**
 * @swagger
 * /api/notification/sendEmail:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Send Email
 *     tags: [NOTIFICATION]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                email:
 *                  type: string
 *                  description: Receipients email
 *                  example: example@example.com
 *                subject:
 *                  type: string
 *                  description: Subject of the Email (optional)
 *                body:
 *                  type: string
 *                  description: Email body
 *     responses:
 *       200:
 *         description: Email Sent
 *       400:
 *         description: An error occured
 */
notificationRouter.post("/sendEmail", [
  verifyAcessToken,
  middleware.sendEmail,
  controller.sendEmail,
]);

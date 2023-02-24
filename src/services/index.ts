/**
 *
 * Required External Modules
 *
 */

import { Router } from "express";
import { authRouter } from "./auth";
import {router as chatRouter} from "./chat"

import { SwaggerSpec } from "../commons";
const swaggerUi = require("swagger-ui-express");

/**
 *
 * Define and Export service router
 *
 */

export const services = Router();

services.use("/auth", authRouter);
services.use("/chat", chatRouter)

/**
 *
 *
 * SWAGGER UI setup
 *
 */
SwaggerSpec.setUpSwaggerJSDoc();
services.use("/docs", swaggerUi.serve);
services.get("/docs", swaggerUi.setup(SwaggerSpec.getSwaggerJSON()));

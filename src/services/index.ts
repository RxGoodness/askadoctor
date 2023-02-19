/**
 *
 * Required External Modules
 *
 */

import { Router } from "express";
import { authRouter } from "./auth";
import { chatRouter} from "./chat";
// import { eventRouter } from "./events";
// import { notificationRouter } from "./notification";
// import { miscRouter } from "./misc";
// import { adminRouter } from "./admin";
// import { ticketRouter } from "./tickets";
// import { withdrawRouter } from "./withdrawals";
// import { SwaggerSpec } from "../commons";
// const swaggerUi = require("swagger-ui-express");

/**
 *
 * Define and Export service router
 *
 */

export const services = Router();

services.use("/auth", authRouter);
services.use("/chat", chatRouter);
// services.use("/events", eventRouter);
// services.use("/tickets", ticketRouter);
// services.use("/misc", miscRouter);
// services.use("/admin", adminRouter);
// services.use("/notification", notificationRouter);
// services.use("/withdrawals", withdrawRouter);

/**
 *
 *
 * SWAGGER UI setup
 *
 */
// SwaggerSpec.setUpSwaggerJSDoc();
// services.use("/docs", swaggerUi.serve);
// services.get("/docs", swaggerUi.setup(SwaggerSpec.getSwaggerJSON()));

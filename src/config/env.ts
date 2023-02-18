/**
 *
 * Required External Modules
 *
 */

import dotenv from "dotenv";

/**
 *
 * Initialize dotenv
 *
 */

dotenv.config();

/**
 *
 * Serialize and export env variables
 *
 */

export const env = <string>process.env.ENV;

export const port = +(<string>(
  (env === "prod" || env === "prod2" ? process.env.PORT : process.env.DEV_PORT)
));

export const db_url = <string>(
  (env === "prod" || env === "prod2" ? process.env.DB : process.env.DEV_DB)
);

export const redis_url = <string>(
  (env === "prod" || env === "prod2"
    ? process.env.REDIS_URL
    : process.env.DEV_REDIS)
);

export const morgan_mode =
  env === "prod" || env === "prod2" ? "combined" : "dev";

export const jwt_secret = <string>process.env.JWT_SECRET;

export const pinata_jwt = <string>process.env.PINATA_JWT;

export const smtp_host = <string>process.env.SMTP_HOST;

export const smtp_port = <string>process.env.SMTP_PORT;

export const smtp_email = <string>process.env.SMTP_EMAIL;

export const smtp_password = <string>process.env.SMTP_PASSWORD;

export const discordurl = <string>process.env.DISCORD_WEBHOOK_URL;

export const flowscanUrl = <string>(
  (env === "prod" || env === "prod2"
    ? process.env.FLOWSCAN_PROD_URL
    : process.env.FLOWSCAN_TEST_URL)
);

export const paystack_secret = <string>(
  (env === "prod" || env === "prod2"
    ? process.env.P_SECRET_PROD
    : process.env.P_SECRET_TEST)
);

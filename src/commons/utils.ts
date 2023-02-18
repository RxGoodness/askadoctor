/**
 *
 * Required External Modules
 *
 */

import { Response, Request, NextFunction } from "express";
import { APIError } from "./errors";
import { IDecoded, jwt } from "./jwt";
// import { customAlphabet } from 'nanoid';
import axios, { AxiosError } from "axios";
import {
  port,
  env,
  smtp_host,
  smtp_port,
  smtp_email,
  discordurl,
  smtp_password,
} from "../config";
import * as path from "path";
const swaggerJSDoc = require("swagger-jsdoc");
import * as nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
// const { Webhook, MessageBuilder } = require("discord-webhook-node");
// const discordHook = new Webhook(discordurl);

export interface ISendEmail {
  email: string;
  subject?: string;
  cc?: string[];
  attachments?: any;
  body: any;
}
export interface IUpgradeDiscord {
  currentLevel: any;
  nextLevel: any;
  email: string;
  username: any;
}

export interface IWithdrawDiscord {
  currentLevel: any;
  amount: number;
  email: string;
  username: any;
  eventName: string;
}

/**
 *
 * APIresponse
 *
 */

export function APIresponse(
  res: Response,
  status: number,
  message: string,
  data: any
) {
  res.status(status).send({
    status: "success",
    message,
    data: Array.isArray(data) ? data : [data],
  });
}

/**
 *
 * parse url strings
 *
 */

export function parseUrl(val: string) {
  if (!val) return false;

  try {
    new URL(val);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 *
 * Grant access to specific roles
 *
 */

export const authorize = (...roles: any[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.decoded) {
        if (!roles.includes(req.decoded.role)) {
          throw new Error(
            `User role ${req.decoded.role} is not authorized to access this route`
          );
        }
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};

/**
 *
 * verify acessToken
 *
 */

export async function verifyAcessToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader = req.headers["authorization"];
    const bearerToken = handleAuthHeader(authHeader);

    const token = bearerToken.split(" ")[1];
    const decoded: IDecoded = await jwt.decode({ token });

    req.decoded = { id: decoded.id, role: decoded.role };
    next();
  } catch (error) {
    next(error);
  }
}

function handleAuthHeader(authHeader: string | undefined) {
  if (!authHeader) {
    throw new APIError({
      status: 401,
      message: "No authorization header set",
    });
  }

  return authHeader;
}


export function parseDate(val: string) {
  if (!val) return false;

  try {
    new Date(val).toISOString();
    return true;
  } catch (error) {
    return false;
  }
}

export function parseEventName(val: string) {
  if (!val) return false;
  return /^[a-z][a-z0-9]+$/.test(val);
}

export function refinePaginators(params: { skip: string; limit: string }) {
  const { limit, skip } = params;

  if (Number.isNaN(Number.parseInt(limit))) {
    throw new APIError({
      status: 400,
      message:
        "Invalid value received for limit. limit, if present, must be an integer",
      path: "Pagination",
    });
  }

  if (Number.isNaN(Number.parseInt(skip))) {
    throw new APIError({
      status: 400,
      message:
        "Invalid value received for skip. skip, if present, must be an integer",
      path: "Pagination",
    });
  }
  return { skip: +skip, limit: +limit };
}

export async function postData(params: {
  url: string;
  headers: any;
  data: any;
}) {
  try {
    const { url, headers, data } = params;

    const config = {
      method: "post",
      url,
      headers: { ...headers, "Content-Type": "application/json" },
      data,
    };

    const res = await axios(config);
    return res.data;
  } catch (error: any) {
    const err = <AxiosError<any>>error;

    const extraDetails = err.response?.data.error;
    const status = +(<number>err?.response?.status);

    console.error(err.response?.data);

    throw new APIError({
      status,
      message: "Stuff happened with the internal http client",
      name: "HTTPClientError",
      extras: JSON.stringify(extraDetails),
    });
  }
}

export function generateRandomString(n: number, x: number, y: number) {
  let randomString = "";
  let randomAlphaString = "";
  let randomNumString = "";

  let numCharacters = "0123456789";
  let letCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < n; i++) {
    randomString += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  for (let i = 0; i < x; i++) {
    randomNumString += numCharacters.charAt(
      Math.floor(Math.random() * numCharacters.length)
    );
  }
  for (let i = 0; i < y; i++) {
    randomAlphaString += letCharacters.charAt(
      Math.floor(Math.random() * letCharacters.length)
    );
  }
  return randomNumString + randomString + randomAlphaString;
}

const url =
  env === "prod" ? "https://app.AskADoctor.io" : `http://localhost:${port}`;
export class SwaggerSpec {
  private static swaggerJSON: any;
  constructor() {}
  static setUpSwaggerJSDoc() {
    const controllersPath = path.resolve("src", "services");
    let swaggerDefinition = {
      openapi: "3.0.0",
      info: {
        title: "AskADoctor API",
        version: "1.0.0",
        description: "Backend API service for AskADoctor",
      },
      tags: [""],
      host: ``,
      basePath: "/",
      servers: [
        {
          url,
          description: "AskADoctor --dev",
        },
        {
          url,
          description: "AskADoctor production",
        },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
    };
    let options = {
      swaggerDefinition: swaggerDefinition,
      apis: [controllersPath + "/**/route.ts"],
    };
    this.swaggerJSON = swaggerJSDoc(options);
  }

  static getSwaggerJSON() {
    return this.swaggerJSON;
  }
}

export const SendEmail = async (options: ISendEmail) => {
  const port = parseInt(smtp_port);
  const smtpConfig: SMTPTransport.Options = {
    host: smtp_host,
    port,
    secure: true,
    logger: false,
    debug: true,
    auth: {
      user: smtp_email,
      pass: smtp_password,
    },
  };
  const transporter = nodemailer.createTransport(smtpConfig);

  const message = {
    sender: "AskADoctor",
    from: `AskADoctor <${smtp_email}>`,
    to: options.email,
    subject: options.subject,
    cc: options.cc,
    attachments: options.attachments,
    html: options.body,
  };

  const info = await transporter.sendMail(message);
  return info;
};

// export const SendDiscordNotification = async (embed: any) => {
//   discordHook.send(embed);
// };

// export const DiscordUpgradeBody = async (message: IUpgradeDiscord) => {
//   return new MessageBuilder()
//     .setTitle("Upgrade Request")
//     .addField("Current Level", message.currentLevel, true)
//     .addField("Next Level", message.nextLevel, true)
//     .addField("Email", message.email)
//     .addField("Username", message.username, true)
//     .setColor("#00b0f4")
//     .setThumbnail("https://cdn.discordapp.com/embed/avatars/0.png")
//     .setDescription(
//       "An event creator just requested for an upgrade to a new level"
//     )
//     .setFooter("AskADoctor")
//     .setTimestamp();
// };

// export const DiscordWithdrawalBody = async (message: IWithdrawDiscord) => {
//   return new MessageBuilder()
//     .setTitle("Withdrawal Request")
//     .addField("Current Level", message.currentLevel, true)
//     .addField("Amount", message.amount, true)
//     .addField("Email", message.email)
//     .addField("Username", message.username, true)
//     .addField("Event Name", message.eventName, true)
//     .setColor("#00b0f4")
//     .setThumbnail("https://cdn.discordapp.com/embed/avatars/0.png")
//     .setDescription("An event creator just requested for a withdrawal")
//     .setFooter("AskADoctor")
//     .setTimestamp();
// };


// export const generate2FACode = () => {
//   const code = customAlphabet('1234567890', 6);
//   return code();
// };

// export function generate2FACode() {
//   let code = 0;
//   for (let i = 0; i < 6; i++) {
//     code = code * 10 + Math.floor(Math.random() * 10);
//   }
//   return code;
// }


export function generate2FACode() {
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += Math.floor(Math.random() * 10);
  }
  return code;
}

export function doctorPassword(x:number, y:number) {
    let randomAlphaString = "";
    let randomNumString = "";
  
    let numCharacters = "123456789";
    let letCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < x; i++) {
      randomNumString += numCharacters.charAt(
        Math.floor(Math.random() * numCharacters.length)
      );
    }
    for (let i = 0; i < y; i++) {
      randomAlphaString += letCharacters.charAt(
        Math.floor(Math.random() * letCharacters.length)
      );
    }
    return randomAlphaString + randomNumString;
}
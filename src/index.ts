/**
 *
 * Required External Modules
 *
 */

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as path from 'path';
import http from 'http'
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
import { services } from './services';
import { createServer } from 'http';
import socketIO, { Server, Socket } from 'socket.io';
// import io from 'socket.io'
import {
  connectDatabases,
  morgan_mode,
  port,
  redisClient,
  env,
} from './config';
import { _404ErrorHandler, expressErrorHandler } from './commons';

/**
 *
 * Initialize app
 *
 */

const app = express();
// const server = http.createServer(app);
const server = createServer(app);



// import { createServer } from "http";
// import { Server, Socket } from "socket.io";

const httpServer = createServer();
// console.log(httpServer)
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

// io.on("connection", (socket: Socket) => {
//   // handle socket.io events
// });


interface User {
  userId: string;
  socketId: string;
}

let activeUsers: User[] = [];

io.on("connection", (socket: Socket) => {
  // add new User
  socket.on("new-user-add", (newUserId: string) => {
    // if user is not added previously
    if (!activeUsers.some((user) => user.userId === newUserId)) {
      activeUsers.push({ userId: newUserId, socketId: socket.id });
      console.log("New User Connected", activeUsers);
    }
    // send all active users to new user
    io.emit("get-users", activeUsers);
  });

  socket.on("disconnect", () => {
    // remove user from active users
    activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
    console.log("User Disconnected", activeUsers);
    // send all active users to all users
    io.emit("get-users", activeUsers);
  });

  // send message to a specific user
  socket.on("send-message", (data: { receiverId: string }) => {
    const { receiverId } = data;
    const user = activeUsers.find((user) => user.userId === receiverId);
    console.log("Sending from socket to :", receiverId);
    console.log("Data: ", data);
    if (user) {
      io.to(user.socketId).emit("recieve-message", data);
    }
  });
});

httpServer.listen(2500, () => {
    console.log("Socket Server running on port 2500");
  });



// io.on('connection', async (socket: Socket) => {
//   socket.emit('ping', { message: 'pong! successfully connected!' });

//   socket.on('ticket:buy', async (payload: { userId: string }) => {
//     const key = 'ticket:buy' + payload.userId;
//     await redisClient.setEx(key, 86400, socket.id);
//   });

//   socket.on('ticket:mint', async (payload: { userId: string }) => {
//     const key = 'ticket:mint' + payload.userId;
//     await redisClient.setEx(key, 86400, socket.id);
//   });
// });

/**
 *
 * Mount middleware
 *
 */

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(morgan(morgan_mode));

/**
 *
 * Connect Databases
 *
 */

connectDatabases();

/**
 *
 * Mount api
 *
 */

app.use('/api', services);

/**
 *
 *
 * SWAGGER UI setup
 *
 */
const url =
  env === 'prod'
    ? 'https://nftickets-be.herokuapp.com'
    : env === 'prod2'
    ? 'https://app.nftickets.io'
    : `http://localhost:${port}`;
export class SwaggerSpec {
  private static swaggerJSON: any;
  constructor() {}
  static setUpSwaggerJSDoc() {
    const controllersPath = path.resolve('src', 'services');
    let swaggerDefinition = {
      openapi: '3.0.0',
      info: {
        title: 'AskADoctor API',
        version: '1.0.0',
        description: 'Backend API service for AskADoctor',
      },
      tags: [''],
      host: ``,
      basePath: '/',
      servers: [
        {
          url,
          description: 'AskADoctor --dev',
        },
        {
          url,
          description: 'AskADoctor production',
        },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    };
    let options = {
      swaggerDefinition: swaggerDefinition,
      apis: [controllersPath + '/**/route.js'],
    };
    this.swaggerJSON = swaggerJSDoc(options);
  }

  static getSwaggerJSON() {
    return this.swaggerJSON;
  }
}
SwaggerSpec.setUpSwaggerJSDoc();
app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(SwaggerSpec.getSwaggerJSON())
);

/**
 *
 * Mount error handlers
 *
 */

app.use(_404ErrorHandler);
app.use(expressErrorHandler);

/**
 *
 * Initialise
 *
 */

try {
  server.listen(port, () => {
    console.log(`Server started on port: ${port}`);
  });
} catch (error: any) {
  console.error(`An error occured on startup: ${error.message}`);
}

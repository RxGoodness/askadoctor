/**
 *
 * Required External Modules
 *
 */

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as path from 'path';
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
import { services } from './services';
import ChatService from './services/chat/service';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import {
  connectDatabases,
  morgan_mode,
  port,
  redisClient,
  env,
} from './config';
import { _404ErrorHandler, expressErrorHandler } from './commons';
// import { chatService } from './services/chatService';
import { Message, IMessage } from './models/chat';
import mongoose from 'mongoose';


/**
 *
 * Initialize app
 *
 */

const app = express();
const server = createServer(app);



const io = new Server(server);


// Define socket event listeners
io.on('connection', (socket: Socket) => {
  console.log(`User connected: ${socket.id}`);

  // Handle incoming chat messages
  socket.on('message', async (data: { content: string, senderId: string, receiverId: string }) => {
    const { content, senderId, receiverId } = data;

    try {
      const message: IMessage = await Message.create({
        content,
        senderId: new mongoose.Types.ObjectId(senderId),
        receiverId: new mongoose.Types.ObjectId(receiverId),
        timestamp: new Date(),
      });

      socket.emit('message', message);
      socket.to(receiverId).emit('message', message);
    } catch (error) {
      console.error(error);
    }
  });

  // Handle socket disconnections
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});


// io.on('connection', (socket: Socket) => {
//   console.log(`User connected: ${socket.id}`);

//   // Listen for chat messages
//   socket.on('chat-message', async (data) => {
//     try {
//       // Store the message in the database
//       const message = await ChatService.saveMessage(data.message);

//       // Broadcast the message to all connected clients
//       io.emit('chat-message', { message });
//     } catch (err) {
//       console.error(`Failed to store chat message: ${err}`);
//     }
//   });

//   // Disconnect event
//   socket.on('disconnect', () => {
//     console.log(`User disconnected: ${socket.id}`);
//   });
// });
// export const io = new Server(server, {
//   cors: { origin: '*' },
//   transports: ['polling', 'websocket'],
// });

/**
 *
 * mount sockets
 *
 */

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

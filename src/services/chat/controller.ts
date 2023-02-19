import { Socket } from 'socket.io';
import { Message, IMessage } from '../../models/chat';
// import { User } from '../models/User';
import { userModel, IUser } from "../../models";

import ChatService  from './service';

export const chatController = (socket: Socket, user: IUser) => {
  // Broadcast the user's presence to other connected clients
  socket.broadcast.emit('user connected', user);

  // Handle incoming messages
  socket.on('message', async (content: string) => {
    const message: IMessage = {
      content,
      senderId: user._id,
      timestamp: new Date(Date.now()),
      receiverId: user._id,
    };

    // Store the message in the database
    await ChatService.saveMessage(content, user._id, user._id);

    // Broadcast the message to other clients
    socket.broadcast.emit('message', message);
  });

  // Handle disconnections
  socket.on('disconnect', async () => {
    // Broadcast the user's absence to other connected clients
    socket.broadcast.emit('user disconnected', user);
  });
};

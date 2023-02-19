// import { MongoClient, Collection, FilterQuery, SortOptionObject } from 'mongodb';
// import { Message } from '../../models/chat';

// export class ChatService {
//   private messageCollection: Collection<Message>;

//   constructor(mongoURI: string, dbName: string) {
//     // this.messageCollection = null; // Initialize to a default value
//     // this.connectToDatabase(); // Call a method to connect to the
//     MongoClient.connect(mongoURI)
//       .then((client) => {
//         const db = client.db(dbName);
//         this.messageCollection = db.collection('messages');
//       })
//       .catch((err) => {
//         console.error(`Failed to connect to MongoDB: ${err}`);
//         process.exit(1);
//       });
//   }

//   async storeMessage(message: Message): Promise<void> {
//     try {
//       await this.messageCollection.insertOne(message);
//     } catch (err) {
//       console.error(`Failed to store message in database: ${err}`);
//       throw err;
//     }
//   }

//   async getMessages(filter: FilterQuery<Message>, sort: SortOptionObject): Promise<Message[]> {
//     try {
//       const messages = await this.messageCollection.find(filter).sort(sort).toArray();
//       return messages;
//     } catch (err) {
//       console.error(`Failed to retrieve messages from database: ${err}`);
//       throw err;
//     }
//   }
// }

// // Create an instance of the ChatService using the MongoDB URI and database name
// export const chatService = new ChatService(process.env.MONGO_URI as string, process.env.MONGO_DB_NAME as string);


import { IUser } from '../../models/users';
import { IMessage, Message } from '../../models/chat';

// export class ChatService {
export default {

  async getMessages(senderId: IUser['_id'], receiverId: IUser['_id']): Promise<IMessage[]> {
    const messages = await Message.find({
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    })
      .populate('senderId', 'username')
      .populate('receiverId', 'username')
      .sort('timestamp')
      .exec();
    return messages;
  },

  async saveMessage(content: string, senderId: IUser['_id'], receiverId: IUser['_id']): Promise<IMessage> {
    const timestamp = new Date();
    const message = new Message({ content, senderId, receiverId, timestamp });
    await message.save();
    return message;
  }
}

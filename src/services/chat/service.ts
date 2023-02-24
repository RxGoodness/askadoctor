/**
 *
 * Required External Modules
 *
 */

// import { userModel, IUser } from "../../models";
import { APIError } from "../../commons";
import {
  chatModel,
  messageModel,
  postModel,
  IPost,
  userModel,
  IMessage,
} from "../../models";

/**
 *
 * Services
 *
 */

export default {
  /**
   *
   * create user
   *
   */

  async createChat(params: { senderId: string; receiverId: string }) {
    const { senderId, receiverId } = params;
    const newChat = new chatModel({
      members: [senderId, receiverId],
    });
    const result = await newChat.save();
    return result;
  },

  /**
   *
   * sendVerification
   *
   */

  async userChat(params: { userId: string }) {
    const { userId } = params;
    const chat = await chatModel.find({
      members: { $in: [userId] },
    });
    return chat;
  },

  async findChat(params: { firstId: string; secondId: string }) {
    const { firstId, secondId } = params;
    const chat = await chatModel.findOne({
      members: { $all: [firstId, secondId] },
    });
    return chat;
  },

  async addMessage(params: IMessage) {
    const { senderId, chatId, receiverId, text } = params;
    const sender = senderId ? await userModel.findById(senderId) : null;

    if (!senderId) {
      throw new APIError({
        status: 403,
        message: "Unauthorized to perform this operation",
        path: "chat messages",
      });
    }

    // Find receiver role
    const receiver = receiverId ? await userModel.findById(receiverId) : null;
    const message = new messageModel({
      chatId,
      senderId,
      receiverId,
      senderRole: sender?.role,
      receiverRole: receiver?.role,
      text,
    });
    const result = await message.save();
    return result;
  },

  async getMessage(params: { chatId: string }) {
    const { chatId } = params;
    const result = await messageModel.find({ chatId });
    return result;
  },

  // Get all messages from a user
  async getUserMessage(params: { senderId: string }) {
    const { senderId } = params;
    if (!senderId) {
      throw new APIError({
        status: 403,
        message: "Unauthorized to perform this operation",
        path: "chat messages",
      });
    }
    const result = await messageModel.find({
      $or: [{ senderId }, { receiverId: senderId }],
    });
    return result;
  },

  // Get all messages
  async getAllMessage() {
    const result = await messageModel.find();
    return result;
  },

  // creating a post
  async createPost(params: IPost) {
    const body = params;
    const newPost = new postModel(body);

    const result = await newPost.save();
    return result;
  },

  // get a post
  async getPost(params: { id: string }) {
    const { id } = params;

    const post = await postModel.findById(id);
    return post;
  },

  // update post
  async updatePost(params: { postId: string; body: IPost }) {
    const postId = params.postId;
    const { userId } = params.body;

    const post: IPost | null = await postModel.findById(postId);
    if (post && post.userId === userId) {
      await post.updateOne({ $set: params.body });
      return "Post updated!";
    } else {
      return "Authentication failed";
    }
  },

  // delete a post
  async deletePost(params: { id: string; userId: string }) {
    const { id, userId } = params;
    const post: IPost | null = await postModel.findById(id);
    if (post && post.userId === userId) {
      await post.deleteOne();
      return "Post deleted.";
    } else {
      return "Action forbidden";
    }
  },
};

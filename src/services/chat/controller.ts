import { NextFunction, Request, Response } from "express";
import {
  ChatsModel,
  MessagesModel,
  PostsModel,
  UserModel,
  IChats,
  IPosts,
  IUser,
  userModel,
} from "../../models";
import { getMessages } from "./controllers";
import { APIresponse } from '../../commons';
import service from './service';

import mongoose from "mongoose";

// import {MessageModel} from "../../../models";

export default {

/**
   *
   * create chat
   *
   */


async createChats(req: Request, res: Response, next: NextFunction) {
  try {
    const senderId = <string>req.decoded?.id;
    const {receiverId} = req.body;
    console.log("chack new implementation")
    const data = await service.createChats({senderId, receiverId});

    APIresponse(res, 201, 'Chat created', data);
  } catch (error) {
    next(error);
  }
},

  async AcreateChats(req: Request, res: Response) {
    const senderId = req.decoded?.id;
    const newChat = new ChatsModel({
      members: [senderId, req.body.receiverId],
    });
    try {
      const result = await newChat.save();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async userChatss(req: Request, res: Response, next: NextFunction) {
    try {
      const {userId} = req.params;
      // const pa
      // const {receiverId} = req.body;
      const data = await service.userChatss({userId});
  
      APIresponse(res, 201, 'User chats retrieved successfully', data);
    } catch (error) {
      next(error);
    }
  },

  async AuserChatss(req: Request, res: Response) {
    try {
      const chat = await ChatsModel.find({
        members: { $in: [req.params.userId] },
      });
      res.status(200).json(chat);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async findChats(req: Request, res: Response, next: NextFunction) {
    try {
      const {firstId, secondId} = req.params
      const data = await service.findChats({firstId, secondId});
  
      APIresponse(res, 201, 'Chats retrieved successfully', data);
    } catch (error) {
      next(error);
    }
  },


  async AfindChats(req: Request, res: Response) {
    try {
      const chat = await ChatsModel.findOne({
        members: { $all: [req.params.firstId, req.params.secondId] },
      });
      res.status(200).json(chat);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async addMessagess(req: Request, res: Response, next: NextFunction) {
    try {
    const senderId = req.decoded?.id;
    const body = req.body
      // const {firstId, secondId} = req.params
      const data = await service.addMessagess({senderId, ...body});
  
      APIresponse(res, 201, 'Message added successfully', data);
    } catch (error) {
      next(error);
    }
  },


  async AaddMessagess(req: Request, res: Response) {
    const senderId = req.decoded?.id;
    // Find sender role
    const sender = senderId ? await userModel.findById(senderId) : null;
    // if (!sender) return res.status(401).json({ message: "Unauthorized" });
    
    if (!senderId) return res.status(401).json({ message: "Unauthorized" });
    const { chatId, recieverId, text } = req.body;
    // Find reciever role
    const reciever = recieverId ? await userModel.findById(recieverId) : null;
    const message = new MessagesModel({
      chatId,
      senderId,
      recieverId,
        senderRole: sender?.role,
        recieverRole: reciever?.role,
      text,
    });
    try {
      const result = await message.save();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  },


  async getMessagess(req: Request, res: Response, next: NextFunction) {
    try {
    const {chatId} = req.params;
    // const body = req.body
      // const {firstId, secondId} = req.params
      const data = await service.getMessagess({chatId});
  
      APIresponse(res, 201, 'Message retrieved successfully', data);
    } catch (error) {
      next(error);
    }
  },


  async AgetMessagess(req: Request, res: Response) {
    const { chatId } = req.params;
    try {
      const result = await MessagesModel.find({ chatId });
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  },


  async getUserMessages(req: Request, res: Response, next: NextFunction) {
    try {
    // const {chatId} = req.params;
    const {senderId} = req.params;
    // const body = req.body
      // const {firstId, secondId} = req.params
      const data = await service.getUserMessages({senderId});
  
      APIresponse(res, 201, 'Message retrieved successfully', data);
    } catch (error) {
      next(error);
    }
  },
  // Get all messages from a user
    async AgetUserMessages(req: Request, res: Response) {
        const {senderId} = req.params;
        if (!senderId) return res.status(401).json({ message: "Unauthorized" });
        try {
            const result = await MessagesModel.find({
                $or: [{ senderId }, { recieverId: senderId }],
            });
            res.status(200).json(result);
        }catch(error) {
            res.status(500).json(error);
        }
    },


    async getAllMessages(req: Request, res: Response, next: NextFunction) {
      try {
      // const {chatId} = req.params;
      // const {senderId} = req.params;
      // const body = req.body
        // const {firstId, secondId} = req.params
        const data = await service.getAllMessages();
    
        APIresponse(res, 201, 'All Messages retrieved successfully', data);
      } catch (error) {
        next(error);
      }
    },
    // Get all messages
    async AgetAllMessages(req: Request, res: Response) {
        try {
            const result = await MessagesModel.find();
            res.status(200).json(result);
        }catch(error) {
            res.status(500).json(error);
        }
    },


    async createPosts(req: Request, res: Response, next: NextFunction) {
      try {
      // const {chatId} = req.params;
      // const {senderId} = req.params;
      const body = req.body
        // const {firstId, secondId} = req.params
        const data = await service.createPosts(body);
    
        APIresponse(res, 201, 'Post created successfully', data);
      } catch (error) {
        next(error);
      }
    },
  // creating a post

  async AcreatePosts(req: Request, res: Response) {
    const newPost: IPosts = new PostsModel(req.body);

    try {
      await newPost.save();
      res.status(200).json(newPost);
    } catch (error) {
      res.status(500).json(error);
    }
  },


  // get a post



  async getPosts(req: Request, res: Response, next: NextFunction) {
    try {
    const {id} = req.params;
    // const {senderId} = req.params;
    // const body = req.body
      // const {firstId, secondId} = req.params
      const data = await service.getPosts({id});
  
      APIresponse(res, 201, 'Posts retrieved successfully', data);
    } catch (error) {
      next(error);
    }
  },

  async AgetPosts(req: Request, res: Response) {
    const id: string = req.params.id;

    try {
      const post: IPosts | null = await PostsModel.findById(id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  },



  // update post


  async updatePosts(req: Request, res: Response, next: NextFunction) {
    try {
    const {postId} = req.params;
    // const {senderId} = req.params;
    const body = req.body
      // const {firstId, secondId} = req.params
      const data = await service.updatePosts({postId, body});
  
      APIresponse(res, 201, 'Post updated successfully', data);
    } catch (error) {
      next(error);
    }
  },


  async AupdatePosts(req: Request, res: Response) {
    const postId: string = req.params.id;
    const { userId } = req.body;

    try {
      const post: IPosts | null = await PostsModel.findById(postId);
      if (post && post.userId === userId) {
        await post.updateOne({ $set: req.body });
        res.status(200).json("Post updated!");
      } else {
        res.status(403).json("Authentication failed");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },




  // delete a post
  async deletePosts(req: Request, res: Response, next: NextFunction) {
    try {
    const {id} = req.params;
    // const {senderId} = req.params;
    const {userId} = req.body
      // const {firstId, secondId} = req.params
      const data = await service.deletePosts({id, userId});
  
      APIresponse(res, 201, 'Post deleted successfully', data);
    } catch (error) {
      next(error);
    }
  },


  async AdeletePosts(req: Request, res: Response) {
    const id: string = req.params.id;
    const { userId } = req.body;

    try {
      const post: IPosts | null = await PostsModel.findById(id);
      if (post && post.userId === userId) {
        await post.deleteOne();
        res.status(200).json("Post deleted.");
      } else {
        res.status(403).json("Action forbidden");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // like/dislike a post
  async likePosts(req: Request, res: Response) {
    const id: string = req.params.id;
    const { userId } = req.body;
    try {
      const post: IPosts | null = await PostsModel.findById(id);
      if (post && post.likes.includes(userId)) {
        await post.updateOne({ $pull: { likes: userId } });
        res.status(200).json("Post disliked");
      } else if (post) {
        await post.updateOne({ $push: { likes: userId } });
        res.status(200).json("Post liked");
      } else {
        res.status(404).json("Post not found");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //     // Get timeline posts
  // async getTimelinePosts(req: Request, res: Response){
  //     const userId: string = req.params.id
  //     try {
  //     const currentUserPosts: IPosts[] = await PostsModel.find({ userId: userId });
  //     const followingPosts: IUser[] = await UserModel.aggregate([
  //         {
  //           $match: {
  //             _id: new mongoose.Types.ObjectId(userId),
  //           },
  //         },
  //         {
  //           $lookup: {
  //             from: "posts",
  //             localField: "following",
  //             foreignField: "userId",
  //             as: "followingPosts",
  //           },
  //         },
  //         {
  //           $project: {
  //             followingPosts: 1,
  //             _id: 0,
  //           },
  //         },
  //       ]);

  //       res.status(200).json(
  //         currentUserPosts
  //           .concat(...followingPosts[0].followingPosts)
  //           .sort((a, b) => {
  //             return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  //         })
  //         );
  //       } catch (error) {
  //         res.status(500).json(error);
  //       }
  //     },
};

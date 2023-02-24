import { NextFunction, Request, Response } from "express";
import {
  postModel,
  IPost,
} from "../../models";
import { APIresponse } from '../../commons';
import service from './service';


export default {

/**
   *
   * create chat
   *
   */


async createChat(req: Request, res: Response, next: NextFunction) {
  try {
    const senderId = <string>req.decoded?.id;
    const {receiverId} = req.body;
    const data = await service.createChat({senderId, receiverId});

    APIresponse(res, 201, 'Chat created', data);
  } catch (error) {
    next(error);
  }
},

async userChat(req: Request, res: Response, next: NextFunction) {
    try {
      const {userId} = req.params;
      const data = await service.userChat({userId});
  
      APIresponse(res, 201, 'User chats retrieved successfully', data);
    } catch (error) {
      next(error);
    }
  },

  
  async findChat(req: Request, res: Response, next: NextFunction) {
    try {
      const {firstId, secondId} = req.params
      const data = await service.findChat({firstId, secondId});
  
      APIresponse(res, 201, 'Chats retrieved successfully', data);
    } catch (error) {
      next(error);
    }
  },


  async addMessage(req: Request, res: Response, next: NextFunction) {
    try {
    const senderId = req.decoded?.id;
    const body = req.body
    const data = await service.addMessage({senderId, ...body});
  
      APIresponse(res, 201, 'Message added successfully', data);
    } catch (error) {
      next(error);
    }
  },


  

  async getMessage(req: Request, res: Response, next: NextFunction) {
    try {
    const {chatId} = req.params;
      const data = await service.getMessage({chatId});
  
      APIresponse(res, 201, 'Message retrieved successfully', data);
    } catch (error) {
      next(error);
    }
  },


  // Get all messages from a user
  async getUserMessage(req: Request, res: Response, next: NextFunction) {
    try {
    const {senderId} = req.params;
      const data = await service.getUserMessage({senderId});
  
      APIresponse(res, 201, 'Message retrieved successfully', data);
    } catch (error) {
      next(error);
    }
  },

    async getAllMessage(req: Request, res: Response, next: NextFunction) {
      try {
        const data = await service.getAllMessage();
    
        APIresponse(res, 201, 'All Messages retrieved successfully', data);
      } catch (error) {
        next(error);
      }
    },
  

  // creating a post
    async createPost(req: Request, res: Response, next: NextFunction) {
      try {
      const body = req.body
        const data = await service.createPost(body);
    
        APIresponse(res, 201, 'Post created successfully', data);
      } catch (error) {
        next(error);
      }
    },

  
  // get a post
  async getPost(req: Request, res: Response, next: NextFunction) {
    try {
    const {id} = req.params;
      const data = await service.getPost({id});
  
      APIresponse(res, 201, 'Posts retrieved successfully', data);
    } catch (error) {
      next(error);
    }
  },


  // update post
  async updatePost(req: Request, res: Response, next: NextFunction) {
    try {
    const {postId} = req.params;
    const body = req.body
      const data = await service.updatePost({postId, body});
  
      APIresponse(res, 201, 'Post updated successfully', data);
    } catch (error) {
      next(error);
    }
  },


  // delete a post
  async deletePost(req: Request, res: Response, next: NextFunction) {
    try {
    const {id} = req.params;
    const {userId} = req.body
      const data = await service.deletePost({id, userId});
  
      APIresponse(res, 201, 'Post deleted successfully', data);
    } catch (error) {
      next(error);
    }
  },


  
  // like/dislike a post
  async likePost(req: Request, res: Response) {
    const id: string = req.params.id;
    const { userId } = req.body;
    try {
      const post: IPost | null = await postModel.findById(id);
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

};

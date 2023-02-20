import { Request, Response } from "express";
import {PostModel,  IPost,UserModel, IIUser } from "../../../models";
// import {UserModel, IUser } from "../models/userModel";
import mongoose from "mongoose";

// creating a post

export const createPost = async (req: Request, res: Response) => {
const newPost: IPost = new PostModel(req.body);

try {
await newPost.save();
res.status(200).json(newPost);
} catch (error) {
res.status(500).json(error);
}
};

// get a post

export const getPost = async (req: Request, res: Response) => {
const id: string = req.params.id;

try {
const post: IPost | null = await PostModel.findById(id);
res.status(200).json(post);
} catch (error) {
res.status(500).json(error);
}
};

// update post
export const updatePost = async (req: Request, res: Response) => {
const postId: string = req.params.id;
const { userId } = req.body;

try {
const post: IPost | null = await PostModel.findById(postId);
if (post && post.userId === userId) {
await post.updateOne({ $set: req.body });
res.status(200).json("Post updated!");
} else {
res.status(403).json("Authentication failed");
}
} catch (error) {
res.status(500).json(error);
}
};

// delete a post
export const deletePost = async (req: Request, res: Response) => {
const id: string = req.params.id;
const { userId } = req.body;

try {
const post: IPost | null = await PostModel.findById(id);
if (post && post.userId === userId) {
await post.deleteOne();
res.status(200).json("Post deleted.");
} else {
res.status(403).json("Action forbidden");
}
} catch (error) {
res.status(500).json(error);
}
};

// like/dislike a post
export const likePost = async (req: Request, res: Response) => {
const id: string = req.params.id;
const { userId } = req.body;
try {
const post: IPost | null = await PostModel.findById(id);
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
};

// Get timeline posts
export const getTimelinePosts = async (req: Request, res: Response) => {
const userId: string = req.params.id
try {
const currentUserPosts: IPost[] = await PostModel.find({ userId: userId });
const followingPosts: IIUser[] | any = await UserModel.aggregate([
    { 
      $match: {
        _id: new mongoose.Types.ObjectId(userId),
      },
    },
    {
      $lookup: {
        from: "posts",
        localField: "following",
        foreignField: "userId",
        as: "followingPosts",
      },
    },
    {
      $project: {
        followingPosts: 1,
        _id: 0,
      },
    },
  ]);
  
  res.status(200).json(
    currentUserPosts
      .concat(...followingPosts[0].followingPosts)
      .sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    })
    );
  } catch (error) {
    res.status(500).json(error);
  }
};
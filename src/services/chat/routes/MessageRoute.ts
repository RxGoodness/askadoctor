import express from 'express'
import { Request, Response } from 'express'
import { createChat, findChat, userChats } from '../controllers/ChatController';
const router = express.Router()

router.post('/', (req: Request, res: Response) => {
  createChat(req, res);
});

router.get('/:userId', (req: Request, res: Response) => {
  userChats(req, res);
});

router.get('/find/:firstId/:secondId', (req: Request, res: Response) => {
  findChat(req, res);
});

export default router;

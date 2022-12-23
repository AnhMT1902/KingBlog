import {Router} from "express";
import LikeController from "../controller/likeController";

export const likeRouter = Router();
likeRouter.get('/', LikeController.getLike)
likeRouter.delete('/', LikeController.distLike)
likeRouter.post('/', LikeController.addLike)
import {Router} from "express";
import commentController from "../controller/commentController";

export const commentRouter = Router();
commentRouter.get('/', commentController.showComment)
commentRouter.post('/', commentController.makeComment)
commentRouter.delete('/:id', commentController.deleteComment)
commentRouter.put('/:id', commentController.updateComment)

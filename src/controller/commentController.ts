import CommentService from "../service/commentService";
import {Request, Response} from "express";

export class CommentController {

    showComment = async (req: Request, res: Response) => {
        let comment = await CommentService.findByBlogId()
        return res.status(200).json(comment)
    }
    makeComment = async (req: Request, res: Response) => {
        let comment = req.body
        await CommentService.saveComment(req.body)
        return res.status(200).json(comment)
    }
    deleteComment = async (req: Request, res: Response) => {
        await CommentService.delete(req.params.id)
        return res.status(201).json({message: 'delete ok'})
    }
    updateComment = async (req: Request, res: Response) => {
        await CommentService.edit(req.params.id, req.body)
        return res.status(201).json({message: 'update ok'})
    }
}

export default new CommentController()


import LikeService from "../service/likeService";
import {Request, Response} from "express";

class LikeController {
    getLike = async (req: Request, res: Response) => {
        let likes = await LikeService.like()
        return res.status(200).json(likes)
    }
    distLike = async (req: Request, res: Response) => {
        let like = req.query
        console.log(req.query)
        let distLikes = await LikeService.distLike(like)
        return res.status(200).json(distLikes)
    }
    addLike = async (req: Request, res: Response) => {
        let like = req.body
        let addLikes = await LikeService.addLike(like)
        return res.status(200).json(addLikes)
    }
}

export default new LikeController()
import {Request, Response} from "express";
import BlogService from "../service/blogService";

class BlogController {

    showAll = async (req: Request, res: Response) => {
        let blogs = await BlogService.find()
        return res.status(200).json(blogs);
    }

    createBlog = async (req: Request, res: Response) => {
        console.log(req.body)
        let blog = await BlogService.create(req.body)
        return res.status(200).json(blog);
    }

    editBlogs = async (req: Request, res: Response) => {
        await BlogService.update(req.params.id, req.body)
        return res.status(200).json({message: 'ok'});
    }

    removeBlogs = async (req: Request, res: Response) => {
        let blogs = await BlogService.delete(req, res)
        return res.json(blogs);
    }

}

export default new BlogController;



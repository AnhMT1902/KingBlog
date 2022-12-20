import {Blog} from "../model/blog";
import {AppDataSource} from "../data-source";
import {Request, Response} from "express";

class BlogService {
    private blogRepository: any;

    constructor() {
        this.blogRepository = AppDataSource.getRepository(Blog);
    }

    find = async () => {
        return await this.blogRepository.find()
    }

    create = async (blog) => {
        return await this.blogRepository.save(blog);
    }

    update = async (id, blog) => {
        const query = `UPDATE blog
                       SET title       = '${blog.title}',
                           image       = '${blog.image}',
                           status      = ${blog.status},
                           description = '${blog.description}'
                       WHERE id = ${id};`
        return await this.blogRepository.query(query)
    }

    delete = async (req: Request, res: Response) => {
        let id = req.params.id
        await this.blogRepository.delete(id)
        res.status(201).json({
            message : "delete ok"
        })
    }

}

export default new BlogService()


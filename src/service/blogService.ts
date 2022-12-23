import {Blog} from "../model/blog";
import {AppDataSource} from "../data-source";
import {Request, Response} from "express";

class BlogService {
    private blogRepository: any;

    constructor() {
        this.blogRepository = AppDataSource.getRepository(Blog);
    }

    find = async () => {
        let sql = `select blog.id,
                          title,
                          image,
                          status,
                          createTime,
                          description,
                          userId,
                          username,
                          avatar
                   from blog
                            join user u on u.id = blog.userId;`
        return await this.blogRepository.query(sql)
    }

    create = async (blog) => {

        let data = {
            title: blog.title,
            image: blog.image,
            status: +blog.status,
            createTime: blog.createTime,
            description: blog.description,
            userID: +blog.userID
        }
        console.log(data)
        let sql = `INSERT INTO \`blog\` (title, status, userId, createTime, description, image)
                   VALUES ('${data.title}', ${data.status}, +${data.userID}, '${data.createTime}', '${data.description}
                           ', '${data.image}');`
        console.log(sql)
        return await this.blogRepository.query(sql);
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
            message: "delete ok"
        })
    }

}

export default new BlogService()


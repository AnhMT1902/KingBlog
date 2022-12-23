"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blog_1 = require("../model/blog");
const data_source_1 = require("../data-source");
class BlogService {
    constructor() {
        this.find = async () => {
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
                            join user u on u.id = blog.userId;`;
            return await this.blogRepository.query(sql);
        };
        this.create = async (blog) => {
            let data = {
                title: blog.title,
                image: blog.image,
                status: +blog.status,
                createTime: blog.createTime,
                description: blog.description,
                userID: +blog.userID
            };
            console.log(data);
            let sql = `INSERT INTO \`blog\` (title, status, userId, createTime, description, image)
                   VALUES ('${data.title}', ${data.status}, +${data.userID}, '${data.createTime}', '${data.description}
                           ', '${data.image}');`;
            console.log(sql);
            return await this.blogRepository.query(sql);
        };
        this.update = async (id, blog) => {
            const query = `UPDATE blog
                       SET title       = '${blog.title}',
                           image       = '${blog.image}',
                           status      = ${blog.status},
                           description = '${blog.description}'
                       WHERE id = ${id};`;
            return await this.blogRepository.query(query);
        };
        this.delete = async (req, res) => {
            let id = req.params.id;
            await this.blogRepository.delete(id);
            res.status(201).json({
                message: "delete ok"
            });
        };
        this.blogRepository = data_source_1.AppDataSource.getRepository(blog_1.Blog);
    }
}
exports.default = new BlogService();
//# sourceMappingURL=blogService.js.map
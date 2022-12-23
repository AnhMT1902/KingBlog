"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const comment_1 = require("../model/comment");
class CommentService {
    constructor() {
        this.findByBlogId = async () => {
            return await this.commentRepository.find();
        };
        this.saveComment = async (data) => {
            return await this.commentRepository.save(data);
        };
        this.delete = async (id) => {
            const query = `DELETE
                       FROM comment
                       WHERE id = ` + id;
            return await this.commentRepository.query(query);
        };
        this.edit = async (id, data) => {
            const query = `UPDATE comment
                       SET content = '${data.content}'
                       WHERE id = ${id}`;
            return await this.commentRepository.query(query);
        };
        this.commentRepository = data_source_1.AppDataSource.getRepository(comment_1.Comment);
    }
}
exports.default = new CommentService();
//# sourceMappingURL=commentService.js.map
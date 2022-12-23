import {AppDataSource} from "../data-source";
import {Comment} from "../model/comment";

class CommentService {
    private commentRepository: any

    constructor() {
        this.commentRepository = AppDataSource.getRepository(Comment)
    }

    findByBlogId = async () => {
        return await this.commentRepository.find()
    }
    saveComment = async (data) => {
        return await this.commentRepository.save(data)
    }
    delete = async (id) => {
        const query = `DELETE
                       FROM comment
                       WHERE id = ` + id;
        return await this.commentRepository.query(query)
    }
    edit = async (id, data) => {
        const query = `UPDATE comment
                       SET content = '${data.content}'
                       WHERE id = ${id}`
        return await this.commentRepository.query(query)
    }
}

export default new CommentService()
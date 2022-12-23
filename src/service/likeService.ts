import {AppDataSource} from "../data-source";
import {Comment} from "../model/comment";
import {Like} from "../model/like";

class LikeService {
    private likeRepository: any;

    constructor() {
        this.likeRepository = AppDataSource.getRepository(Like)
    }

    like = async () => {
        let sql = `select *
                   from \`like\``
        return await this.likeRepository.query(sql)
    }
    distLike = async (like) => {
        console.log('like',like)
        let sql = `delete
                   from \`like\`
                   where blogId = +${like.blogId}
                     and userId = +${like.userId}`
        return await this.likeRepository.query(sql)
    }
    addLike = async (like) => {
        let sql =`INSERT INTO \`like\` (userId, blogId)
               VALUES (${like.userId}, ${like.blogId});`
        return await this.likeRepository.query(sql)
    }

}

export default new LikeService()
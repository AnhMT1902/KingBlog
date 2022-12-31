import {User} from "../model/user";
import {AppDataSource} from "../data-source";
import bcrypt from 'bcrypt';

export class UserService {
    private userRepository: any;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    findAll = async () => {
        let sql = `select *
                   from user
                   where not id = 1`
        return await this.userRepository.query(sql)
    }
    save = async (user) => {
        let query = `select *
                     from user
                     where username = '${user.username}'`
        let userFind = await this.userRepository.query(query);
        if (userFind.length != 0) {
            return {
                message: "has the same name"
            }
        } else {
            user.password = await bcrypt.hash(user.password, 10)
            return await this.userRepository.save(user)
        }
    }
    login = async (username) => {
        let query = `select *
                     from user
                     where username = '${username}'`
        return (await this.userRepository.query(query))[0];
    }

    delete = async (id) => {
        const query = `DELETE
                       FROM user
                       WHERE id = ` + id;
        return await this.userRepository.query(query)
    }
}

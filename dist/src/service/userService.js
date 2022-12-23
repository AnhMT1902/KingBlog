"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_1 = require("../model/user");
const data_source_1 = require("../data-source");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    constructor() {
        this.findAll = async () => {
            let sql = `select *
                    from user
                    where not id = 1`;
            return await this.userRepository.query(sql);
        };
        this.save = async (user) => {
            let query = `select *
                     from user
                     where username = '${user.username}'`;
            let userFind = await this.userRepository.query(query);
            if (userFind.length != 0) {
                return {
                    message: "has the same name"
                };
            }
            else {
                user.password = await bcrypt_1.default.hash(user.password, 10);
                return await this.userRepository.save(user);
            }
        };
        this.login = async (username) => {
            let query = `select *
                     from user
                     where username = '${username}'`;
            return (await this.userRepository.query(query))[0];
        };
        this.delete = async (id) => {
            const query = `DELETE
                       FROM user
                       WHERE id = ` + id;
            return await this.userRepository.query(query);
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map
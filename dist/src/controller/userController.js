"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userService_1 = require("../service/userService");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserController {
    constructor() {
        this.getAll = async (req, res) => {
            let user = await this.userService.findAll();
            return res.status(200).json(user);
        };
        this.register = async (req, res) => {
            let userAdd = await this.userService.save(req.body);
            res.status(200).json(userAdd);
        };
        this.login = async (req, res) => {
            let user = req.body;
            let userFind = await this.userService.login(user.username);
            if (!userFind) {
                return res.status(201).json({
                    message: 'User is not exist'
                });
            }
            else {
                let comparePassword = await bcrypt_1.default.compare(user.password, userFind.password);
                if (!comparePassword) {
                    return res.status(200).json({
                        message: "pass is wrong"
                    });
                }
                else {
                    let payload = {
                        id: userFind.id,
                        username: userFind.username
                    };
                    let secret = 'king';
                    let token = jsonwebtoken_1.default.sign(payload, secret, {
                        expiresIn: 36000
                    });
                    return res.status(200).json({
                        token: token,
                        user: payload
                    });
                }
            }
        };
        this.delete = async (req, res) => {
            let user = await this.userService.delete(req.params.id);
            return res.status(200).json(user);
        };
        this.userService = new userService_1.UserService();
    }
}
exports.UserController = UserController;
exports.default = new UserController();
//# sourceMappingURL=userController.js.map
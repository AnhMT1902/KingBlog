import {UserService} from "../service/userService";
import {Request, Response} from "express";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    getAll = async (req: Request, res: Response) => {
        let user = await this.userService.findAll()
        console.log(user)
        return res.status(200).json(user)
    }

    register = async (req: Request, res: Response) => {
        let userAdd = await this.userService.save(req.body)
        res.status(200).json(userAdd)
    }

    login = async (req: Request, res: Response) => {
        let user = req.body
        let userFind = await this.userService.login(user.username)
        console.log(userFind)
        if (!userFind) {
            return res.status(200).json({
                message: 'User is not exist'
            })
        } else {
            let comparePassword = await bcrypt.compare(user.password, userFind.password)
            if (!comparePassword) {
                return res.status(200).json({
                    message: "pass is wrong"
                })
            } else {
                let payload = {
                    idUser: userFind._id,
                    username: userFind.username
                }
                let secret = 'king'
                let token = jwt.sign(payload, secret, {
                    expiresIn: 36000
                })
                return res.status(200).json(
                    {token: token}
                )
            }
        }
    }

    delete = async (req: Request, res: Response) => {
        await this.userService.delete(req.params.id)
        return res.status(201).json({message: 'ok'})
    }
}
export default new UserController()
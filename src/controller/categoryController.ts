import CategoryService from "../service/categoryService";
import {Request, Response} from "express";

export class CategoryController {

    showC = async (req: Request, res: Response) => {
        let category = await CategoryService.find()
        return res.status(200).json(category)
    }
    addC = async (req: Request, res: Response) => {
        let category = req.body
        await CategoryService.save(req.body)
        return res.status(200).json(category)
    }

}

export default new CategoryController()
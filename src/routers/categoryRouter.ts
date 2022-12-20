import {Router} from "express";
import CategoryController from "../controller/categoryController";

export const categoryRouter = Router();
categoryRouter.get('/', CategoryController.showC)
categoryRouter.post('/', CategoryController.addC)
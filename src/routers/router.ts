import {Router} from "express";
import {userRouter} from "./userRouter";
import {categoryRouter} from "./categoryRouter";
import {commentRouter} from "./commentRouter";
import {blogRouter} from "./blogRouter";

export const router = Router();
router.use('/admin', userRouter);
router.use('', categoryRouter)
router.use('', commentRouter)
router.use('', blogRouter)
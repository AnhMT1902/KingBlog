import {Router} from "express";
import {userRouter} from "./userRouter";
import {categoryRouter} from "./categoryRouter";
import {commentRouter} from "./commentRouter";
import {blogRouter} from "./blogRouter";
import {likeRouter} from "./likeRouter";

export const router = Router();
router.use('/user', userRouter);
router.use('/category', categoryRouter)
router.use('/comment', commentRouter)
router.use('/like', likeRouter)
router.use('/blog', blogRouter)
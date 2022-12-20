"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const userRouter_1 = require("./userRouter");
const categoryRouter_1 = require("./categoryRouter");
const commentRouter_1 = require("./commentRouter");
const blogRouter_1 = require("./blogRouter");
exports.router = (0, express_1.Router)();
exports.router.use('/admin', userRouter_1.userRouter);
exports.router.use('', categoryRouter_1.categoryRouter);
exports.router.use('', commentRouter_1.commentRouter);
exports.router.use('', blogRouter_1.blogRouter);
//# sourceMappingURL=router.js.map
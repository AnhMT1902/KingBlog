"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentController = void 0;
const commentService_1 = __importDefault(require("../service/commentService"));
class CommentController {
    constructor() {
        this.showComment = async (req, res) => {
            let comment = await commentService_1.default.findByBlogId();
            return res.status(200).json(comment);
        };
        this.makeComment = async (req, res) => {
            let comment = req.body;
            await commentService_1.default.saveComment(req.body);
            return res.status(200).json(comment);
        };
        this.deleteComment = async (req, res) => {
            await commentService_1.default.delete(req.params.id);
            return res.status(201).json({ message: 'delete ok' });
        };
        this.updateComment = async (req, res) => {
            await commentService_1.default.edit(req.params.id, req.body);
            return res.status(201).json({ message: 'update ok' });
        };
    }
}
exports.CommentController = CommentController;
exports.default = new CommentController();
//# sourceMappingURL=commentController.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const categoryService_1 = __importDefault(require("../service/categoryService"));
class CategoryController {
    constructor() {
        this.showC = async (req, res) => {
            let category = await categoryService_1.default.findAllCategory();
            return res.status(200).json(category);
        };
        this.addC = async (req, res) => {
            let category = req.body;
            category = await categoryService_1.default.creatCate(category);
            return res.status(200).json(category);
        };
    }
}
exports.CategoryController = CategoryController;
exports.default = new CategoryController();
//# sourceMappingURL=categoryController.js.map
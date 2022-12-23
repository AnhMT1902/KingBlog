"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const category_1 = require("../model/category");
const data_source_1 = require("../data-source");
class CategoryService {
    constructor() {
        this.findAllCategory = async () => {
            return await this.categoryRepository.find();
        };
        this.creatCate = async (data) => {
            return await this.categoryRepository.save(data);
        };
        this.categoryRepository = data_source_1.AppDataSource.getRepository(category_1.Category);
    }
}
exports.CategoryService = CategoryService;
exports.default = new CategoryService();
//# sourceMappingURL=categoryService.js.map
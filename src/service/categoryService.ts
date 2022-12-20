import {Category} from "../model/category";
import {AppDataSource} from "../data-source";

export class CategoryService {
    private categoryRepository: any

    constructor() {
        this.categoryRepository = AppDataSource.getRepository(Category)
    }

    find = async () => {
        return await this.categoryRepository.find()
    }
    save = async (data) => {
        return await this.categoryRepository.save(data)
    }
}

export default new CategoryService()
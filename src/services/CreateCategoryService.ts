import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

/**
 * Service to create a new category
 * @param name string
 * @param description string
 */
class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists =
            this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error(`Category ${name} already exists`);
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };

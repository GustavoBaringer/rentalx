import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

/**
 * Service to create a new category
 * @param name string
 * @param description string
 */
class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error(`Category ${name} already exists`);
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };

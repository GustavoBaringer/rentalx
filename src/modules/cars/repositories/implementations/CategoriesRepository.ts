import { Repository } from "typeorm";
import { Category } from "../../entities/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "../ICategoriesRepository";

import { dataSource } from "../../../../database";

class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;

    private static INSTANCE: CategoriesRepository;

    private constructor() {
        this.repository = dataSource.getRepository(Category);
    }

    public static getInstance(): CategoriesRepository {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }

        return CategoriesRepository.INSTANCE;
    }

    /**
     * Creates a new category
     * @param name
     * @param description
     * @returns void
     */
    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            name,
            description,
        });

        await this.repository.save(category);
    }

    /**
     * Returns all categories
     */
    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }

    /**
     * @return Category | Undefined
     */
    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOneBy({name: name});
        return category;
    }
}

export { CategoriesRepository };

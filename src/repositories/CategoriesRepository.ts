import { Category } from "../modules/cars/entities/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "../modules/cars/repositories/ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    /**
     * Creates a new category
     * @param name
     * @param description
     * @returns void
     */
    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, { name, description });

        this.categories.push(category);
    }

    /**
     * Returns all categories
     */
    list(): Category[] {
        return this.categories;
    }

    /**
     * @return Category | Undefined
     */
    findByName(name: string): Category | undefined {
        return this.categories.find((category) => category.name === name);
    }
}

export { CategoriesRepository };

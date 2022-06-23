import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listCategoriesService = container.resolve(ListCategoriesUseCase);
        return res.json(await listCategoriesService.execute());
    }
}

export { ListCategoriesController };

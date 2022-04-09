import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoriesController {
    constructor(private listCategoriesService: ListCategoriesUseCase) {}

    handle(req: Request, res: Response): Response {
        return res.json(this.listCategoriesService.execute());
    }
}

export { ListCategoriesController };

import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
    async handlle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        const authenticateUserUseCase = container.resolve(
            AuthenticateUserUseCase
        );

        const data = await authenticateUserUseCase.execute({ email, password });

        return res.status(200).send(data);
    }
}

export { AuthenticateUserController };

import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUsersDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersReposity") private usersRepository: IUsersRepository
    ) {}

    async execute({
        name,
        username,
        password,
        email,
        driver_license,
    }: ICreateUserDTO): Promise<void> {
        await this.usersRepository.create({
            name,
            username,
            password,
            email,
            driver_license,
        });
    }
}

export { CreateUserUseCase };

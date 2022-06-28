import { ICreateUserDTO } from "../dtos/ICreateUsersDTO";

interface IUsersRepository {
    create(user: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };

import { ICreateUserDTO } from "../dtos/ICreateUsersDTO";
import { User } from "../entities/User";

interface IUsersRepository {
    create(user: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
}

export { IUsersRepository };

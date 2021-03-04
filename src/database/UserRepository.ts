import { getConnection } from "typeorm";
import { ICreateUser, IDeleteUser } from "../controllers/useCases/userUseCases/UserDTO";
import { User } from "../entities/User";

export class UserRepository {
  async create(user: User): Promise<User> {
    const createUser = await getConnection()
    .getRepository(User)
    .save(user);

    return createUser;
  }

  async delete({id, email}: IDeleteUser): Promise<boolean> {
    const user = await getConnection()
    .getRepository(User);

    const userToRemove = await user
    .findOne({ id, email });

    await user.remove(userToRemove as User);

    return true;
  }

  async execute(id: string, user?: ICreateUser): Promise<string> {
    return id;
  }

  async index(id: string): Promise<void> {
    return;
  }

  async show(): Promise<void> {
    return;
  }
}
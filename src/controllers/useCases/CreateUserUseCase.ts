import { User } from "../../entities/User";
import { ICreateUser } from "./UserDTO";

export class CreateUserUseCase {
  async create(data: ICreateUser) {
    const userAlreadyExists = false;

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const user = await new User(data);

    return user;
  }
}
import { User } from "../../entities/User";
import { IUser } from "./UserDTO";

export class UpdateUserUseCase {
  async execute(data: IUser) {
    const userAlreadyExists = true;

    if (!userAlreadyExists) {
      throw new Error('User do not exists.');
    }

    const user = await new User(data);

    return user;
  }
}
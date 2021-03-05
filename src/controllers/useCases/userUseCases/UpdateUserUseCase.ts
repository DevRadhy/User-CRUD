import { UserRepository } from "../../../database/UserRepository";
import { IUser } from "./UserDTO";

export class UpdateUserUseCase {
  constructor(
    private userRepository: UserRepository,
  ){}
  
  async execute(user: IUser) {
    const userAlreadyExists = true;

    if (!userAlreadyExists) {
      throw new Error('User do not exists.');
    }

    const updateUser = await this.userRepository.execute(user);

    return updateUser;
  }
}
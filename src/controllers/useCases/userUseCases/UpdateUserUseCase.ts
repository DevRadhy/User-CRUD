import { UserRepository } from "../../../database/UserRepository";
import { ICreateUser } from "./UserDTO";

export class UpdateUserUseCase {
  constructor(
    private userRepository: UserRepository,
  ){}
  
  async execute(id: string, user: ICreateUser) {
    const userAlreadyExists = true;

    if (!userAlreadyExists) {
      throw new Error('User do not exists.');
    }

    const updateUser = await this.userRepository.execute(id, user);

    return updateUser;
  }
}
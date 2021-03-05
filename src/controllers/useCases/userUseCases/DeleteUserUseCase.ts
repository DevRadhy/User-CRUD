import { UserRepository } from "../../../database/UserRepository";
import { IDeleteUser } from "./UserDTO";

export class DeleteUserUseCase {
  constructor(
    private userRepository: UserRepository,
  ){}
  
  async delete(data: IDeleteUser): Promise<boolean> {
    const userAlreadyExists = true;

    if (!userAlreadyExists) {
      throw new Error('User do not exists.');
    }

    return this.userRepository.delete(data);
  }
}
import { UserRepository } from "../../../database/UserRepository";
import { User } from "../../../entities/User";

export class ShowUserUseCase {
  constructor(
    private userRepository: UserRepository,
  ){}
  
  async index(id: string): Promise<User> {
    const showUser = await this.userRepository.index(id);

    if (!showUser) {
      throw new Error('Address does not exists.');
    }

    return showUser;
  }

  async show():Promise<User[]> {
    const showUser = await this.userRepository.show();

    return showUser
  }
}
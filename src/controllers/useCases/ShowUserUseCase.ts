import { UserRepository } from "../../database/UserRepository";

export class ShowUserUseCase {
  constructor(
    private userRepository: UserRepository,
  ){}
  
  async index(id: string) {
    const userAlreadyExists = true;

    if (!userAlreadyExists) {
      throw new Error('User do not exists.');
    }

    const showUser = await this.userRepository.index(id);

    return showUser;
  }

  async show() {
    const showUser = await this.userRepository.show();
  }
}
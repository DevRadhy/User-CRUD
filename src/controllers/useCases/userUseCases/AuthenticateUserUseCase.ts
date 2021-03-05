import { UserRepository } from "../../../database/UserRepository";

export class AutheticateUserUseCase {
  constructor(
    private userRepository: UserRepository,
  ){}
  
  async findUser(email: string): Promise<string> {
    const user = await this.userRepository.findUserByEmail(email);

    return user.id;
  }
}
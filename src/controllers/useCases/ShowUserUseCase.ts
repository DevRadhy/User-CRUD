export class CreateUserUseCase {
  async create(id: string) {
    const userAlreadyExists = true;

    if (!userAlreadyExists) {
      throw new Error('User do not exists.');
    }

    return id;
  }
}
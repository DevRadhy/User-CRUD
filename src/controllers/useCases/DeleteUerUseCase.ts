import { IDeleteUser } from "./UserDTO";

export class DeleteUserUseCase {
  async delete(data: IDeleteUser) {
    const userAlreadyExists = true;

    if (!userAlreadyExists) {
      throw new Error('User do not exists.');
    }

    const deleteUser = true;

    return deleteUser;
  }
}
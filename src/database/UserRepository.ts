import { getRepository } from "typeorm";
import { IDeleteUser, IUser } from "../controllers/useCases/userUseCases/UserDTO";
import { User } from "../entities/User";

export class UserRepository {
  async create(user: User): Promise<User> {
    const userRepository = getRepository(User);

    const findUser = userRepository.findOne({ id: user.id });

    if (!findUser) {
      throw new Error('User does not exists.');
    }

    const createUser = await userRepository.save(user);

    return createUser;
  }

  async delete({id, email}: IDeleteUser): Promise<boolean> {
    const userRepository = getRepository(User);

    const userToRemove = await userRepository.findOne({ id, email });

    if (!userToRemove) {
      throw new Error('User does not exists.');
    }

    await userRepository.remove(userToRemove);

    return true;
  }

  async execute({ id, name, email, age, phone, weight }: IUser): Promise<User> {
    const userRepository = getRepository(User);

    const updateUser = await userRepository.update(id, {
      name,
      email,
      age,
      phone,
      weight,
    });

    if (updateUser.affected === 0) {
      throw new Error('User does not exists.');
    }

    const updatedUser = await userRepository.findOne({ id });

    return updatedUser as User;
  }

  async index(id: string): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ id });

    return user as User;
  }

  async show(): Promise<User[]> {
    const users = await getRepository(User)
    .find();

    return users;
  }
}
import { UserRepository } from "../../../database/UserRepository";
import { User } from "../../../entities/User";
import { Ethnicities, ICreateUser } from "./UserDTO";

import { createAddressUseCase } from "../addressUseCases";

export class CreateUserUseCase {
  constructor(
    private userRepository: UserRepository,
  ){}

  async create({ address, ...data }: ICreateUser) {
    const userAlreadyExists = false;

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const userData = {
      name: data.name,
      age: data.age,
      email: data.email,
      phone: data.phone,
      weight: data.weight,
      ethnicity_id: Ethnicities[data.ethnicity_id],
    }

    const user = await new User(userData);

    const addressData = {
      user_id: user.id,
      address: address.address,
      number: address.number,
      complement: address.complement,
      cep: address.cep,
      city: address.city,
      state: address.state,
    }
    
    const createUser = this.userRepository.create(user);

    const userAddress = await createAddressUseCase.create(addressData);
    
    return { createUser, userAddress };
  }
}
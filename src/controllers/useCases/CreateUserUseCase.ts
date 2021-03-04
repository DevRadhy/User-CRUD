import { UserRepository } from "../../database/UserRepository";
import { Address, CEP, City, State } from "../../entities/Address";
import { User } from "../../entities/User";
import { Ethnicities, ICreateUser } from "./UserDTO";

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

    console.log(user)

    const cep = new CEP({cep: address.cep})
    const city = new City({city: address.city})
    const state = new State({state: address.state})

    const { cep_id, city_id, state_id } = await this.userRepository.getPrimaryAddress(cep.cep, city.city, state.state);

    const userAddress = await new Address({
      user_id: user.id,
      address: address.address,
      number: address.number,
      complement: address.complement,
      cep_id,
      city_id,
      state_id,
    });

    const createUser = this.userRepository.create(user, userAddress);
    
    return createUser;
  }
}
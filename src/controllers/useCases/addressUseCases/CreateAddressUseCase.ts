import { AddressRepository } from "../../../database/AddressRepository";
import { Address, CEP, City, State } from "../../../entities/Address";
import { ICreateAddress } from "./AddressDTO";

export class CreateAddressUseCase {
  constructor(
    private addressRepository: AddressRepository,
  ){}

  async create({ user_id, address, number, complement, cep, city, state }: ICreateAddress) {
    const userAlreadyExists = false;

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const addressCep = new CEP({ cep });
    const addressCity = new City({ city });
    const addressState = new State({ state });

    const { cep_id, city_id, state_id } = await this.addressRepository
    .getPrimaryAddress(
      addressCep.cep,
      addressCity.city,
      addressState.state
      );

    const userAddress = await new Address({
      user_id,
      address,
      number,
      complement,
      cep_id,
      city_id,
      state_id,
    });

    const createUser = this.addressRepository.create(userAddress);
    
    return createUser;
  }
}
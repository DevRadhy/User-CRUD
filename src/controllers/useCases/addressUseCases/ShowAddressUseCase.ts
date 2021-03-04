import { AddressRepository } from "../../../database/AddressRepository";

export class ShowAddressUseCase {
  constructor(
    private addressRepository: AddressRepository,
  ){}
  
  async index(id: string) {
    const userAlreadyExists = true;

    if (!userAlreadyExists) {
      throw new Error('User do not exists.');
    }

    const showUser = await this.addressRepository.index(id);

    return showUser;
  }

  async show() {
    const showUser = await this.addressRepository.show();
  }
}
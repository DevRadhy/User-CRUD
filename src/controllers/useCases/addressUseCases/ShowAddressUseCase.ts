import { AddressRepository } from "../../../database/AddressRepository";
import { Address } from "../../../entities/Address";

export class ShowAddressUseCase {
  constructor(
    private addressRepository: AddressRepository,
  ){}
  
  async index(user_id: string): Promise<Address> {
    const showAddress = await this.addressRepository.index(user_id);

    if (!showAddress) {
      throw new Error('Address does not exists.');
    }

    return showAddress;
  }

  async show(): Promise<Address[]> {
    const showUsers = await this.addressRepository.show();

    return showUsers;
  }
}
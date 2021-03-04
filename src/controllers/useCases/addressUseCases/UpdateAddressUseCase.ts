import { AddressRepository } from "../../../database/AddressRepository";
import { ICreateAddress } from "./AddressDTO";

export class UpdateAddressUseCase {
  constructor(
    private addressRepository: AddressRepository,
  ){}
  
  async execute(id: string, user: ICreateAddress) {
    const userAlreadyExists = true;

    if (!userAlreadyExists) {
      throw new Error('User do not exists.');
    }

    const updateUser = await this.addressRepository.execute(id, user);

    return updateUser;
  }
}
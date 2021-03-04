import { AddressRepository } from "../../../database/AddressRepository";
import { IDeleteAddress } from "./AddressDTO";

export class DeleteAddressUseCase {
  constructor(
    private addressRepository: AddressRepository,
  ){}
  
  async delete(data: IDeleteAddress) {
    const userAlreadyExists = true;

    if (!userAlreadyExists) {
      throw new Error('User do not exists.');
    }

    // const deleteUser = await this.userRepository.delete(data);

    // console.log(deleteUser)

    return this.addressRepository.delete(data);
  }
}
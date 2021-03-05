import { AddressRepository } from "../../../database/AddressRepository";
import { Address, CEP, City, State } from "../../../entities/Address";
import { ICreateAddress } from "./AddressDTO";

export class UpdateAddressUseCase {
  constructor(
    private addressRepository: AddressRepository,
  ){}
  
  async execute({user_id, address, number, complement, cep, city, state }: ICreateAddress) {
    const addressCep = await new CEP({ cep });
    const addressCity = await new City({ city });
    const addressState = await new State({ state });

    const { cep_id, city_id, state_id } = await this.addressRepository
    .getEssentialAddress(
      addressCep.cep,
      addressCity.city,
      addressState.state
      );

      const createAddress = await new Address({
        user_id,
        address,
        number,
        complement,
        cep_id,
        city_id,
        state_id,
      });

    const updateUser = await this.addressRepository.execute(createAddress);

    return updateUser;
  }
}
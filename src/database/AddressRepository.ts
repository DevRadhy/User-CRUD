import { getRepository } from "typeorm";
import { Address, CEP, City, State } from "../entities/Address";

export class AddressRepository {
  async getEssentialAddress(cep: string, city: string, state: string) {
    // Pega o repositório de CEP, City e State
    const cepRepository = getRepository(CEP);

    const cityRepository = getRepository(City);

    const stateRepository = getRepository(State);

    // Verifica se existe CEP, City e State
    const findCep = await cepRepository
    .findOne({ cep });

    const findCity = await cityRepository
    .findOne({ city });

    const findState = await stateRepository
    .findOne({ state });

    const cep_id = findCep ?? await cepRepository.save({ cep });
    const city_id = findCity ?? await cityRepository.save({ city });
    const state_id = findState ?? await stateRepository.save({ state });

    return {
      cep_id: cep_id.id,
      city_id: city_id.id,
      state_id: state_id.id,
    };
  }

  async create(address: Address): Promise<Address> {
    const addressRepository = getRepository(Address);

    const createAddress = await addressRepository.save(address);

    return createAddress;
  }

  async execute({ user_id, address, number, complement,  cep_id, city_id, state_id, }: Address): Promise<Address> {
    const addressRepository = getRepository(Address);

    const updateAddress = await addressRepository.update(user_id, {
      address,
      number,
      complement,
      cep_id,
      city_id,
      state_id,
    });

    if (updateAddress.affected === 0) {
      throw new Error('Address does not exists.');
    }

    const updatedAddress = await addressRepository.findOne({ user_id });

    return updatedAddress as Address;
  }

  async index(user_id: string): Promise<Address> {
    const addressRepository = getRepository(Address);

    const address = await addressRepository.findOne(
      {
        user_id,
      },
      {
        relations: [
          "cep_id",
          "city_id",
          "state_id",
        ]
      });

    return address as Address;
  }

  async show(): Promise<Address[]> {
    const addresses = await getRepository(Address)
    .find({ relations: [
      "cep_id",
      "city_id",
      "state_id",
    ] });

    return addresses;
  }
}
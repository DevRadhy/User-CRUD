import { getConnection } from "typeorm";
import { ICreateAddress, IDeleteAddress } from "../controllers/useCases/addressUseCases/AddressDTO";
import { Address, CEP, City, State } from "../entities/Address";

export class AddressRepository {
  async getPrimaryAddress(cep: string, city: string, state: string) {
    // Pega o repositório de CEP, City e State
    const cepRepository = await getConnection()
    .getRepository(CEP);

    const cityRepository = await getConnection()
    .getRepository(City);

    const stateRepository = await getConnection()
    .getRepository(State);

    // Verifia se existe CEP, City e State
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
    const createAddress = await getConnection()
    .getRepository(Address)
    .save(address);

    return createAddress;
  }

  async delete(props: IDeleteAddress): Promise<boolean> {
    return true;
  }

  async execute(id: string, props: ICreateAddress): Promise<string> {
    return id;
  }

  async index(id: string): Promise<void> {
    return;
  }

  async show(): Promise<void> {
    return;
  }
}
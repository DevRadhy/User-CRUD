import { getConnection } from "typeorm";
import { ICreateAddress, IDeleteAddress } from "../controllers/useCases/addressUseCases/AddressDTO";
import { Address, CEP, City, State } from "../entities/Address";

export class AddressRepository {
  async getPrimaryAddress(cep: string, city: string, state: string) {
    const InsertedCep = await getConnection()
    .getRepository(CEP)
    .save({ cep });

    const InsertedCity = await getConnection()
    .getRepository(City)
    .save({ city });

    const InsertedState = await getConnection()
    .getRepository(State)
    .save({ state });

    return { 
      cep_id: InsertedCep.id,
      city_id: InsertedCity.id,
      state_id: InsertedState.id,
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
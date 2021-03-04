import { getConnection } from "typeorm";
import { ICreateUser, IDeleteUser } from "../controllers/useCases/UserDTO";
import { Address, CEP, City, State } from "../entities/Address";
import { User } from "../entities/User";

export class UserRepository {
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

  async create(user: User, address: Address) {
    const createUser = await getConnection()
    .getRepository(User)
    .save(user);

    const createAddress = await getConnection()
    .getRepository(Address)
    .save(address);

    const userCreated = {
      id: createUser.id,
      name: createUser.name,
      address: {
        createAddress
      }
    }

    return userCreated;
  }

  async delete({id, email}: IDeleteUser): Promise<boolean> {
    return true;
  }

  async execute(id: string, user?: ICreateUser): Promise<string> {
    return id;
  }

  async index(id: string): Promise<void> {
    return;
  }

  async show(): Promise<void> {
    return;
  }
}
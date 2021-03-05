import { CreateAddressUseCase } from "./CreateAddressUseCase";
import { AddressController } from "../../AddressController";
import { AddressRepository } from "../../../database/AddressRepository";
import { UpdateAddressUseCase } from "./UpdateAddressUseCase";
import { ShowAddressUseCase } from "./ShowAddressUseCase";

const addressRepository = new AddressRepository();

const createAddressUseCase = new CreateAddressUseCase(
  addressRepository,
);

const updateAddressUseCase = new UpdateAddressUseCase(
  addressRepository,
);

const showAddressUseCase = new ShowAddressUseCase(
  addressRepository,
);

const addressController = new AddressController(
  updateAddressUseCase,
  showAddressUseCase,
);

export { addressController, createAddressUseCase };
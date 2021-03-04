import { CreateAddressUseCase } from "./CreateAddressUseCase";
import { AddressController } from "../../AddressController";
import { AddressRepository } from "../../../database/AddressRepository";
import { DeleteAddressUseCase } from "./DeleteAddressUseCase";
import { UpdateAddressUseCase } from "./UpdateAddressUseCase";
import { ShowAddressUseCase } from "./ShowAddressUseCase";

const addressRepository = new AddressRepository();

const createAddressUseCase = new CreateAddressUseCase(
  addressRepository,
);

const deleteAddress = new DeleteAddressUseCase(
  addressRepository,
);

const updateAddress = new UpdateAddressUseCase(
  addressRepository,
);

const showAddress = new ShowAddressUseCase(
  addressRepository,
);

const addressController = new AddressController(
  createAddressUseCase,
  deleteAddress,
  updateAddress,
  showAddress,
);

export { addressController, createAddressUseCase, deleteAddress };
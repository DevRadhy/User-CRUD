import { CreateUserUseCase } from "./CreateUserUseCase";
import { UserController } from "../..//UserController";
import { UserRepository } from "../../../database/UserRepository";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { ShowUserUseCase } from "./ShowUserUseCase";
import { AutheticateUserUseCase } from "./AuthenticateUserUseCase";

const userRepository = new UserRepository();

const authenticateUserUseCase = new AutheticateUserUseCase(
  userRepository,
);

const createUserUseCase = new CreateUserUseCase(
  userRepository,
);

const deleteUser = new DeleteUserUseCase(
  userRepository,
);

const updateUser = new UpdateUserUseCase(
  userRepository,
);

const showUser = new ShowUserUseCase(
  userRepository,
);

const userController = new UserController(
  createUserUseCase,
  deleteUser,
  updateUser,
  showUser,
);

export { userController, authenticateUserUseCase };
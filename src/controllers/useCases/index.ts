import { CreateUserUseCase } from "./CreateUserUseCase";
import { UserController } from "../UserController";

const createUserUseCase = new CreateUserUseCase();

const userController = new UserController(
  createUserUseCase
);

export { userController };
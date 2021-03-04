import { Request, Response } from "express";
import { CreateUserUseCase } from "./useCases/userUseCases/CreateUserUseCase";
import { DeleteUserUseCase } from "./useCases/userUseCases/DeleteUserUseCase";
import { ShowUserUseCase } from "./useCases/userUseCases/ShowUserUseCase";
import { UpdateUserUseCase } from "./useCases/userUseCases/UpdateUserUseCase";

export class UserController {
   constructor(
    private createUserUseCase: CreateUserUseCase,
    private deleteUserUseCase: DeleteUserUseCase,
    private updateUserUseCase: UpdateUserUseCase,
    private showUserUseCase: ShowUserUseCase,
   ) {}

  async create(request: Request, response: Response): Promise<Response> {
    const { 
      name,
      age,
      email,
      phone,
      weight,
      ethnicity_id,
      address, 
    } = request.body;

      try {
        const user = await this.createUserUseCase.create({
          name,
          age,
          email,
          phone,
          weight,
          ethnicity_id,
          address,
        });

        return response.status(201).json(user);
      }catch (err) {
        return response.status(400).json({
          error: err.message
        });
      }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id, email } = request.body;

    try {
      const user = await this.deleteUserUseCase.delete({ id, email });

      return response.json(user);
    }catch (err) {
      return response.status(400).json({
        error: err.message
      });
    }
  }

  async execute(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      name,
      age,
      email,
      phone,
      weight,
      ethnicity_id,
      address } = request.body

    try {
      const user = await this.updateUserUseCase.execute(
        id,
        {
        name,
        age,
        email,
        phone,
        weight,
        ethnicity_id,
        address, });

      return response.json({ id: user });
    }catch (err) {
      return response.status(400).json({
        error: err.message
      });
    }
  }

  async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const user = await this.showUserUseCase.index(id);

      return response.json(user);
    }catch (err) {
      return response.status(400).json({
        error: err.message
      })
    }
  }

  async show(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.showUserUseCase.show();

      return response.json(users);
    }catch (err) {
      return response.status(400).json({
        error: err.message
      })
    }
  }
}
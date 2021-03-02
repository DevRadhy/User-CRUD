import { Request, Response } from "express";
import { CreateUserUseCase } from "./useCases/CreateUserUseCase";

export class UserController {
   constructor(
    private createUserUseCase: CreateUserUseCase
   ) {}

  async create(request: Request, response: Response): Promise<Response> {
    const { name,
      age,
      email,
      phone,
      weight,
      color, } = request.body;

      try {
        const user = await this.createUserUseCase.create({
          name,
          age,
          email,
          phone,
          weight,
          color,
        });

        return response.status(201).json(user);
      }catch (err) {
        return response.status(400).json({
          error: err.message
        });
      }
  }
}
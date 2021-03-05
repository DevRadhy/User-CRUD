import { Request, Response } from "express";
import { ShowAddressUseCase } from "./useCases/addressUseCases/ShowAddressUseCase";
import { UpdateAddressUseCase } from "./useCases/addressUseCases/UpdateAddressUseCase";

import { addressScheme } from "../Providers/Validator/AddressValidator";

export class AddressController {
   constructor(
    private updateAddressUseCase: UpdateAddressUseCase,
    private showAddressUseCase: ShowAddressUseCase,
   ) {}
   async execute(request: Request, response: Response): Promise<Response> {
      const id = request.user_id;
      const {
        address,
        number,
        complement,
        cep,
        city,
        state,
      } = request.body;

      try {
        addressScheme.validate(request.body, { abortEarly: false });

        const updateAddress = await this.updateAddressUseCase.execute({
          user_id: id,
          address,
          number,
          complement,
          cep,
          city,
          state,
        });

        return response.json(updateAddress);
      }catch (err) {
        return response.status(400).json({
          error: err.message
        })
      }
    }

   async index(request: Request, response: Response): Promise<Response> {
     const { id } = request.params;

     try {
       const address = await this.showAddressUseCase.index(id);

       return response.json(address);
     }catch (err) {
       return response.status(400).json({
         error: err.message
       })
     }
   }

   async show(request: Request, response: Response): Promise<Response> {
    try {
      const address = await this.showAddressUseCase.show();

      return response.json(address);
    }catch (err) {
      return response.status(400).json({
        error: err.message
      })
    }
  }
}
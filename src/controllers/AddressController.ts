import { Request, Response } from "express";
import { CreateAddressUseCase } from "./useCases/addressUseCases/CreateAddressUseCase";
import { ShowAddressUseCase } from "./useCases/addressUseCases/ShowAddressUseCase";
import { UpdateAddressUseCase } from "./useCases/addressUseCases/UpdateAddressUseCase";

export class AddressController {
   constructor(
    private createAddressUseCase: CreateAddressUseCase,
    private updateAddressUseCase: UpdateAddressUseCase,
    private showAddressUseCase: ShowAddressUseCase,
   ) {}

   async create(request: Request, response: Response): Promise<Response> {
      const { 
         user_id,
         address,
         number,
         complement,
         cep,
         city,
         state,
       } = request.body;

      try {
         const addresses = await this.createAddressUseCase.create({
            user_id,
            address,
            number,
            complement,
            cep,
            city,
            state,
         });
 
         return response.status(201).json(addresses);
       }catch (err) {
         return response.status(400).json({
           error: err.message
         });
       }
   }

   async execute(request: Request, response: Response): Promise<Response> {
      const { id } = request.params;
      const {
        address,
        number,
        complement,
        cep,
        city,
        state,
      } = request.body;

      try {
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
import { Request, Response } from "express";
import { CreateAddressUseCase } from "./useCases/addressUseCases/CreateAddressUseCase";
import { DeleteAddressUseCase } from "./useCases/addressUseCases/DeleteAddressUseCase";
import { ShowAddressUseCase } from "./useCases/addressUseCases/ShowAddressUseCase";
import { UpdateAddressUseCase } from "./useCases/addressUseCases/UpdateAddressUseCase";

export class AddressController {
   constructor(
    private createAddressUseCase: CreateAddressUseCase,
    private deleteAddressUseCase: DeleteAddressUseCase,
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
         const Address = await this.createAddressUseCase.create({
            user_id,
            address,
            number,
            complement,
            cep,
            city,
            state,
         });
 
         return response.status(201).json(Address);
       }catch (err) {
         return response.status(400).json({
           error: err.message
         });
       }
   }

   async delete(request: Request, response: Response): Promise<Response> {
      const { user_id } = request.body;
  
      try {
        const address = await this.deleteAddressUseCase.delete({ user_id });
  
        return response.json(address);
      }catch (err) {
        return response.status(400).json({
          error: err.message
        });
      }
    }
}
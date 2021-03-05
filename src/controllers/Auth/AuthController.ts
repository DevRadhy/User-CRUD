import { Request, Response } from "express";
import * as jwt from 'jsonwebtoken';

import { authenticateUserUseCase } from "../useCases/userUseCases";

export class AuthController {
  async authenticate(request: Request, response: Response) {
    const { email } = request.body;

    try {
      const user_id = await authenticateUserUseCase.findUser(email);

      if(!user_id) throw new Error('Verifique os dados e tente novamente.');

      const secret = String(process.env.JWT_SECRET_TOKEN);

      const token = jwt.sign({ id: user_id }, secret, {
        expiresIn: '1h'
      });

      return response.status(201).json({
        id: user_id,
        auth: true,
        token: token
      });
    }catch(err) {
      console.log(err);
      return response.status(400).json({
        error: err.message
      });
    }
  }
}
import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken';

interface TokenPayload {
  id: string;
  iat: number;
  exp: number
}

export class Authorize {
  async authorizate(request: Request, response: Response, next: NextFunction): Promise<any> {
    const { authorization } = request.headers;

    try {
      if(!authorization) throw new Error('Invalid authentication');

      const token = authorization.replace('Bearer', '').trim();
      
      const secret = String(process.env.JWT_SECRET_TOKEN);

      const data = jwt.verify(token, secret);

      const { id } = data as TokenPayload;
      
      request.user_id = id
      next();
    }catch(err) {
      return response.status(400).json({
        error: err.message
      });
    }
  }
}
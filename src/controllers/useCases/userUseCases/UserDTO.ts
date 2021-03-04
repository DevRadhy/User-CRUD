export interface ICreateUser {
  name: string;
  age: number;
  email: string;
  phone: string;
  weight: number;
  ethnicity_id: Ethnicities;
  address: {
    user_id: string,
    address: string,
    number: number,
    complement: string,
    cep: string,
    city: string,
    state: string,
  };
}

export interface IUser extends ICreateUser {
  id: string;
}

export interface IDeleteUser {
  id: string;
  email: string;
}

export enum Ethnicities {
  Brancos = 1,
  Pardos,
  Pretos,
  Amarelos,
  Indígenas,
  Outros,
}
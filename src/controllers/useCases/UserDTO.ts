export interface ICreateUser {
  name: string;
  age: number;
  email: string;
  phone: string;
  weight: number;
  color: string;
}

export interface IUser extends ICreateUser {
  id: string;
}

export interface IDeleteUser {
  id: string;
  email: string;
}
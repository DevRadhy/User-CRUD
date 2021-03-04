export interface ICreateAddress {
  user_id: string,
  address: string,
  number: number,
  complement: string,
  cep: string,
  city: string,
  state: string,
}

export interface IDeleteAddress {
  user_id: string;
}
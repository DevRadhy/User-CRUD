export class User {
  adress: string;
  number: string;
  comlement: string;
  cep: string;
  street: string;
  city: string;
  uf: string;

  constructor(props: User) {
    Object.assign(this, props);
  }
}
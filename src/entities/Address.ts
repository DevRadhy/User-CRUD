export class Address {
  adress: string;
  number: string;
  comlement: string;
  cep: string;
  street: string;
  city: string;
  uf: string;

  constructor(props: Address) {
    Object.assign(this, props);
  }
}
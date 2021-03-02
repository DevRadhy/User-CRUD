import { v4 as uuidv4 } from 'uuid';

export class User {
  readonly id: string;
  name: string;
  age: number;
  email: string;
  phone: string;
  weight: number;
  color: string;

  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      id = uuidv4();
    }
  }
}
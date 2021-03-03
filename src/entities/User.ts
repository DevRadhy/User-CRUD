import { v4 as uuidv4 } from 'uuid';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Ethnicities } from '../controllers/useCases/UserDTO';

@Entity('users')
export class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  weight: number;

  @Column()
  ethnicity: Ethnicities;

  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      id = uuidv4();
    }
  }
}
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('addresses')
export class Address {
  @PrimaryColumn()
  user_id: string;

  @Column()
  adress: string;

  @Column()
  number: string;

  @Column()
  comlement: string;
  
  @Column()
  cep: string;

  @Column()
  city: string;

  @Column()
  state: string;

  constructor(props: Address) {
    Object.assign(this, props);
  }
}
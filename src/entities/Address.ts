import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('address')
export class Address {
  @ PrimaryColumn()
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
  uf: string;

  constructor(props: Address) {
    Object.assign(this, props);
  }
}
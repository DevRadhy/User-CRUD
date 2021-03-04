import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

export abstract class Content {
  @PrimaryGeneratedColumn()
  readonly id: string;
}

@Entity('ceps')
export class CEP extends Content {
  @Column()
  cep: string;

  constructor(props: Omit<CEP, "id">) {
    super();
    Object.assign(this, props);
  }
}

@Entity('cities')
export class City extends Content {
  @Column()
  city: string;

  constructor(props: Omit<City, "id">) {
    super();
    Object.assign(this, props);
  }
}

@Entity('states')
export class State extends Content {
  @Column()
  state: string;

  constructor(props: Omit<State, "id">) {
    super();
    Object.assign(this, props);
  }
}

@Entity('addresses')
export class Address {
  @OneToOne(() => User, user => user.id)
  @JoinColumn({ name: 'user_id' })
  @PrimaryColumn()
  user_id: string;

  @Column()
  address: string;

  @Column()
  number: number;

  @Column()
  complement: string;
  
  @OneToOne(() => CEP, cep => cep.id)
  @JoinColumn({ name: 'cep_id' })
  cep_id: string;

  @OneToOne(() => City, city => city.id)
  @JoinColumn({ name: 'city_id' })
  city_id: string;

  @OneToOne(() => State, state => state.id)
  @JoinColumn({ name: 'state_id' })
  state_id: string;

  constructor(props: Address) {
    Object.assign(this, props);
  }
}
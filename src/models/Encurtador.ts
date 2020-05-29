import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('encurtador')
class Encurtador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  url_short: string;

  @Column('timestamp with time zone')
  date_expire: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Encurtador;

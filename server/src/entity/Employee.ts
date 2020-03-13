import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Company } from './Company'

@Entity()
export class Employee {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  designation: string;

  @ManyToOne(type => Company, company => company.employees)
  company: Company

}

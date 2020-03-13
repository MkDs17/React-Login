import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Employee } from './Employee'

@Entity()
export class Company {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  logo: string

  @OneToMany(type => Employee, employee => employee.company)
  employees: Employee[]

}

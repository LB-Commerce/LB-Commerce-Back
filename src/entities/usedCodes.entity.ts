import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, } from "typeorm"
import { Users } from "./user.entity";

@Entity("used_codes")
export class UsedCodes {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "text", nullable: false})
    codes: string[]

    @ManyToOne(() => Users, (users) => users.used_codes, { onDelete: "CASCADE" })
    user: Users;
  
}
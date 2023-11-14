import { Entity, Column, PrimaryGeneratedColumn, } from "typeorm"

@Entity()
export class PromoCode {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "text", nullable: false})
    code: string

    @Column({type: "boolean", nullable: false})
    is_valid: boolean;

}
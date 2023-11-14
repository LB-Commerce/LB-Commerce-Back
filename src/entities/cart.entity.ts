import { Entity, Column, PrimaryGeneratedColumn, } from "typeorm"

@Entity("cart")
export class Cart {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "int", nullable: false})
    products_id: number[]

    @Column()
    price: string

}
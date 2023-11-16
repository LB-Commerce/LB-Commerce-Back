import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Comments } from "./comment.entity"


@Entity()
export class Products {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "text", nullable: false})
    name: string

    @Column({type: "int", unique: true, nullable: false})
    stock: number

    @Column({type: "text", unique: true, nullable: false})
    price: string

    @Column({type: "text", nullable: false})
    description: string

    @Column({type: "text", nullable: false})
    section: string

    @Column({type: "int", default: 0})
    promo: number

    @OneToMany(() => Comments, (comment) => comment.products)
    comments: Comments[];
  
}


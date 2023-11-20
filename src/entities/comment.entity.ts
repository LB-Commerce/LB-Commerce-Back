import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Products } from "./product.entity";
import { Users } from "./user.entity";

@Entity()
export class Comments {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int", nullable: false })
  rating: number;

  @Column({ type: "text", nullable: false })
  comment: string;

  @ManyToOne(() => Products, (products) => products.comments, {
    onDelete: "CASCADE",
  })
  products: Products;

  @ManyToOne(() => Users, (users) => users.comments, { onDelete: "CASCADE" })
  user: Users;
}

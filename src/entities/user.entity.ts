import { getRounds, hashSync } from "bcryptjs";
import {
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Address } from "./address.entitiy";
import { UsedCodes } from "./usedCodes.entity";
import { Cart } from "./cart.entity";
import { Comments } from "./comment.entity";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", nullable: false })
  name: string;

  @Column({ type: "text", unique: true, nullable: false })
  email: string;

  @Column({ type: "bigint", unique: true, nullable: false })
  phone: string;

  @Column({ type: "varchar", nullable: false })
  cpf: string;

  @Column({ type: "text", nullable: false })
  password: string;

  @Column({ type: "boolean", default: false })
  is_admin: boolean;

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;

  @OneToOne(() => Cart)
  @JoinColumn()
  cart: Cart;

  @OneToMany(() => UsedCodes, (usedCodes) => usedCodes.user, {
    cascade: true,
    onDelete: "CASCADE",
  })
  used_codes: UsedCodes[];

  @OneToMany(() => Comments, (comment) => comment.user)
  comments: Comments[];

  @BeforeInsert()
  @BeforeUpdate()
  cryptoPasswordUpdate() {
    const isEncripted = getRounds(this.password);
    if (!isEncripted) {
      this.password = hashSync(this.password, 10);
    }
  }
}

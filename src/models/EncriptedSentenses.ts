import { Column, Entity, Index } from "typeorm";
import { v4 as uuid } from "uuid";

@Index("encriptedsentenses_pkey", ["id"], { unique: true })
@Entity("encriptedsentenses", { schema: "public" })
export class Encriptedsentenses {
  @Column("uuid", {
    primary: true,
    name: "id",
    default: () => "uuid_generate_v4()",
    generated: true,
  })
  id: string;

  @Column("character varying", { name: "name", length: 250 })
  name: string;

  @Column("character varying", { name: "encripted_name", length: 250 })
  encriptedName: string;

  @Column("timestamp with time zone", {
    name: "created_at",
    nullable: true,
    default: () => "now()",
  })
  createdAt: Date | null;

  @Column("timestamp with time zone", {
    name: "updated_at",
    nullable: true,
    default: () => "now()",
  })
  updatedAt: Date | null;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

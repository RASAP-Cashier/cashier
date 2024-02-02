import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Permissions } from "./Permissions";
import { Role } from "./Role";

@Index("role_permissions_pkey", ["rolePermissionId"], { unique: true })
@Entity("role_permissions", { schema: "public" })
export class RolePermissions {
  @PrimaryGeneratedColumn({ type: "integer", name: "role_permission_id" })
  rolePermissionId: number;

  @Column("timestamp without time zone", { name: "created_at", nullable: true })
  createdAt: Date | null;

  @Column("timestamp without time zone", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("character varying", {
    name: "created_by",
    nullable: true,
    length: 255,
  })
  createdBy: string | null;

  @Column("character varying", {
    name: "updated_by",
    nullable: true,
    length: 255,
  })
  updatedBy: string | null;

  @ManyToOne(() => Permissions, (permissions) => permissions.rolePermissions)
  @JoinColumn([{ name: "permission_id", referencedColumnName: "permissionId" }])
  permission: Permissions;

  @ManyToOne(() => Role, (role) => role.rolePermissions)
  @JoinColumn([{ name: "role_id", referencedColumnName: "roleId" }])
  role: Role;
}

import { Usuario } from "@app/modules/usuario/models/usuario.entity"
import { Column, Entity, Generated, ManyToOne, PrimaryColumn } from "typeorm"

@Entity()
export class Tarefa {
    @PrimaryColumn()
    @Generated("uuid")
    id: string;

    @Column({nullable: false})
    titulo: string;

    @Column({nullable: false})
    conclusao: boolean;

    @ManyToOne(type => Usuario)
    usuario: Usuario;
}
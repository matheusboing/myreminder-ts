import { Column, CreateDateColumn, DeleteDateColumn, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryColumn()
    @Generated("uuid")
    id: string;

    @Column({nullable: false})
    nome: string;

    @Column({unique: true})  
    email: string;

    @Column({nullable: false, select: false})
    senha: string;

    @CreateDateColumn()
    criadoEm: Date;

    @UpdateDateColumn()
    atualizadoEm: Date;

    @DeleteDateColumn()
    excluidoEm: Date;
}
import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId} from "typeorm";
import {Niveau} from "../niveau/niveau.entity";
import {Field, ObjectType} from "@nestjs/graphql";
import {Section} from "../section/section.entity";

@ObjectType()
@Entity("classe")
export class Classe {

    @Field()
    @PrimaryGeneratedColumn("increment")
    id: number;

    /**Plusieurs classes incluses dans un niveau*/
    @ManyToOne(type => Niveau )
    @JoinColumn({name: 'id_niveau'})
    @Field(()=>Niveau)
    niveau: Niveau
    @RelationId((classe: Classe) => classe.niveau)
    idNiveau: number;

    @Field()
    @Column({length: 25, unique: true })
    designation: string;

    /**Resolver field pour récupérer les sections d'une classe*/
    @Field(() =>[Section])
    sections: Section[]

}

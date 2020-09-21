import {Field, InputType, OmitType, PartialType} from "@nestjs/graphql";
import { AnneeScolaire } from "../annee-scolaire.entity";

@InputType()
export class CreateAnneeScolaireInput extends PartialType(
    OmitType(AnneeScolaire, ['id'] as const),
     InputType
) {
    @Field()
    debut: Date;

    @Field()
    fin: Date

}

@InputType()
export class UpdateAnneeScolaireInput extends PartialType(AnneeScolaire, InputType) {
    @Field()
    id: number;

    @Field()
    debut: Date;

    @Field()
    fin: Date

}


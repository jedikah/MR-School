import {Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateClassificationInput {

    @Field()
    idEleve: number

    @Field()
    idNiveau: number

    @Field()
    idSection: number

    @Field()
    idAnneeScolaire: number

    @Field()
    numAppel: number
}


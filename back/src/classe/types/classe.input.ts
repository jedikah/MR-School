import {Field, InputType, OmitType, PartialType} from "@nestjs/graphql";
import {Classe} from "../classe.entity";

@InputType()
export class CreateClasseInput extends PartialType(
    OmitType(Classe, ['id', 'sections', 'niveau'] as const),
    InputType
    ){

    @Field()
    idNiveau: number;
}

@InputType()
export class UpdateClasseInput extends  PartialType(
    OmitType(Classe, ['sections', 'niveau'] as const),
    InputType){
}

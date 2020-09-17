
import {InputType, OmitType, PartialType} from "@nestjs/graphql";
import {Niveau} from "../niveau.entity";
//import {CreateSectionInput} from "../../section/types/section.input";

@InputType()
export  class CreateNiveauInput extends PartialType(OmitType(Niveau, ['id', 'classes'] as const), InputType){

    /*@Field(() => CreateSectionInput)
    section: CreateSectionInput*/
}
@InputType()
export class UpdateNiveauInput extends PartialType(OmitType(Niveau, ['classes'] as const), InputType){
    /*@Field(() => UpdateNiveauInput)
    section: UpdateNiveauInput*/
}

import {InputType, OmitType, PartialType} from "@nestjs/graphql";
import {Section} from "../section.entity";

@InputType()
export  class CreateSectionInput extends PartialType(OmitType(Section, ['id'] as const), InputType){

}
@InputType()
export class UpdateSectionInput extends PartialType(Section, InputType){

}

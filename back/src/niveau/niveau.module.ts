import {Global, Module} from '@nestjs/common';
import { NiveauService } from './niveau.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Niveau} from "./niveau.entity";
import {NiveauResolvers} from "./resolvers";
import { NiveauResolverFieldsResolver } from './resolver-fields/niveau-resolver-fields.resolver';

@Global()
@Module({
  imports: [
      TypeOrmModule.forFeature([Niveau]),
  ],
  providers: [
      NiveauService,
      ...NiveauResolvers,
      NiveauResolverFieldsResolver],
  exports: [ NiveauService ]
})
export class NiveauModule {}

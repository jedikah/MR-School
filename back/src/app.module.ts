import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import configs, { GraphqlConfigs } from './configs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { AppResolver } from './app.resolver';
import { UtilsModule } from './utils/utils.module';
import { ResponsableModule } from './responsable/responsable.module';
import { FonctionModule } from './fonction/fonction.module';
import { AvoirModule } from './avoir/avoir.module';
import { EleveModule } from './eleve/eleve.module';
import { AuthModule } from './auth/auth.module';
import { ParentModule } from './parent/parent.module';
import { NiveauModule } from './niveau/niveau.module';
import { SectionModule } from './section/section.module';
import { ClasseSectionModule } from './classe-section/classe-section.module';
import { AnneeScolaireModule } from './annee-scolaire/annee-scolaire.module';
import { ClassificationModule } from './classification/classification.module';
import { ClasseModule } from './classe/classe.module';
import { MatiereModule } from './matiere/matiere.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configs],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return configService.get<ConnectionOptions>('database');
      },
    }),
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const graphqlConfigs = configService.get<GraphqlConfigs>('graphql');
        return {
          ...graphqlConfigs,
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
          sortSchema: true,
          context: ({req}) => ({req})
        };
      },
    }),
    UtilisateurModule,
    UtilsModule,
    ResponsableModule,
    FonctionModule,
    AvoirModule,
    EleveModule,
    /**Login*/
    AuthModule,
    ParentModule,
    NiveauModule,
    SectionModule,
    ClasseSectionModule,
    AnneeScolaireModule,
    ClassificationModule,
    ClasseModule,
    MatiereModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}

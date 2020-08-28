import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateur } from './utilisatateur.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Utilisateur])],
})
export class UtilisatateurModule {}

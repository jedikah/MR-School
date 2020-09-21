import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthResolver } from './resolvers';

@Module({
  imports: [
    PassportModule,
    JwtModule.register(jwtConstants)
  ],
  providers: [
    AuthService,
    ...AuthResolver,
    JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}

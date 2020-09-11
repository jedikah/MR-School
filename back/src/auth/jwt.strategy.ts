import {ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable,  UnauthorizedException } from '@nestjs/common';
import { LoginInput } from './input/login.input';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';

@Injectable()
export class  JwtStrategy extends PassportStrategy(Strategy) {

  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(utilisateurLogin: LoginInput) {
    const utilisateur = await this.authService.validateUser(utilisateurLogin);
    if (!utilisateur) {
      throw new UnauthorizedException();
    }
    return utilisateur;
  }
}

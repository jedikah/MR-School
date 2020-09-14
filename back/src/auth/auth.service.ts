import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginInput } from './input/login.input';
import { Utilisateur } from '../utilisateur/utilisateur.entity';
import { UtilisateurService } from '../utilisateur/utilisateur.service';
import { CryptService } from '../utils/crypt.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private utilisateurService: UtilisateurService,
    private cryptService: CryptService
  )
  {}
  async validateUser(utilisatateurLogin: LoginInput): Promise<Utilisateur> {

    const utilisateur = await this.utilisateurService.utilisateurByContact(utilisatateurLogin.contact);
    if(!utilisateur)
      throw new  UnauthorizedException('Utilisateur introuvable');

    const isPasswordMatching = await this.cryptService.compare(utilisatateurLogin.motDePasse, utilisateur.motDePasse);
    if(!isPasswordMatching)
      throw new  UnauthorizedException('Mot de passe incorrect');

    return utilisateur
  }
  async login(utilisatateurLogin: LoginInput): Promise<string> {
    const utilisateur = await this.validateUser(utilisatateurLogin);
    const payload = {id: utilisateur.id, contact: utilisateur.contact}
    return await this.jwtService.signAsync({payload});
  }
}

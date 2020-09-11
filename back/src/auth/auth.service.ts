import { Injectable } from '@nestjs/common';
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
    const isPasswordMatching = this.cryptService.compare(utilisatateurLogin.motDePasse, utilisateur.motDePasse);
    if(utilisateur && isPasswordMatching) return utilisateur
    return null
  }
  async login(utilisatateurLogin: LoginInput): Promise<string> {
    const utilisateur = await this.validateUser(utilisatateurLogin);
    if(!utilisateur) throw Error('Erreur d\'authentification');
    const payload = {contact: utilisateur.contact, motDePasse: utilisateur.motDePasse}
    return await this.jwtService.signAsync(payload);
  }
}

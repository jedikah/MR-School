import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginInput } from './types/login.input';
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
    if(!utilisateur) throw Error('Erreur d\'authentification');
    const isPasswordMatching = this.cryptService.compare(utilisatateurLogin.motDePasse, utilisateur.motDePasse);
    if(isPasswordMatching) return utilisateur
    return null
  }
  async login(utilisatateurLogin: LoginInput): Promise<string> {
    const utilisateur = await this.validateUser(utilisatateurLogin);
    const payload = {id: utilisateur.id , contact: utilisateur.contact, motDePasse: utilisateur.motDePasse}
    return await this.jwtService.signAsync(payload);
  }
}

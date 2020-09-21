import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CryptService {
  saltRounds = 11;

  compare(fromInput: string, fromDB: string): Promise<boolean> {
    return bcrypt.compare(fromInput, fromDB);
  }

  hash(motDePasse: string): Promise<string> {
    return bcrypt.hash(motDePasse, this.saltRounds);
  }
}

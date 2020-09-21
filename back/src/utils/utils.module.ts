import { Module, Global } from '@nestjs/common';

import { CryptService } from './crypt.service';
import { GeneratePassword } from './generate_password';

@Global()
@Module({
  providers: [CryptService, GeneratePassword],
  exports: [CryptService, GeneratePassword],
})
export class UtilsModule {}

import { Module, Global } from '@nestjs/common';

import { CryptService } from './crypt.service';

@Global()
@Module({
  providers: [CryptService],
  exports: [CryptService],
})
export class UtilsModule {}

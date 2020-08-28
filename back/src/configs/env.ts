import { ConnectionOptions } from 'typeorm';
import { Utilisateur } from 'src/utilisatateur/utilisatateur.entity';
interface ReturnType {
  PORT: number;
  DATABASE: ConnectionOptions;
}

export default function(): ReturnType {
  return {
    PORT: parseInt(process.env.PORT) || 5000,
    DATABASE: {
      type: process.env.TYPEORM_CONNECTION as 'mysql',
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [Utilisateur],
      synchronize: Boolean(process.env.TYPEORM_SYNCHRONIZE),
    },
  };
}

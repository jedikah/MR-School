import { ConnectionOptions } from 'typeorm';

export interface GraphqlConfigs {
  playground: boolean;
  debug: boolean;
}
export interface ServerConfigs {
  port: number;
}
export interface Configs {
  server: ServerConfigs;
  graphql: GraphqlConfigs;
  database: ConnectionOptions;
}

export default (): Configs => {
  return {
    server: {
      port: parseInt(process.env.PORT),
    },
    graphql: {
      playground: process.env.PLAYGROUND === 'true',
      debug: process.env.DEBUG === 'true',
    },
    database: {
      type: 'mysql',
      name: 'default',
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations_typeorm',
      migrationsRun: true,
    },
  };
};

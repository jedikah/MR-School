import { ConnectionOptions } from 'typeorm';

const configsDev: ConnectionOptions = {
  type: 'mysql',
  name: 'default',
  host: 'localhost',
  port: 3308,
  username: 'root',
  password: '',
  database: 'mr_school',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: ['dist/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations_typeorm',
  migrationsRun: true,
};

export = configsDev;

import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost', // docker-compose.yml で指定したコンテナの service 名
  port: 3306,
  username: 'user',
  password: 'password',
  database: 'sample',
  logging: true, // コンソール画面に実行したSQLを表示
  synchronize: false, // true だと migration が自動実行
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*.ts'], // マイグレーションファイルのパス
});

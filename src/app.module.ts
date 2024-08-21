import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',          // 使用するデータベースのタイプ
      host: 'localhost',      // データベースのホスト
      port: 3306,             // データベースのポート
      username: 'user',       // データベースのユーザー名
      password: 'password',   // データベースのパスワード
      database: 'sample',    // 接続するデータベース名
      entities: [__dirname + '/**/*.model{.ts,.js}'], // エンティティのパス
      synchronize: true,      // アプリケーションを再起動するたびにエンティティを同期
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    TaskModule
  ],
})
export class AppModule {}

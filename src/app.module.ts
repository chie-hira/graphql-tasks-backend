import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'sample',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // エンティティのパス
      synchronize: false,
      /**
       * アプリケーションを再起動するたびにエンティティを同期
       * エンティティ名を修正したとき、古いエンティティ名のテーブルがそのまま残るため
       * falseにしてmigrateを使う
       */
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TaskModule,
    UserModule,
    AuthModule,
  ],
  /**
   * NestJSのデフォルトで集中型構成(app.module.tsでほとんどのプロバイダーを管理)を採用しているため
   * providersが自動追加される
   * サービスとリゾルバ作成時に自動追加されるproviderは削除する
   * providersは各モジュールで定義する
   */
})
export class AppModule {}

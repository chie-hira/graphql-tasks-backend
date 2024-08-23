import { Field, ObjectType } from '@nestjs/graphql';
import { UserModel } from 'src/user/models/user.model';

@ObjectType()
export class SignInResponse {
  @Field()
  accessToken: string;

  // graphqlがUserModelを解決できるようにするために、UserModelをインポートする
  @Field(() => UserModel)
  user: UserModel;
}

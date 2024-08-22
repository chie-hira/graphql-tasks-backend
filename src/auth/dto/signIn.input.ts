import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, Min, MinLength } from "class-validator";

@InputType()
export class SignInInput {
    @Field()
    @IsEmail()
    email: string;

    @Field()
    @MinLength(8)
    password: string;
}

import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateItemInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Int)
  price: number;
}

@InputType()
export class UpdateItemInput extends PartialType(CreateItemInput) {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Int, { nullable: true })
  price?: number;
}

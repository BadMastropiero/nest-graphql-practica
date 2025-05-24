import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Item {
  @Field(() => Int)
  id: number;
  
  @Field()
  name: string;
  
  @Field({ nullable: true })
  description?: string;
  
  @Field(() => Int)
  price: number;
}

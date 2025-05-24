import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { Item } from '../shared/entities/item.entity';
import { CreateItemInput, UpdateItemInput } from './dto/items.input';

@Resolver(() => Item)
export class ItemsResolver {
  constructor(private itemsService: ItemsService) {}

  @Query(() => [Item], { name: 'items' })
  async getItems(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Query(() => Item, { name: 'item', nullable: true })
  async getItem(@Args('id', { type: () => Int }) id: number): Promise<Item | undefined> {
    return this.itemsService.findOne(id);
  }

  @Mutation(() => Item)
  createItem(@Args('createItemInput') createItemInput: CreateItemInput): Item {
    return this.itemsService.create(createItemInput);
  }

  @Mutation(() => Item, { nullable: true })
  updateItem(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateItemInput') updateItemInput: UpdateItemInput,
  ): Item | undefined {
    return this.itemsService.update(id, updateItemInput);
  }

  @Mutation(() => Boolean)
  removeItem(@Args('id', { type: () => Int }) id: number): boolean {
    return this.itemsService.remove(id);
  }
}

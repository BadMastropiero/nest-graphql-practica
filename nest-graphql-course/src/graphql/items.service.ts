import { Injectable } from '@nestjs/common';
import { Item } from '../shared/entities/item.entity';
import { CreateItemInput, UpdateItemInput } from './dto/items.input';

@Injectable()
export class ItemsService {
  // Simulación de base de datos con array en memoria (misma que en REST para ilustrar)
  private items: Item[] = [
    { id: 1, name: 'Item 1', description: 'Descripción del Item 1', price: 100 },
    { id: 2, name: 'Item 2', description: 'Descripción del Item 2', price: 200 },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: number): Item | undefined {
    return this.items.find(item => item.id === id);
  }

  create(createItemInput: CreateItemInput): Item {
    const newItem: Item = {
      id: this.items.length + 1,
      ...createItemInput,
    };
    this.items.push(newItem);
    return newItem;
  }

  update(id: number, updateItemInput: UpdateItemInput): Item | undefined {
    const itemIndex = this.items.findIndex(item => item.id === id);
    if (itemIndex >= 0) {
      this.items[itemIndex] = {
        ...this.items[itemIndex],
        ...updateItemInput,
      };
      return this.items[itemIndex];
    }
    return undefined;
  }

  remove(id: number): boolean {
    const initialLength = this.items.length;
    this.items = this.items.filter(item => item.id !== id);
    return initialLength !== this.items.length;
  }
}

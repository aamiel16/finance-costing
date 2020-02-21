import { DT_ITEM } from '../../constants';
import { BaseService } from "../common";
import { Item, ItemSchema } from "./Item.model";

export class ItemService extends BaseService<Item> {
  constructor() {
    super({ name: DT_ITEM, schema: ItemSchema });
  }
}

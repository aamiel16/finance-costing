import { BaseService } from "../common";
import { Item } from "./Item.model";

export class ItemService extends BaseService<Item> {
  constructor() {
    super({ name: "item" });
  }
}

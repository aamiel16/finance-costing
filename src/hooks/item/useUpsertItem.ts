import { makeUseUpsertRecord } from "../common/makeUseUpsertRecord";
import { DT_ITEM, ROUTE_ITEM } from "../../constants";
import { ItemDocument } from "../../services/item";

export const useUpsertItem = makeUseUpsertRecord<ItemDocument>({
  doctype: DT_ITEM,
  route: ROUTE_ITEM
});

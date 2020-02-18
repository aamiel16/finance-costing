import { makeUseFetchRecordList } from "../common/makeUseFetchRecordList";
import { DT_SHIPPING_METHOD } from "../../constants";

export const useFetchShippingMethodList = makeUseFetchRecordList(
  DT_SHIPPING_METHOD
);

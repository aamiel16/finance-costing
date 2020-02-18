import { makeUseFetchRecordList } from "../common/makeUseFetchRecordList";
import { DT_SHIPMENT_TERM } from "../../constants";

export const useFetchShipmentTermList = makeUseFetchRecordList(
  DT_SHIPMENT_TERM
);

import { BaseService } from "../common";
import { ShipmentTerm } from "./ShipmentTerm.model";
import { DT_SHIPMENT_TERM } from '../../constants';

export class ShipmentTermService extends BaseService<ShipmentTerm> {
  constructor() {
    super({ name: DT_SHIPMENT_TERM });
  }
}

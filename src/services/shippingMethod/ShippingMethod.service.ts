import { BaseService } from "../common";
import { ShippingMethod } from "./ShippingMethod.model";
import { DT_SHIPPING_METHOD } from '../../constants';

export class ShippingMethodService extends BaseService<ShippingMethod> {
  constructor() {
    super({ name: DT_SHIPPING_METHOD });
  }
}

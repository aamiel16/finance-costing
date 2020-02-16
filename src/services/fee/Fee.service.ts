import { DT_FEE } from '../../constants';
import { BaseService } from "../common/BaseService";
import { Fee } from "./Fee.model";

export class FeeService extends BaseService<Fee> {
  constructor() {
    super({ name: DT_FEE });
  }
}

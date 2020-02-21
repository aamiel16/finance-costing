import * as yup from "yup";
import { ToPouchDocument, ExtractYupSchema } from "../../types";

export const ItemSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  unitcost: yup.string(),
  supplier: yup.string()
});

export interface Item extends ExtractYupSchema<typeof ItemSchema> {
  name: string;
  description?: string;
  unitcost?: string;
  supplier?: string;
}

export type ItemDocument = ToPouchDocument<Item>;

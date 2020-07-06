import React from "react";
import { Formik, FormikProps } from "formik";
import { Page } from "../../components/page/Page";
import { TextField, ErrorMessage } from "../../components/forms";
import { SaveBackFab } from "../../components/buttons/Fab";
import { Item, ItemSchema } from "../../services/item";
import { useUpsertItem } from "../../hooks/item";

export interface ItemAddPageProps {}

export function ItemAddPage(props: ItemAddPageProps) {
  const { upsert, error } = useUpsertItem();

  // Render
  return (
    <Page title="Add item">
      <ErrorMessage message={error} />
      <Formik<Item>
        initialValues={{
          name: "",
          description: "",
          supplier: "",
          unitcost: "",
        }}
        validationSchema={ItemSchema}
        onSubmit={upsert}
      >
        {({ dirty, isSubmitting, submitForm }: FormikProps<Item>) => (
          <>
            <SaveBackFab dirty={dirty} disabled={isSubmitting} onSave={submitForm} />
            <TextField label="Name" name="name" />
            <TextField label="Description" name="description" />
            <TextField label="Supplier" name="supplier" />
            <TextField label="Unit cost" name="unitcost" />
          </>
        )}
      </Formik>
    </Page>
  );
}

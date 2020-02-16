import React from "react";
import { Formik, FormikProps, FormikBag } from "formik";
import { Page } from "../../components/page/Page";
import { TextField } from "../../components/forms/TextField";
import { SaveFab, BackFab } from "../../components/buttons/Fab";
import { Item } from "../../services/item";

export interface ItemAddPageProps {}

export function ItemAddPage(props: ItemAddPageProps) {
  async function handleSubmit(
    values: Item,
    actions: FormikBag<ItemAddPageProps, Item>
  ) {
    try {
      console.log("Saving item: ", values);
      actions.setSubmitting(false);
    } catch (e) {}
  }

  // Render
  return (
    <Page title="Add item">
      <Formik
        initialValues={{
          name: "",
          description: "",
          supplier: "",
          unitcost: ""
        }}
        onSubmit={handleSubmit}
      >
        {(props: FormikProps<Item>) => (
          <>
            {props.dirty ? (
              <SaveFab
                disabled={props.isSubmitting}
                onSave={props.submitForm}
              />
            ) : (
              <BackFab />
            )}
            <TextField label="Name" name="name" />
            <TextField label="Description" name="description" />
            <TextField label="Description" name="description" />
            <TextField label="Supplier" name="supplier" />
            <TextField label="Unit cost" name="unitcost" />
          </>
        )}
      </Formik>
    </Page>
  );
}

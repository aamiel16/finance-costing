import React from "react";
import { Formik, FormikProps, FormikBag } from "formik";
import { Page } from "../../components/page/Page";
import { TextField } from "../../components/forms/TextField";
import { SaveFab, BackFab } from "../../components/buttons/Fab";
import { ShipmentTerm } from "../../services/shipmentTerm";

export interface ShipmentTermAddPageProps {}

export function ShipmentTermAddPage(props: ShipmentTermAddPageProps) {
  async function handleSubmit(
    values: ShipmentTerm,
    actions: FormikBag<ShipmentTermAddPageProps, ShipmentTerm>
  ) {
    try {
      console.log("Saving shipment term: ", values);
      actions.setSubmitting(false);
    } catch (e) {}
  }

  // Render
  return (
    <Page title="Add shipment term">
      <Formik
        initialValues={{
          name: "",
          description: ""
        }}
        onSubmit={handleSubmit}
      >
        {(props: FormikProps<ShipmentTerm>) => (
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
          </>
        )}
      </Formik>
    </Page>
  );
}

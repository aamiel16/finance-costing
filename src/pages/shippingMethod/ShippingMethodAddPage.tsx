import React from "react";
import { Formik, FormikProps, FormikBag } from "formik";
import { Page } from "../../components/page/Page";
import { TextField } from "../../components/forms/TextField";
import { SaveFab, BackFab } from "../../components/buttons/Fab";
import { ShippingMethod } from "../../services/shippingMethod";

export interface ShippingMethodAddPageProps {}

export function ShippingMethodAddPage(props: ShippingMethodAddPageProps) {
  async function handleSubmit(
    values: ShippingMethod,
    actions: FormikBag<ShippingMethodAddPageProps, ShippingMethod>
  ) {
    try {
      console.log("Saving shipping method: ", values);
      actions.setSubmitting(false);
    } catch (e) {}
  }

  // Render
  return (
    <Page title="Add shipping method">
      <Formik
        initialValues={{
          name: "",
          description: ""
        }}
        onSubmit={handleSubmit}
      >
        {(props: FormikProps<ShippingMethod>) => (
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

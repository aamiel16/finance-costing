import React from "react";
import { Formik, FormikProps, FormikBag } from "formik";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Page } from "../../components/page/Page";
import { TextField } from "../../components/forms/TextField";
import { SaveFab, BackFab } from "../../components/buttons/Fab";
import { Fee } from '../../services/fee';

export interface FeeAddPageProps {}

export function FeeAddPage(props: FeeAddPageProps) {
  // Hooks
  const classes = useStyles();

  async function handleSubmit(values: Fee, actions: FormikBag<FeeAddPageProps, Fee>) {
    try {
      console.log('Saving fee: ', values);
      actions.setSubmitting(false);
    } catch (e) {

    }
  }

  // Render
  return (
    <Page title="Add fee">
      <Formik
        initialValues={{
          name: "",
          description: "",
        }}
        onSubmit={handleSubmit}
      >
        {(props: FormikProps<Fee>) => (
          <>
            {props.dirty ? <SaveFab disabled={props.isSubmitting} onSave={props.submitForm} /> : <BackFab />}
            <TextField label="Name" name="name" className={classes.field} />
            <TextField
              label="Description"
              name="description"
              className={classes.field}
            />
          </>
        )}
      </Formik>
    </Page>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    field: {
      marginTop: theme.spacing(),
      marginBottom: theme.spacing()
    }
  })
);

import React from "react";
import { Formik, FieldProps, FormikProps } from "formik";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Page from "../../components/page/Page";
import SaveFab from "../../components/buttons/SaveFab";
import TextField from "../../components/forms/TextField";
import BackFab from "../../components/buttons/BackFab";

interface Props extends FieldProps {}

function ItemAddPage(props: Props) {
  // Hooks
  const classes = useStyles();

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
        onSubmit={(values: any) => { console.log('Saving: ', values) }}
      >
        {(props: FormikProps<{}>) => (
          <>
            {props.dirty ? <SaveFab disabled={props.isSubmitting} onSave={props.submitForm} /> : <BackFab />}
            <TextField label="Name" name="name" className={classes.field} />
            <TextField
              label="Description"
              name="description"
              className={classes.field}
            />
            <TextField
              label="Supplier"
              name="supplier"
              className={classes.field}
            />
            <TextField
              label="Unit cost"
              name="unitcost"
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

export default ItemAddPage;

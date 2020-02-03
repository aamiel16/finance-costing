import React from "react";
import { Formik } from "formik";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Page from "../../components/page/Page";
import SaveFab from '../../components/buttons/SaveFab';

interface Props {}

function ItemAddPage(props) {
  const classes = useStyles();

  return (
    <Page title="Add item">
      <SaveFab onSave={() => {}} />
      <Formik initialValues={{}} onSubmit={() => {}}>
        <>
          <Box marginY={1} width="30%">
            <TextField
              error
              fullWidth
              label="Name"
              variant="outlined"
              helperText="Required"
            />
          </Box>
          <TextField
            className={classes.field}
            label="Description"
            variant="outlined"
          />
          <TextField
            className={classes.field}
            label="Supplier"
            variant="outlined"
          />
          <TextField
            className={classes.field}
            label="Unit cost"
            variant="outlined"
          />
        </>
      </Formik>
    </Page>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    field: {
      marginTop: theme.spacing(),
      marginBottom: theme.spacing(),
    }
  })
);

export default ItemAddPage;

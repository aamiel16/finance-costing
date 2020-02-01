import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { Formik } from "formik";
import { Theme, createStyles, makeStyles } from "@material-ui/core";

interface Props {}

function ItemAddPage(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" noWrap>
        New item
      </Typography>
      <Divider className={classes.divider} />
      <Formik initialValues={{}} onSubmit={() => {}}>
        <>
          <TextField className={classes.field} label="Name" variant="outlined" />
          <TextField className={classes.field} label="Description" variant="outlined" />
          <TextField className={classes.field} label="Supplier" variant="outlined" />
          <TextField className={classes.field} label="Unit cost" variant="outlined" />
        </>
      </Formik>
    </Paper>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(3),
      marginBottom: theme.spacing(3)
    },
    divider: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    field: {
      marginBottom: theme.spacing(),
    }
  })
);

export default ItemAddPage;

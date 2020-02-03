import React from "react";
import clsx from 'clsx';
import Box, { BoxProps } from "@material-ui/core/Box";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

interface Props extends BoxProps {}

function PageContainer(props: Props) {
  const { className, children, ...restProps } = props;
  const classes = useStyles();
  return (
    <Box
      paddingY={2}
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      boxShadow={1}
      bgcolor="background.paper"
      className={clsx(classes.container, className)}
      {...restProps}
    >
      {children}
    </Box>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
      },
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
      }
    }
  })
);

export default PageContainer;

import React from "react";
import clsx from "clsx";
import Typography, { TypographyProps } from "@material-ui/core/Typography";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

export interface PageHeaderProps extends TypographyProps {}

export function PageHeader(props: PageHeaderProps) {
  const { className, children, ...typoProps } = props;
  const classes = useStyles();
  return (
    <>
      <Typography noWrap variant="h6" className={clsx(classes.header, className)} {...typoProps}>
        {children}
      </Typography>
    </>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      marginBottom: theme.spacing(2)
    }
  })
);

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

const Page: React.FC<Props> = (props) => {
  const { title, children } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {!children ? <p>{title}</p> : children}
    </div>
  );
}

const useStyles = makeStyles(_ => ({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

export default Page;

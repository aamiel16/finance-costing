import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export interface ErrorMessageProps {
  message?: string;
  autoHideDuration?: number;
  onClose?: () => void;
}

export function ErrorMessage(props: ErrorMessageProps) {
  const { message, autoHideDuration, onClose } = props;

  return (
    <Snackbar open={Boolean(message)} autoHideDuration={autoHideDuration || 3000} onClose={onClose}>
      <Alert elevation={6} variant="filled" severity="error">
        {message}
      </Alert>
    </Snackbar>
  );
}

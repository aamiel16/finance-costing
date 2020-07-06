import React from 'react';
import capitalize from 'lodash/capitalize';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export interface ErrorMessageProps {
  message?: string;
  autoHideDuration?: number | null;
  onClose?: () => void;
}

export function ErrorMessage(props: ErrorMessageProps) {
  const { message, autoHideDuration = 5000, onClose } = props;

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={Boolean(message)}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
    >
      <Alert elevation={6} variant="filled" severity="error">
        {capitalize(message)}
      </Alert>
    </Snackbar>
  );
}

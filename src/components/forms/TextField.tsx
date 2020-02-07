import React, { useCallback } from "react";
import clsx from "clsx";
import { Field as FormikField, FieldProps as FormikFieldProps } from "formik";
import Grid from "@material-ui/core/Grid";
import MuiTextField from "@material-ui/core/TextField";

type FieldProps = Omit<TextFieldProps, 'name'> & FormikFieldProps;

export interface TextFieldProps {
  name: string;
  label: string;
  className?: string;
}

function Field(props: FieldProps) {
  const { label, className, field, meta } = props;
  const { name, value, onBlur, onChange } = field;
  const { initialTouched, initialError, initialValue, touched, error } = meta;

  const isError = useCallback(
    () => Boolean((initialTouched && initialError) || (touched && error)),
    [initialTouched, initialError, touched, error]
  );

  return (
    <MuiTextField
      fullWidth
      variant="outlined"
      className={clsx(className)}
      name={name}
      label={label}
      value={value || initialValue || ""}
      helperText={error || initialError || ""}
      onBlur={onBlur}
      onChange={onChange}
      error={isError()}
    />
  );
}

export function TextField(props: TextFieldProps & { name: string }) {
  const { name, ...restProps } = props;
  return (
    <Grid item>
      <FormikField name={name}>
        {(formikProps: FormikFieldProps) => (
          <Field {...restProps} {...formikProps} />
        )}
      </FormikField>
    </Grid>
  );
}
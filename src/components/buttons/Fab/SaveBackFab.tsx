import React from "react";
import { BackFab } from './BackFab';
import { SaveFab, SaveFabProps } from './SaveFab';

export interface SaveBackFabProps extends SaveFabProps {
  dirty?: boolean;
}

export function SaveBackFab(props: SaveBackFabProps) {
  const { dirty = false, disabled = false, onSave, fabProps = {} } = props;

  if (!dirty) {
    return (
      <BackFab fabProps={fabProps} />
    );
  }

  return (
    <SaveFab
      onSave={onSave}
      fabProps={fabProps}
      disabled={disabled}
    />
  );
}

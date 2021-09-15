import React from 'react';

type Props = {
  children: React.ReactNode;
  value: string;
  selected?: boolean;
};

export const SelectItem = ({
  children,
  value = '',
  selected = false,
}: Props) => (
  <option value={value} selected={selected}>
    {children}
  </option>
);

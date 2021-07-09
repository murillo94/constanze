import React from 'react';
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu';

import { Text } from '../';

import { styled } from '../../theme';

interface Props {
  children: React.ReactNode;
  title: string;
}

const StyledItem = styled(DropdownMenuRadix.Item, {
  p: '$2',
  borderRadius: '$2',
  cursor: 'default',

  '&:focus': {
    backgroundColor: '$gray7',
    color: '$gray12',
    outline: 'none',
  },
});

export const MenuItem = ({ children, title }: Props) => (
  <StyledItem>
    <Text>{title}</Text>
    {children}
  </StyledItem>
);

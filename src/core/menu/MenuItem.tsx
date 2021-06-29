import React from 'react';
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu';

import { Text } from '../';

import { styled } from '../../theme';

const StyledItem = styled(DropdownMenuRadix.Item, {
  p: '$2',
  borderRadius: '$2',
  cursor: 'default',

  '&:focus': {
    backgroundColor: '$gray200',
    color: '$gray900',
    outline: 'none',
  },
});

export const MenuItem = ({ title, children }) => (
  <StyledItem>
    <Text>{title}</Text>
    {children}
  </StyledItem>
);

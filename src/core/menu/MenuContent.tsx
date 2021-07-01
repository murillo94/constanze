import React from 'react';
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu';

import { styled } from '../../theme';

const StyledContent = styled(DropdownMenuRadix.Content, {
  backgroundColor: '$gray1',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$gray6',
  borderRadius: '$2',
  p: '$2',
  minWidth: 120,
});

export const MenuContent = ({ children }) => (
  <StyledContent>{children}</StyledContent>
);

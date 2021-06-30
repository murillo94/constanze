import React from 'react';
import * as DialogRadix from '@radix-ui/react-dialog';

import { styled } from '../../theme';

const StyledContent = styled(DialogRadix.Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  maxWidth: 'fit-content',
  maxHeight: '85vh',
  p: '$5',
  marginTop: '-5vh',
  backgroundColor: 'white',
  borderRadius: '$4',

  '&:focus': {
    outline: 'none',
  },
});

export const DialogContent = ({ children }) => (
  <StyledContent>{children}</StyledContent>
);

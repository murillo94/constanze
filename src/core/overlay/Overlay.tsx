import React from 'react';

import * as DialogRadix from '@radix-ui/react-dialog';

import { styled } from '../../theme';

export const Overlay = styled(DialogRadix.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, .15)',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

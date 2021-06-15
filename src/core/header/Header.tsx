import React from 'react';

import { styled } from '../../theme';

export const Header = styled('header', {
  backgroundColor: '$gray0',
  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: '$gray400',
  position: 'sticky',
  top: '0',
  left: '0',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  p: '$3',
});

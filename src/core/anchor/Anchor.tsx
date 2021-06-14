import React from 'react';

import { styled } from '../../theme';

export const Anchor = styled('a', {
  color: '$gray900',
  textDecoration: 'none',
  outline: 0,
  '&:focus': {
    boxShadow: '$1',
  },
});

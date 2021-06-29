import React from 'react';

import { styled } from '../../theme';

export const Anchor = styled('a', {
  color: '$blue700',
  outline: 0,
  '&:focus': {
    boxShadow: '$1',
  },
});

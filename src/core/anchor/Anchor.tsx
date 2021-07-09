import React from 'react';

import { styled } from '../../theme';

export const Anchor = styled('a', {
  color: '$violet9',
  outline: 0,
  '&:focus': {
    boxShadow: '$1',
  },
});

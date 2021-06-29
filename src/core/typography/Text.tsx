import React from 'react';

import { styled } from '../../theme';
import { COLORS } from './utils/colors';

export const Text = styled('span', {
  fontSize: '$1',
  fontWeight: 'initial',
  lineHeight: '21px',
  variants: {
    appearance: COLORS,
  },
  defaultVariants: {
    appearance: 'default',
  },
});

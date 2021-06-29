import React from 'react';

import { styled } from '../../theme';
import { COLORS } from './utils/colors';

export const Paragraph = styled('p', {
  fontSize: '$1',
  fontWeight: 'initial',
  lineHeight: '21px',
  textAlign: 'left',
  m: '$1',
  display: 'block',
  variants: {
    appearance: COLORS,
  },
  defaultVariants: {
    appearance: 'default',
  },
});

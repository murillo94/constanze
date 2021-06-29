import React from 'react';
import * as LabelRadix from '@radix-ui/react-label';

import { styled } from '../../theme';
import { COLORS } from './utils/colors';

export const Label = styled(LabelRadix.Root, {
  fontSize: '$1',
  fontWeight: 'initial',
  lineHeight: '21px',
  textAlign: 'left',
  display: 'block',
  variants: {
    appearance: COLORS,
  },
  defaultVariants: {
    appearance: 'default',
  },
});

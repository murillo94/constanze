import React from 'react';

import { Text } from '../typography';

import { styled } from '../../theme';

export const Badge = styled(Text, {
  color: '$violet10',
  backgroundColor: '$gray1',
  borderRadius: '$3',
  borderWidth: '1px',
  borderStyle: 'solid',
  px: 4,
  variants: {
    appearance: {
      default: {
        color: '$violet10',
        borderColor: '$violet10',
      },
      minimal: {
        color: '$gray12',
        borderColor: '$gray6',
      },
    },
  },
  defaultVariants: {
    appearance: 'default',
  },
});

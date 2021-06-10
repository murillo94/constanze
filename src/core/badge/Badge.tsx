import React from 'react';

import { Text } from '../typography';

import { styled } from '../../theme';

export const Badge = styled(Text, {
  backgroundColor: '$gray0',
  borderRadius: '$3',
  borderWidth: '1px',
  borderStyle: 'solid',
  px: 4,
  variants: {
    variant: {
      default: {
        color: '$blue700',
        borderColor: '$blue700',
      },
      minimal: {
        color: '$gray900',
        borderColor: '$gray300',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

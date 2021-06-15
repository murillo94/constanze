import React from 'react';

import { styled } from '../../theme';

export const Footer = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  mt: '$10',
  variants: {
    position: {
      start: {
        justifyContent: 'flex-start',
      },
      end: {
        justifyContent: 'flex-end',
      },
    },
  },
  defaultVariants: {
    position: 'start',
  },
});

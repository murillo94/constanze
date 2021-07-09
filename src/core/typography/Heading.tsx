import React from 'react';

import { styled } from '../../theme';
import { COLORS } from './utils/colors';

export const H1 = styled('h1', {
  fontSize: '$8',
  fontWeight: '$2',
  lineHeight: '42px',
  m: '$1',
  variants: {
    appearance: COLORS,
  },
  defaultVariants: {
    appearance: 'default',
  },
});

export const H2 = styled('h2', {
  fontSize: '$6',
  fontWeight: '$2',
  lineHeight: '36px',
  m: '$1',
  variants: {
    appearance: COLORS,
  },
  defaultVariants: {
    appearance: 'default',
  },
});

export const H3 = styled('h3', {
  fontSize: '$4',
  fontWeight: '$2',
  lineHeight: '30px',
  m: '$1',
  variants: {
    appearance: COLORS,
  },
  defaultVariants: {
    appearance: 'default',
  },
});

export const H4 = styled('h4', {
  fontSize: '$3',
  fontWeight: '$2',
  lineHeight: '27px',
  m: '$1',
  variants: {
    appearance: COLORS,
  },
  defaultVariants: {
    appearance: 'default',
  },
});

export const H5 = styled('h5', {
  fontSize: '$2',
  fontWeight: '$2',
  lineHeight: '24px',
  m: '$1',
  variants: {
    appearance: COLORS,
  },
  defaultVariants: {
    appearance: 'default',
  },
});

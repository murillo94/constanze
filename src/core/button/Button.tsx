import React from 'react';

import { styled } from '../../theme';

export const Button = styled('button', {
  fontSize: '$1',
  fontWeight: '$2',
  borderRadius: '$4',
  borderWidth: '1px',
  borderStyle: 'solid',
  p: '$3',
  width: 'auto',
  outline: '0',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  variants: {
    appearance: {
      default: {
        color: '$gray1',
        backgroundColor: '$violet9',
        borderColor: '$violet9',
        '&:hover': {
          color: '$gray1',
          backgroundColor: '$violet10',
          borderColor: '$violet10',
        },
        '&:focus': {
          boxShadow: '$1',
          borderColor: '$violet9',
        },
      },
      minimal: {
        color: '$gray12',
        backgroundColor: '$gray6',
        borderColor: '$gray6',
        '&:hover': {
          backgroundColor: '$gray7',
          borderColor: '$gray7',
        },
        '&:focus': {
          boxShadow: '$1',
          borderColor: '$violet9',
        },
      },
    },
    outlined: {
      true: {
        backgroundColor: '$gray1',
      },
    },
  },
  compoundVariants: [
    {
      appearance: 'default',
      outlined: true,
      css: {
        color: '$gray12',
        backgroundColor: '$gray1',
        borderColor: '$violet9',
      },
    },
    {
      appearance: 'minimal',
      outlined: true,
      css: {
        backgroundColor: '$gray1',
        borderColor: '$gray6',
      },
    },
  ],
  defaultVariants: {
    appearance: 'default',
  },
});

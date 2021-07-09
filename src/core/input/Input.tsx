import React from 'react';

import { styled } from '../../theme';

export const Input = styled('input', {
  fontSize: '$1',
  backgroundClip: 'padding-box',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$violet9',
  borderRadius: '$3',
  outline: 0,
  width: '100%',
  display: 'block',
  p: '$3',
  '&[type="number"], &[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button': {
    appearance: 'none',
  },
  '&:focus': {
    boxShadow: '$1',
    borderColor: '$violet9',
    zIndex: 1,
  },
  '&::placeholder': {
    color: '$gray7',
  },
});

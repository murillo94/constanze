import React from 'react';

import { styled } from '../../theme';

export const Select = styled('select', {
  backgroundClip: 'padding-box',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$gray6',
  borderRadius: '8px',
  p: '$3',
  width: '100%',
  outline: '0',
  display: 'block',
  appearance: 'textfield',
  '&[aria-invalid="true"]': {
    borderColor: '$red9',
  },
  '&:focus': {
    boxShadow: '$1',
    borderColor: '$violet9',
  },
});

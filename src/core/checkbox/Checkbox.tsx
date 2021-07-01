import React from 'react';
import * as CheckboxRadix from '@radix-ui/react-checkbox';

import { styled } from '../../theme';

export const StyledCheckbox = styled(CheckboxRadix.Root, {
  appearance: 'none',
  backgroundColor: '$gray1',
  borderRadius: '$2',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$violet10',
  p: '$1',
  width: 18,
  height: 18,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:focus': {
    outline: 'none',
    boxShadow: '$1',
  },
});

const StyledIndicator = styled(CheckboxRadix.Indicator, {
  height: 10,
  width: 3,
  transform: 'rotate(45deg)',
  borderBottomWidth: '2px',
  borderBottomStyle: 'solid',
  borderBottomColor: '$violet10',
  borderRightWidth: '2px',
  borderRightStyle: 'solid',
  borderRightColor: '$violet10',
});

export const Checkbox = () => (
  <StyledCheckbox>
    <StyledIndicator />
  </StyledCheckbox>
);

import React from 'react';
import * as CheckboxRadix from '@radix-ui/react-checkbox';

import { styled } from '../../theme';

export const StyledCheckbox = styled(CheckboxRadix.Root, {
  appearance: 'none',
  backgroundColor: 'transparent',
  borderRadius: '$2',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$blue700',
  padding: 0,
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
  borderBottomColor: '$blue700',
  borderRightWidth: '2px',
  borderRightStyle: 'solid',
  borderRightColor: '$blue700',
});

export const Checkbox = () => (
  <StyledCheckbox>
    <StyledIndicator />
  </StyledCheckbox>
);

import React from 'react';
import * as CheckboxRadix from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

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

export const Checkbox = () => (
  <StyledCheckbox defaultChecked>
    <CheckboxRadix.CheckboxIndicator as={CheckIcon} />
  </StyledCheckbox>
);

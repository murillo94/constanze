import React from 'react';
import * as SwitchRadix from '@radix-ui/react-switch';

import { styled } from '../../theme';

const StyledSwitch = styled(SwitchRadix.Root, {
  appearance: 'none',
  backgroundColor: '$gray7',
  border: 'none',
  borderRadius: 20,
  p: '$1',
  width: 44,
  height: 22,
  position: 'relative',
  '&:focus': {
    outline: 'none',
    boxShadow: '$1',
  },
  '&[data-state="checked"]': {
    backgroundColor: '$violet9',
  },
});

const StyledThumb = styled(SwitchRadix.Thumb, {
  display: 'block',
  width: 16,
  height: 16,
  border: 'none',
  backgroundColor: '$gray1',
  borderRadius: '50%',
  transition: 'transform 100ms',
  transform: 'translateX(5px)',
  willChange: 'transform',
  '&[data-state="checked"]': {
    transform: 'translateX(23px)',
  },
});

export const Switch = () => (
  <StyledSwitch>
    <StyledThumb />
  </StyledSwitch>
);

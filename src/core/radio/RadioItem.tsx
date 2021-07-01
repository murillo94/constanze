// @ts-nocheck
import React from 'react';
import * as RadioRadix from '@radix-ui/react-radio-group';

import { styled } from '../../theme';

const StyledRadio = styled(RadioRadix.Item, {
  appearance: 'none',
  backgroundColor: '$gray1',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$violet10',
  borderRadius: '50%',
  p: '$1',
  width: 18,
  height: 18,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',

  '& ~ &': { ml: 5 },

  '&:focus': {
    outline: 'none',
    boxShadow: '$1',
  },
});

const StyledIndicator = styled(RadioRadix.Indicator, {
  width: 10,
  height: 10,
  borderRadius: '50%',
  backgroundColor: '$violet10',
});

export const RadioItem = () => (
  <StyledRadio>
    <StyledIndicator />
  </StyledRadio>
);

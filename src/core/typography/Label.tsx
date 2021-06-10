import React from 'react';
import * as LabelRadix from '@radix-ui/react-label';

import { styled } from '../../theme';

export const Label = styled(LabelRadix.Root, {
  color: '$gray900',
  fontSize: '$1',
  fontWeight: 'initial',
  lineHeight: '21px',
  textAlign: 'left',
  display: 'block',
});

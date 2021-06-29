import React from 'react';
import * as SeparatorRadix from '@radix-ui/react-separator';

import { styled } from '../../theme';

const StyledSeparator = styled(SeparatorRadix.Root, {
  backgroundColor: '$gray300',
  height: 1,
  my: '$2',
  mx: '$1',
});

export const Separator = () => <StyledSeparator />;

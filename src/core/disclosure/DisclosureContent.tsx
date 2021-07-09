import React from 'react';
import * as CollapsibleRadix from '@radix-ui/react-collapsible';

import { styled } from '../../theme';

interface Props {
  children: React.ReactNode;
}

const StyledContent = styled(CollapsibleRadix.CollapsibleContent, {
  p: '$3',
  mt: '$3',
  borderRadius: '$4',
});

export const DisclosureContent = ({ children }: Props) => (
  <StyledContent>{children}</StyledContent>
);

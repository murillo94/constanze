import React from 'react';
import * as DialogRadix from '@radix-ui/react-dialog';

import { Button } from '../';

import { styled } from '../../theme';

interface Props {
  children: React.ReactNode;
  title: string;
}

const Overlay = styled(DialogRadix.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, .15)',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

export const DialogGroup = ({ children, title }: Props) => (
  <DialogRadix.Root>
    <Overlay />
    <DialogRadix.Trigger as={Button} appearance="minimal" outlined>
      {title}
    </DialogRadix.Trigger>
    {children}
  </DialogRadix.Root>
);

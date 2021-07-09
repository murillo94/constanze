import React from 'react';
import * as DialogRadix from '@radix-ui/react-dialog';

import { Button, Overlay } from '../';

interface Props {
  children: React.ReactNode;
  title: string;
}

export const DialogGroup = ({ children, title }: Props) => (
  <DialogRadix.Root>
    <Overlay />
    <DialogRadix.Trigger as={Button} appearance="minimal" outlined>
      {title}
    </DialogRadix.Trigger>
    {children}
  </DialogRadix.Root>
);

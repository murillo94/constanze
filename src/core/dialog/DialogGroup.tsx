import React from 'react';
import * as DialogRadix from '@radix-ui/react-dialog';

import { Button, Overlay } from '../';

export const DialogGroup = ({ title, children }) => (
  <DialogRadix.Root>
    <Overlay />
    <DialogRadix.Trigger as={Button} appearance="minimal" outlined>
      {title}
    </DialogRadix.Trigger>
    {children}
  </DialogRadix.Root>
);

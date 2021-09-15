import React from 'react';
import * as DialogRadix from '@radix-ui/react-dialog';

import { Button } from '../';

interface Props {
  children: React.ReactNode;
}

export const DialogClose = ({ children }: Props) => (
  <DialogRadix.Close asChild>
    <Button appearance="minimal" outlined>
      {children}
    </Button>
  </DialogRadix.Close>
);

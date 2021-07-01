import React from 'react';
import * as DialogRadix from '@radix-ui/react-dialog';

import { Button } from '../';

export const DialogClose = ({ children }) => (
  <DialogRadix.Close as={Button} appearance="minimal" outlined>
    {children}
  </DialogRadix.Close>
);

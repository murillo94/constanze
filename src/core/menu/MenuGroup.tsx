import React from 'react';
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu';

import { Button } from '../';

export const MenuGroup = ({ title, children }) => (
  <DropdownMenuRadix.Root>
    <DropdownMenuRadix.Trigger as={Button} appearance="minimal" outlined>
      {title}
    </DropdownMenuRadix.Trigger>
    {children}
  </DropdownMenuRadix.Root>
);

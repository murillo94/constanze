import React from 'react';
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu';

import { Button } from '../';

interface Props {
  children: React.ReactNode;
  title: string;
}

export const MenuGroup = ({ children, title }: Props) => (
  <DropdownMenuRadix.Root>
    <DropdownMenuRadix.Trigger as={Button} appearance="minimal" outlined>
      {title}
    </DropdownMenuRadix.Trigger>
    {children}
  </DropdownMenuRadix.Root>
);

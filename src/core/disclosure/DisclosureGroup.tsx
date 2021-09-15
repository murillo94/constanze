import React from 'react';
import * as CollapsibleRadix from '@radix-ui/react-collapsible';

import { Button, DisclosureContent } from '../';

interface Props {
  children: React.ReactNode;
  title: string;
}

export const DisclosureGroup = ({ children, title }: Props) => (
  <CollapsibleRadix.Root>
    <CollapsibleRadix.Trigger asChild>
      <Button appearance="minimal" outlined>
        {title}
      </Button>
    </CollapsibleRadix.Trigger>
    <DisclosureContent>{children}</DisclosureContent>
  </CollapsibleRadix.Root>
);

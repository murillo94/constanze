import React from 'react';
import * as CollapsibleRadix from '@radix-ui/react-collapsible';

import { Button, DisclosureContent } from '../';

export const DisclosureGroup = ({ title, children }) => (
  <CollapsibleRadix.Root>
    <CollapsibleRadix.Trigger as={Button} appearance="minimal">
      {title}
    </CollapsibleRadix.Trigger>
    <DisclosureContent>{children}</DisclosureContent>
  </CollapsibleRadix.Root>
);

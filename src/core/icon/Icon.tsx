// @ts-nocheck
import React from 'react';
import FeatherIcon from 'feather-icons-react';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import { theme } from '../../theme';

interface Props {
  name: string;
  label: string;
  size?: number;
  color?: string;
}

export const Icon = ({
  name,
  label,
  size = 18,
  color = theme.colors.gray1,
}: Props) => (
  <AccessibleIcon.Root label={label}>
    <FeatherIcon
      role="img"
      icon={name}
      size={size}
      stroke={color}
      alt={name}
      aria-label={name}
    />
  </AccessibleIcon.Root>
);

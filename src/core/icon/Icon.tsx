import React from 'react';
import FeatherIcon from 'feather-icons-react';

import { theme } from '../../theme';

export const Icon = ({
  name = 'help-circle',
  size = 18,
  color = theme.colors.gray1,
}) => (
  <FeatherIcon
    role="img"
    icon={name}
    size={size}
    stroke={color}
    alt={name}
    aria-label={name}
  />
);

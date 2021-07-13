import React from 'react';

import { Box, Button, Icon } from '../';
import { Input } from './';

import { styled } from '../../theme';

interface Props<T> extends React.InputHTMLAttributes<T> {
  icon: string;
  iconLabel: string;
}

const InputIconStyled = styled(Input, {
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  borderRight: 'none',
  flex: 0.95,
});

export const InputIcon = ({
  type,
  icon,
  iconLabel,
}: Props<HTMLInputElement>) => (
  <Box
    css={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'stretch',
      width: '100%',
    }}
  >
    <InputIconStyled type={type} />
    <Button
      outlined
      css={{
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderLeft: 0,
        flex: 0.05,
      }}
    >
      <Icon name={icon} label={iconLabel} />
    </Button>
  </Box>
);

import React from 'react';

import { Box, Button, Icon } from '../';
import { Input } from './';

import { styled } from '../../theme';

const InputIconStyled = styled(Input, {
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  borderRight: 'none',
  flex: 0.95,
});

export const InputIcon = ({ type, name }) => (
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
      variant="minimal"
      css={{
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderLeft: 0,
        flex: 0.05,
      }}
    >
      <Icon name={name} />
    </Button>
  </Box>
);

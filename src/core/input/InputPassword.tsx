import React from 'react';

import { InputIcon } from './';

import { styled } from '../../theme';

const InputPasswordStyled = styled(InputIcon, {});

export const InputPassword = () => (
  <InputPasswordStyled type="password" icon="eye" iconLabel="Eye icon" />
);

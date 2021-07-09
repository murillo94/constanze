import React from 'react';

import { H5, Paragraph } from '../';

import { styled } from '../../theme';

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
}

const StyledAlert = styled('div', {
  backgroundColor: '$gray1',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$gray6',
  borderLeftWidth: '4px',
  borderLeftStyle: 'solid',
  borderLeftColor: '$green9',
  borderRadius: '$3',
  p: '$5',
});

export const Alert = ({ children, title, description }: Props) => (
  <StyledAlert role="alert">
    {title && <H5>{title}</H5>}
    {description && (
      <Paragraph appearance="muted" css={{ mt: '$3' }}>
        {description}
      </Paragraph>
    )}
    {children}
  </StyledAlert>
);

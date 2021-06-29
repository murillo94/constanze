import React from 'react';

import { H5, Paragraph } from '../';

import { styled } from '../../theme';

const StyledAlert = styled('div', {
  backgroundColor: '$gray0',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$gray300',
  borderLeftWidth: '4px',
  borderLeftStyle: 'solid',
  borderLeftColor: '$green700',
  borderRadius: '$3',
  p: '$4',
});

export const Alert = ({ children, title, description }) => (
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

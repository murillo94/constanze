import React from 'react';

import { Box, H4, Paragraph } from '..';

import { styled } from '../../theme';

const StyledContainer = styled('section', {
  backgroundColor: '$gray1',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$gray6',
  borderRadius: '$3',
  width: 'auto',
  p: '$5',
});

export const Container = ({ children, title, subTitle, optionsTitle }) => (
  <StyledContainer>
    {title && (
      <Box as="header">
        <Box
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <H4>{title}</H4>
          {optionsTitle}
        </Box>
        {subTitle && (
          <Paragraph appearance="muted" css={{ my: '$3' }}>
            {subTitle}
          </Paragraph>
        )}
      </Box>
    )}
    {children}
  </StyledContainer>
);

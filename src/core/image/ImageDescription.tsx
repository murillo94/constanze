import React from 'react';

import { Box, Image, Text } from '../';

export const ImageDescription = ({ src, alt, width, height, description }) => (
  <Box css={{ display: 'flex', alignItems: 'center' }}>
    <Image src={src} alt={alt} width={width} height={height} />
    <Text css={{ ml: 2 }}>{description}</Text>
  </Box>
);

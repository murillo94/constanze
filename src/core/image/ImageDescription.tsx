import React from 'react';

import { Box, Image, Text } from '../';

interface Props<T> extends React.ImgHTMLAttributes<T> {
  description: string;
}

export const ImageDescription = ({
  src,
  alt,
  width,
  height,
  description,
}: Props<HTMLImageElement>) => (
  <Box css={{ display: 'flex', alignItems: 'center' }}>
    <Image src={src} alt={alt} width={width} height={height} />
    <Text css={{ ml: 2 }}>{description}</Text>
  </Box>
);

import React from 'react';

import { Box, Image, Text } from '../';

interface Props<T> extends React.ImgHTMLAttributes<T> {
  description: string;
}

export const ImageDescription = ({
  id,
  src,
  alt,
  description,
  width,
  height,
}: Props<HTMLImageElement>) => (
  <Box css={{ display: 'flex', alignItems: 'center' }}>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      aria-describedby={id}
    />
    <Text id={id} role="presentation" css={{ ml: 2 }}>
      {description}
    </Text>
  </Box>
);

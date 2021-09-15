import { createStitches, VariantProps } from '@stitches/react';

import { MEDIA } from './media';
import { THEME } from './theme';
import { UTILS } from './utils';

export const { styled, css, globalCss, keyframes, theme, getCssText } =
  createStitches({
    theme: THEME,
    media: MEDIA,
    utils: UTILS,
    prefix: '',
  });

export { VariantProps };

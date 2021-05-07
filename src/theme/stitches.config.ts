import { createCss, StitchesVariants } from '@stitches/react';

import { MEDIA } from './media'
import { THEME } from './theme'
import { UTILS } from './utils'

export const { styled, css, global, keyframes, getCssString, theme } = createCss({
  theme: THEME,
  media: MEDIA,
  utils: UTILS,
  prefix: '',
});

export { StitchesVariants }
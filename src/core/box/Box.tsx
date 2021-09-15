import React, { JSXElementConstructor } from 'react';
import type * as Polymorphic from '@radix-ui/react-polymorphic';

import { styled, VariantProps } from '../../theme/stitches.config';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type CSSProp<
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
> = PartialBy<Pick<React.ComponentProps<T>, 'css'>, 'css'>;

type ComponentCSSProp = CSSProp<typeof Component>;
type ComponentVariants = VariantProps<typeof Component>;
type ComponentOwnProps = ComponentCSSProp & ComponentVariants;

const Component = styled('div', {});

export const Box = React.forwardRef((props, forwardedRef) => {
  const { as = 'div', ...boxProps } = props;

  return <Component as={as} {...boxProps} ref={forwardedRef} />;
}) as Polymorphic.ForwardRefComponent<'div', ComponentOwnProps>;

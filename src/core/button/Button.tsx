import { styled } from '../../theme';

export const Button = styled('button', {
  fontSize: '$1',
  fontWeight: '$2',
  borderRadius: '$4',
  borderWidth: '1px',
  borderStyle: 'solid',
  p: '$3',
  width: 'auto',
  outline: '0',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  variants: {
    variant: {
      default: {
        color: '$gray0',
        backgroundColor: '$blue700',
        borderColor: '$blue700',
        '&:hover': {
          color: '$gray0',
          backgroundColor: '$blue600',
          borderColor: '$blue600',
        },
        '&:focus': {
          boxShadow: '$1',
          borderColor: '$blue700',
        }
      },
      minimal: {
        color: '$gray900',
        backgroundColor: '$gray300',
        borderColor: '$gray300',
        '&:hover': {
          color: '$gray900',
          backgroundColor: '$gray200',
          borderColor: '$gray200',
        },
        '&:focus': {
          boxShadow: '$1',
          borderColor: '$blue700',
        }
      },
    },
    outlined: {
      true: {
        backgroundColor: 'transparent',
      }
    }
  },
  compoundVariants: [{
    variant: 'default',
    outlined: true,
    css: {
      color: '$gray900',
      borderColor: '$blue700'
    }
  }, {
    variant: 'minimal',
    outlined: true,
    css: {
      borderColor: '$gray300'
    }
  }],
  defaultVariants: {
    variant: 'default'
  }
});
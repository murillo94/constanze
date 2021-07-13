import { render } from '@testing-library/react';

import { Box } from '../box';

const content = 'im content';

describe('Box', () => {
  it('should render', () => {
    const { container } = render(<Box />);

    expect(container).toBeInTheDocument();
  });

  it('should have children with class name style inline', () => {
    const { getByText } = render(
      <Box css={{ backgroundColor: 'red' }}>{content}</Box>,
    );

    const box = getByText(content);

    expect(box).toHaveTextContent(content);
    expect(box).toHaveClass('c-PJLV c-PJLV-idkEfkH-css');
  });

  it('should have children with class name', () => {
    const { getByText } = render(
      <Box className="classname-test">{content}</Box>,
    );

    const box = getByText(content);

    expect(box).toHaveTextContent(content);
    expect(box).toHaveClass('classname-test');
  });

  it('should be a button', () => {
    const { getByRole } = render(<Box as="button">{content}</Box>);

    const button = getByRole('button');

    expect(button).toHaveTextContent(content);
    expect(button).toBeInTheDocument();
  });
});

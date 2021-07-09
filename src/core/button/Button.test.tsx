import { render, fireEvent } from '@testing-library/react';

import { Button } from '../index';

const content = 'im content';

describe('Button', () => {
  test('should render children and default values', () => {
    const { getByRole } = render(<Button>{content}</Button>);

    const button = getByRole('button');

    expect(button).toHaveTextContent(content);
    expect(button).not.toBeDisabled();
  });

  test('should render type submit', () => {
    const { getByRole } = render(<Button type="submit">{content}</Button>);

    const button = getByRole('button');

    expect(button).toHaveAttribute('type', 'submit');
  });

  test('should call on click', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick}>{content}</Button>);

    const button = getByRole('button');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});

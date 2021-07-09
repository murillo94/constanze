import { render } from '@testing-library/react';

import { Alert } from '../index';

const content = 'im content';

describe('Alert', () => {
  test('should render children', () => {
    const { getByRole } = render(<Alert>{content}</Alert>);

    const alert = getByRole('alert');

    expect(alert).toHaveTextContent(content);
  });

  test('should render title', () => {
    const { getByRole } = render(<Alert title="im title">{content}</Alert>);

    const title = getByRole('heading');

    expect(title).toHaveTextContent('im title');
  });

  test('should render description', () => {
    const { getByText } = render(
      <Alert description="im description">{content}</Alert>,
    );

    const description = getByText('im description');

    expect(description).toBeInTheDocument();
  });
});

import { render } from '@testing-library/react';

import { Anchor } from '../index';

const content = 'im content';

describe('Anchor', () => {
  test('should render href', () => {
    const { getByRole } = render(
      <Anchor href="http://localhost/www.test.com">{content}</Anchor>,
    );

    const anchor = getByRole('link');

    expect(anchor).toHaveProperty('href', 'http://localhost/www.test.com');
  });

  test('not should render href', () => {
    const { queryByRole } = render(<Anchor>{content}</Anchor>);

    const anchor = queryByRole('link');

    expect(anchor).not.toBeInTheDocument();
  });
});

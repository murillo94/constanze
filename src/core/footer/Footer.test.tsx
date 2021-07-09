import { render } from '@testing-library/react';

import { Footer } from '../index';

const content = 'im content';

describe('Footer', () => {
  test('should render children and default values', () => {
    const { getByRole } = render(<Footer>{content}</Footer>);

    const footer = getByRole('contentinfo');

    expect(footer).toHaveTextContent(content);
  });
});

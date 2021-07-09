import { render } from '@testing-library/react';

import { Header } from '../index';

const content = 'im content';

describe('Header', () => {
  test('should render children and default values', () => {
    const { getByRole } = render(<Header>{content}</Header>);

    const header = getByRole('banner');

    expect(header).toHaveTextContent(content);
  });
});

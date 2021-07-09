import { render } from '@testing-library/react';

import { Badge } from '../index';

const content = 'im content';

describe('Badge', () => {
  test('should render children and default values', () => {
    const { getByText } = render(<Badge>{content}</Badge>);

    const children = getByText(content);

    expect(children).toBeInTheDocument();
  });
});

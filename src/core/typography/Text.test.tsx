import { render } from '@testing-library/react';

import { Text } from '../typography';

const content = 'im content';

describe('Text', () => {
  it('should have children', () => {
    const { getByText } = render(<Text>{content}</Text>);

    const text = getByText(content);

    expect(text).toHaveTextContent(content);
  });
});

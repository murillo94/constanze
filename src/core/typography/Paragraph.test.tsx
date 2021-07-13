import { render } from '@testing-library/react';

import { Paragraph } from '../typography';

const content = 'im content';

describe('Paragraph', () => {
  it('should have children', () => {
    const { getByText } = render(<Paragraph>{content}</Paragraph>);

    const paragraph = getByText(content);

    expect(paragraph).toHaveTextContent(content);
  });
});

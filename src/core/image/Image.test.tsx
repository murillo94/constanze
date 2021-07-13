import { render } from '@testing-library/react';

import { Image } from '../image';

const content = 'im content';

describe('Image', () => {
  it('should have accessible name', () => {
    const { getByRole } = render(<Image src="../test.png" alt={content} />);

    const image = getByRole('img');

    expect(image).toHaveAttribute('src', '../test.png');
    expect(image).toHaveAccessibleName(content);
  });
});

import { render } from '@testing-library/react';

import { ImageDescription } from '../image';

const content = 'im content';
const description = 'im description';

describe('ImageDescription', () => {
  it('should have accessible name', () => {
    const { getByRole } = render(
      <ImageDescription
        id="test-id"
        src="../test.png"
        alt={content}
        description={description}
        width={20}
        height={20}
      />,
    );

    const image = getByRole('img');

    expect(image).toHaveAttribute('src', '../test.png');
    expect(image).toHaveAccessibleName(content);
    expect(image).toHaveAccessibleDescription(description);
  });
});

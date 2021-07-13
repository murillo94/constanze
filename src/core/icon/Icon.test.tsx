import { render } from '@testing-library/react';

import { Icon } from '../icon';

const content = 'im content';

describe('Icon', () => {
  it('should have icon label', () => {
    const { getByText } = render(<Icon name="help-circle" label={content} />);

    const label = getByText(content);

    expect(label).toBeInTheDocument();
  });
});

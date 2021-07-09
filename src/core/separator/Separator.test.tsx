import { render } from '@testing-library/react';

import { Separator } from '../index';

describe('Separator', () => {
  test('should render children and default values', () => {
    const { getByRole } = render(<Separator />);

    const separator = getByRole('separator');

    expect(separator).toBeInTheDocument();
  });
});

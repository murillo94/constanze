import { render } from '@testing-library/react';

import { H1, H2, H3, H4, H5 } from '../typography';

const content = 'im content';

describe('H1', () => {
  it('should have h1 with children', () => {
    const { getByRole } = render(<H1>{content}</H1>);

    const h1 = getByRole('heading');

    expect(h1).toHaveTextContent(content);
  });

  it('should have h2 with children', () => {
    const { getByRole } = render(<H2>{content}</H2>);

    const h2 = getByRole('heading');

    expect(h2).toHaveTextContent(content);
  });

  it('should have h3 with children', () => {
    const { getByRole } = render(<H3>{content}</H3>);

    const h3 = getByRole('heading');

    expect(h3).toHaveTextContent(content);
  });

  it('should have h4 with children', () => {
    const { getByRole } = render(<H4>{content}</H4>);

    const h4 = getByRole('heading');

    expect(h4).toHaveTextContent(content);
  });

  it('should have h5 with children', () => {
    const { getByRole } = render(<H5>{content}</H5>);

    const h5 = getByRole('heading');

    expect(h5).toHaveTextContent(content);
  });
});

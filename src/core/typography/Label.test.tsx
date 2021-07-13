import { render, fireEvent } from '@testing-library/react';

import { Label } from '../typography';

const content = 'im content';

describe('Label', () => {
  it('should have children', () => {
    const { getByRole } = render(<Label>{content}</Label>);

    const label = getByRole('label');

    expect(label).toHaveTextContent(content);
  });

  it('should have input focus on label click', () => {
    const { getByRole, getByTestId } = render(
      <div>
        <Label htmlFor="name">{content}</Label>
        <input id="name" data-testid="input-to-focus" />
      </div>,
    );

    const label = getByRole('label');
    fireEvent.click(label);

    const input = getByTestId('input-to-focus');

    expect(input).toHaveFocus();
  });
});

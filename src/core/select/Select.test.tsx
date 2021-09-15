import { render } from '@testing-library/react';

import { Select, SelectItem } from '../index';
import { Label } from '../typography';

describe('Select', () => {
  test('should render select', () => {
    const { getByRole, getByLabelText } = render(
      <>
        <Label htmlFor="color">Select a color</Label>
        <Select id="color">
          <SelectItem value="yellow">yellow</SelectItem>
          <SelectItem value="red">red</SelectItem>
        </Select>
      </>,
    );

    const select = getByRole('combobox');
    const label = getByLabelText('Select a color');

    expect(select).toHaveDisplayValue('yellow');
    expect(label).toHaveDisplayValue('yellow');
  });

  test('should render option', () => {
    const { getByRole } = render(
      <>
        <Label htmlFor="color">Select a color</Label>
        <Select id="color">
          <SelectItem value="yellow">yellow</SelectItem>
        </Select>
      </>,
    );

    const option = getByRole('option');

    expect(option).toBeInTheDocument();
  });
});

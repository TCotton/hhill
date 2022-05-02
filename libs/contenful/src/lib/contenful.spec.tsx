import { render } from '@testing-library/react';

import Contenful from './contenful';

describe('Contenful', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Contenful />);
    expect(baseElement).toBeTruthy();
  });
});

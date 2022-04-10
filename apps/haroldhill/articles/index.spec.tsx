import { render } from '@testing-library/react';

import Articles from './index';

describe('Articles', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Articles />);
    expect(baseElement).toBeTruthy();
  });
});

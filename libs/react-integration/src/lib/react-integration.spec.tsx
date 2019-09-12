import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ReactIntegration from './react-integration';

describe(' ReactIntegration', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<ReactIntegration />);
    expect(baseElement).toBeTruthy();
  });
});

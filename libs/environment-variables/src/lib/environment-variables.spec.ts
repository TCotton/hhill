import { environmentVariables } from './environment-variables';

describe('environmentVariables', () => {
  it('should work', () => {
    expect(environmentVariables()).toEqual('environment-variables');
  });
});

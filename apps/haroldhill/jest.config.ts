/* eslint-disable */
export default {
  displayName: 'haroldhill',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'd.ts'],
  coverageDirectory: '../../coverage/apps/haroldhill',
  setupFilesAfterEnv: ['<rootDir>/setup.jest.js'],
  testEnvironment: 'jsdom',
  verbose: true,
};

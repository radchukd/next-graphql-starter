module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  collectCoverage: true,
  coverageDirectory: './src/test/coverage',
  transform: { '^.+\\.ts$': 'ts-jest' },
  testMatch: ['**/test/**/*.test.ts'],
  projects: ['src'],
};

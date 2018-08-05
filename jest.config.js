module.exports = {
  moduleFileExtensions: [
    'ts',
    'js',
    'vue',
  ],
  // testEnvironment: "node",
  testURL: "http://localhost/",
  globals: {
    NODE_ENV: 'test',
  },
  transform: {
    '^.+\\.ts$': '<rootDir>/preprocessor.js',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    'dest',
  ],
  testMatch: [
    '**/*-test.(ts|js)',
  ],
};

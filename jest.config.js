
// module.exports = {
//     preset: 'ts-jest',
//     // testEnvironment: 'node',
//     "testEnvironment": "jsdom",
//     moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
//     transform: {
//       '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
//     },
//       testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
//     "setupFilesAfterEnv": [
//       "@testing-library/jest-dom/extend-expect"
//   ],
//     transformIgnorePatterns: [],
//   };
module.exports = {
  preset: 'react-native',
  "testEnvironment": "jsdom",
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/', 'node_modules/(?!(jest-)?react-native)'],
  cacheDirectory: '.jest/cache',
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  // setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};

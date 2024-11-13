module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testMatch: ['**/tests/**/*.test.(ts|js)'],  // Adjust this to your test file path
    moduleDirectories: ['node_modules', 'src'], // Helps Jest resolve your modules
  };
  
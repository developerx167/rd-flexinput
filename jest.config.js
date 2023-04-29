/** @type {import('jest').Config} */
const config = {
  preset : 'ts-jest',
  transform: {
    '^.+\\.(test)\\.(ts|tsx)?$': 'ts-jest',
  },
  testEnvironment : "jsdom",
};

module.exports = config;
/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
/** @type {import('jest').Config} */
module.exports = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,

  moduleNameMapper: {
    "^@site/(.*)$": "$1",
  },

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],

  // Add TypeScript file extensions
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
}

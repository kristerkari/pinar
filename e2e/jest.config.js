module.exports = {
  maxWorkers: 1,
  testTimeout: 120000,
  rootDir: "..",
  testMatch: ["<rootDir>/e2e/**/*.spec.js"],
  verbose: true,
  reporters: ["detox/runners/jest/reporter"],
  globalSetup: "detox/runners/jest/globalSetup",
  globalTeardown: "detox/runners/jest/globalTeardown",
  testEnvironment: "detox/runners/jest/testEnvironment",
  setupFilesAfterEnv: ["<rootDir>/e2e/setup.js"],
};

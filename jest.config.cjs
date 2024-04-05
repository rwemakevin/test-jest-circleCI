/** @type {import('jest').Config} */
const config = {
  verbose: true,
  coverageDirectory: "coverage", // Specify the directory where coverage reports will be stored
  collectCoverage: true, // Enable collecting coverage
  collectCoverageFrom: ["src/**/*.js"], // Specify the files for which coverage should be collected
  coverageReporters: ["lcov", "text-summary"], // Specify the coverage report formats
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

module.exports = config;

// jest.config.js
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

/** @type {import('jest').Config} */
const jestConfig = {
  testTimeout: 60000,
  transform: {},
};

export default jestConfig;

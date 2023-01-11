import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    preset: "ts-jest",
    testEnvironment: 'node',
    roots: ['<rootDir>/tests'],
    testMatch: ['**/?(*.)+(spec|test).ts'],
    testPathIgnorePatterns: ["/node_modules/", ".d.ts", ".js"],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
      },
};

export default config;
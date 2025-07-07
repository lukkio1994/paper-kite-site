/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // Handle module aliases (adjust if you use different aliases)
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@components/(.*)$': '<rootDir>/src/app/components/$1',
    '^@public/(.*)$': '<rootDir>/public/$1',
    // CSS modules
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // Static assets
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/out/',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
  collectCoverageFrom: [
    'src/app/components/**/*.{ts,tsx}',
    '!src/app/components/**/*.d.ts',
  ],
};

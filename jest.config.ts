export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    detectOpenHandles: true,
    testMatch: ['**/tests/**/*.spec.ts'],
    bail: true,
    clearMocks: true,
    coverageProvider: 'v8',
    collectCoverage: true
}
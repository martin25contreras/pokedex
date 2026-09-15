import nextJest from 'next/jest.js'

// Le indicamos a Jest dónde está la app de Next.js para cargar la configuración (next.config.js, .env, etc.)
const createJestConfig = nextJest({
    dir: './',
})

/** @type {import('jest').Config} */
const config = {
    // Entorno simulado de navegador (DOM) para React Testing Library
    testEnvironment: 'jest-environment-jsdom',
    // Archivo que se ejecutará antes de cada test para cargar configuraciones extra
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    // Asegurarnos de que Jest busque los archivos .test.tsx
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
}

export default createJestConfig(config)
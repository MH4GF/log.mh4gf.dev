import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    react({
      babel: {
        plugins: ['@vanilla-extract/babel-plugin'],
      },
    }),
  ],
  resolve: {
    alias: {
      '~/': `${__dirname}/`,
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    deps: {
      fallbackCJS: true,
    },
  },
})

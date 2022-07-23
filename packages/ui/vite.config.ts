import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
  plugins: [vanillaExtractPlugin(), react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.ts'),
      name: 'lib',
      fileName: 'index',
    },
    rollupOptions: {
      external: 'react',
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
})

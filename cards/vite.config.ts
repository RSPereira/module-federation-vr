/// <reference types="vitest" />
/// <reference types="vite/client" />

import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'cards-app',
      filename: 'remoteEntry.js',
      exposes: {
        './QueryClientProvider': './src/providers/QueryClientProvider.tsx',
        './ProductsList': './src/components/ProductsList',
        './productAtom': './src/atoms/productAtom.ts',
        './productType': './src/types/productType.ts',
        './formatCurrency': './src/utils/formatCurrencyToBrl.ts',
      },
      shared: ['react', 'react-dom', 'jotai'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})

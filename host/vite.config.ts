import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from "@originjs/vite-plugin-federation"

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        header: "http://localhost:5001/assets/remoteEntry.js",
        cards: "http://localhost:5002/assets/remoteEntry.js",
        footer: "http://localhost:5003/assets/remoteEntry.js",
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})

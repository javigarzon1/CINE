import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
    },
  },
  server: {
    port: 5174,
    strictPort: true,
    host: '0.0.0.0',
    hmr: {
      protocol: 'wss',
      clientPort: 443,
    },
  },
  build: {
    outDir: 'dist',
  },
})

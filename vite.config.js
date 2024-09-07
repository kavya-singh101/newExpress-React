import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  preview: {
    // host:true,
    port: 8080,
    // strict to this port and don't change it if this port is occupied
    strictPort: true,
  },
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    // host can be 0.0.0.0 too
    origin: "http://0.0.0.0:8080",
  },
})

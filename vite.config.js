import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Production optimizations
    minify: 'esbuild', // Use esbuild instead of terser (faster and no extra dependency)
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion', 'gsap']
        }
      }
    },
    // Source maps for debugging (optional, remove for smaller builds)
    sourcemap: false,
    // Chunk size warnings
    chunkSizeWarningLimit: 1000
  },
  // Server configuration for development
  server: {
    port: 3000,
    open: true
  },
  // Preview configuration
  preview: {
    port: 4173,
    open: true
  }
})

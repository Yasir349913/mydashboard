import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',  // relative base path for deployment
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'gsap'  // yahan apne problem wala module daal do
      ]
    }
  }
})

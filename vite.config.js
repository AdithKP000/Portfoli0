import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', 
  build: {
    outDir: 'dist', 
    chunkSizeWarningLimit: 1000, 
    rollupOptions: {
      output: {
        manualChunks: {
          vendors: ['react', 'react-dom'],
        },
      },
    },
  },
  plugins: [react()],
});

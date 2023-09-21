import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://dull-ox-cuff-links.cyclic.cloud', // Your backend server address
        changeOrigin: true,
      },
    },
  },
});

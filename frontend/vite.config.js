import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Ensure environment variables are available
    'import.meta.env': {
      VITE_API_BASE_URL: process.env.VITE_API_BASE_URL || 'http://localhost:8000/api/',
    },
  },
  server: {
    // Optional: Configure dev server
    port: 3000,
    open: true, // Opens browser on start
  },
});
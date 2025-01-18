import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: true, // Show errors in an overlay on the browser
    },
    watch: {
      usePolling: true, // Use polling if file changes aren't detected (useful for certain environments like WSL or network drives)
    },
  },
  assetsInclude: ['**/*.JPG']
});

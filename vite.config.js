import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Vercel will use the `dist` folder as the build output by default
  },
  base: './', // Ensures relative paths, which can be important for proper routing and asset loading in production
});

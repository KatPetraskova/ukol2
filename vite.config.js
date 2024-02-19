import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ukol2_podcasty/',
  root: './src',
  publicDir: '../../public',
  server: {
    hmr: false,
  },
  build: {
    outDir: '../dist',
    modulePreload: false,
  },
  plugins: [react()],
});

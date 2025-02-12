import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import dotenv from 'dotenv';
// https://vitejs.dev/config/
// const env = loadEnv(mode, process.cwd(), '')
export default defineConfig({
   plugins: [react()],
   optimizeDeps: {
      exclude: ['lucide-react'],
   }

});

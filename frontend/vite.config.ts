import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import dotenv from 'dotenv';
// https://vitejs.dev/config/
// const env = loadEnv(mode, process.cwd(), '')
export default defineConfig({
   plugins: [react()],
   build: {
      rollupOptions: {
        external: ['@ant-design/icons']
      },
   },
   optimizeDeps: {
      exclude: ['lucide-react'],
   }

});

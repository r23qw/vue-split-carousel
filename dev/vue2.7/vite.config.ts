import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      'vue-demi': resolve(__dirname, '../../node_modules/vue-demi/lib/v2.7/index.mjs')
    }
  },
  optimizeDeps: {
    exclude: ['vue-demi','vue2.7']
  },
  build: {
    outDir: resolve(__dirname, '../../dist/v2.7'),
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, '../../packages/SplitCarousel/index.ts'),
      formats: ['es', 'cjs', 'umd'],
      name: 'VueSplitCarousel',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['vue','vue2.7'],
      output: {
        globals: {
          vue: 'Vue',
        }
      }
    }
  }
});

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    exclude: ['vue-demi','vue3']
  },
  build: {
    outDir: resolve(__dirname, '../../dist/v3'),
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, '../../packages/SplitCarousel/index.ts'),
      formats: ['es', 'cjs', 'umd'],
      name: 'VueSplitCarousel',
      fileName: (format) => `vue-split-carousel.${format}.js`
    },
    rollupOptions: {
      external: ['vue','vue3'],
      output: {
        globals: {
          vue: 'Vue',
        }
      }
    }
  }
})

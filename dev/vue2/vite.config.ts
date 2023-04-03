import { defineConfig } from 'vite';
import {createVuePlugin as vue} from 'vite-plugin-vue2';
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'vue-demi': resolve(__dirname, '../../node_modules/vue-demi/lib/v2/index.mjs')
    }
  },
  optimizeDeps: {
    exclude: ['vue-demi','vue2']
  },
  build: {
    outDir: resolve(__dirname, '../../dist/v2'),
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, '../../packages/SplitCarousel/index.ts'),
      formats: ['es', 'cjs', 'umd'],
      name: 'VueSplitCarousel',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['vue','vue2', '@vue/composition-api/dist/vue-composition-api.mjs'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          '@vue/composition-api/dist/vue-composition-api.mjs':
            'VueCompositionAPI'
        }
      }
    }
  }
});

import { defineConfig } from 'vite';
import {createVuePlugin as vue} from 'vite-plugin-vue2';
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      vue: resolve(__dirname, './node_modules/vue/dist/vue.runtime.esm.js'),
      'vue-demi': resolve(__dirname, '../../node_modules/vue-demi/lib/v2/index.mjs')
    }
  },
  optimizeDeps: {
    exclude: ['vue-demi', 'vue3', 'vue2', 'vue2.7']
  },
});

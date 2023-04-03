import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      vue: resolve(__dirname, './node_modules/vue/dist/vue.runtime.esm.js'),
    }
  }
});

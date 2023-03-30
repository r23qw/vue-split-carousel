import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      formats:["es","umd"],
      entry: resolve(__dirname, 'src/bundle-entry.ts'),
      name: 'VueSplitCarousel',
      fileName: (format,entry)=>`vue-split-carousel.${format}.js`,
    },
    sourcemap: true,
    cssCodeSplit: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue(), cssInjectedByJsPlugin()],
});

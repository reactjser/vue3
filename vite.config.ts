import { join, resolve } from 'path';
import { readFileSync } from 'fs';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import lessToJS from 'less-vars-to-js';
import styleImport, { VantResolve } from 'vite-plugin-style-import';

const themeVariables = lessToJS(
  readFileSync(resolve(__dirname, './src/styles/antd.customize.less'), 'utf8'),
);

// https://cn.vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: themeVariables,
      },
    },
  },
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  resolve: {
    alias: {
      '/@': join(__dirname, 'src'),
    },
  },
});

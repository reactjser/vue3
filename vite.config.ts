import { join, resolve } from 'path';
import { readFileSync } from 'fs';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import lessToJS from 'less-vars-to-js';
import styleImport, { AndDesignVueResolve } from 'vite-plugin-style-import';

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
      resolves: [AndDesignVueResolve()],
      libs: [
        // If you don’t have the resolve you need, you can write it directly in the lib, or you can provide us with PR
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index`;
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '/@': join(__dirname, 'src'),
    },
  },
});

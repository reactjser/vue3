import { resolve } from 'path';
import { readFileSync } from 'fs';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import { visualizer } from 'rollup-plugin-visualizer';
import lessToJS from 'less-vars-to-js';

const themeVariables = lessToJS(
    readFileSync(
        resolve(__dirname, './src/styles/antd.customize.less'),
        'utf8',
    ),
);

export default defineConfig({
    build: {
        rollupOptions: {
            plugins: [
                visualizer({
                    open: true,
                }),
            ],
        },
    },
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
            libs: [
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
            '/@': resolve(__dirname, './src'),
        },
    },
    server: {
        port: 8000,
    },
});

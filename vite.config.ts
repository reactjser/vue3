import { join } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';

export default defineConfig({
    plugins: [
        vue(),
        styleImport({
            libs: [
                {
                    libraryName: 'element-plus',
                    esModule: true,
                    ensureStyleFile: true,
                    resolveStyle: (name) => {
                        name = name.slice(3);
                        return `element-plus/packages/theme-chalk/src/${name}.scss`;
                    },
                    resolveComponent: (name) => {
                        return `element-plus/lib/${name}`;
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
    server: {
        port: 8000,
    },
});

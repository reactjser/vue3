import { join } from 'path';
import { defineConfig, UserConfigExport } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import { visualizer } from 'rollup-plugin-visualizer';

type Mode = 'development' | 'test' | 'production';

export default ({ mode }: { mode: Mode }): UserConfigExport =>
    defineConfig({
        build: {
            rollupOptions: {
                plugins: [
                    mode === 'test' &&
                        visualizer({
                            open: true,
                        }),
                ],
            },
        },
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

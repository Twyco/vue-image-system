import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vuePlugin from "@vitejs/plugin-vue";
import dtsPlugin from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    vuePlugin(),
    dtsPlugin({
      include: ['src/**/*.ts', 'src/**/*.vue', 'src/**/*.d.ts'],
      outputDir: 'dist/types',
      copyDtsFiles: true,
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueImageSystem',
      fileName: 'vue-image-system',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        exports: "named"
      },
    },
  },
})
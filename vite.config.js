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
      insertTypesEntry: true,
      copyDtsFiles: true,
      rollupTypes: true,
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
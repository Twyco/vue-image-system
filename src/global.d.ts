// src/global.d.ts
import type { Component } from 'vue'

import ImagePicker from './components/ImagePicker.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * <ImagePicker />
     * @see GalleryPicker.vue
     */
    ImagePicker: typeof ImagePicker
  }
}

// Damit TS diese Datei als Modul behandelt und sie in die d.ts-Erzeugung einfließt
export {}

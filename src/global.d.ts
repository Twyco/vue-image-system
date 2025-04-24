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

export {}

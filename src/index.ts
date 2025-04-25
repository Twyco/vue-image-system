// src/index.ts
import ImagePicker from './components/ImagePicker.vue';

export type { ImageSystemImage } from './types/image-system-image.ts'

export {
  ImagePicker
}

export default {
  install(app: any) {
    app.component('ImagePicker', ImagePicker);
  }
};
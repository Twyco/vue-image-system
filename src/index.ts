// src/index.ts
import ImagePicker from './components/ImagePicker.vue';

export type { ImageType } from './types/image-interface.ts'

export {
  ImagePicker
}

export default {
  install(app: any) {
    app.component('ImagePicker', ImagePicker);
  }
};
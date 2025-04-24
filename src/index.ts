// src/index.ts
import ImagePicker from './components/ImagePicker.vue';

export  type { Image } from './types/image-interface'

export {
  ImagePicker
}

export default {
  install(app: any) {
    app.component('ImagePicker', ImagePicker);
  }
};
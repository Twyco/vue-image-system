import ImagePicker from './components/ImagePicker.vue'
import { AxiosInstance } from 'axios';
import { route as ziggyRoute } from 'ziggy-js';

declare global {
  interface Window {
    axios: AxiosInstance;
  }

  /* eslint-disable no-var */
  var route: typeof ziggyRoute;
}

declare module 'vue' {
  interface ComponentCustomProperties {
    route: typeof ziggyRoute;
  }
}

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

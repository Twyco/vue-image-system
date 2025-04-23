import ImagePicker from './components/ImagePicker.vue'
import {App} from "vue";

export { ImagePicker }
export default {
  install(app: App): void {
    app.component('ImagePicker', ImagePicker)
  }
}

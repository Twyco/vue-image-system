<script setup lang="ts">
import {onMounted, ref} from 'vue'
import axios from "axios";
import {ImageSystemImage} from "@/types/image-system-image.js";
import {GenericPagination} from "@/types/generic-pagination.js";
import Loader from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css'
import PaginationControl from "@/components/PaginationControl.vue";

const model = defineModel<ImageSystemImage | null>();

const imagePagination = ref<GenericPagination<ImageSystemImage> | null>(null);
const isLoading = ref<boolean>(false);;


const fetchPage = async (page: number) => {
  axios.get(route('image-system.paginate'), {
    params: {
      page: page,
    }
  }).then(response => {
    imagePagination.value = response.data;
  }).catch(error => {
    //TODO fehler beim laden
    console.log(error);
  });
}

const selectImage = (image: ImageSystemImage) => {
  if(model.value?.id === image.id) {
    model.value = null;
    return;
  }
  model.value = image;
}

onMounted(async () => {
  isLoading.value = true;
  await fetchPage(1)
  isLoading.value = false;
});

</script>

<template>
  <div class="w-full h-full flex place-items-center justify-center overflow-hidden">
    <Loader :active="isLoading" :is-full-page="false" loader="bars" color="#FFFFFF"/>
  </div>
  <div
    v-if="imagePagination && !isLoading"
    class="w-full h-full"
  >
    <div class="w-full grid grid-cols-12 gap-1">
      <div
        ref="imageRefs"
        v-for="image in imagePagination.data"
        class="w-full border-4 p-1 rounded-sm col-span-6 md:col-span-4"
        :class="model?.id === image.id ? 'border-secondary' : 'border-transparent'"
        :key="image.id"
        @click="selectImage(image)"
      >
        <img :src="image.url" alt="" class="w-full h-full object-contain">
      </div>
    </div>
    <div class="w-full pt-4 flex justify-end">
      <PaginationControl
        :current-page="imagePagination.currentPage"
        :last-page="imagePagination.lastPage"
        @click="(page: number) => fetchPage(page)"
      />
    </div>
  </div>
</template>
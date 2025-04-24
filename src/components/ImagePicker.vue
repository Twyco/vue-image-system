<script setup lang="ts">
import { defineEmits, defineProps, withDefaults } from 'vue'

withDefaults(defineProps<{
  title?: string
}>(), {
  title: 'Leck Eier',
})

const emit = defineEmits<{
  (event: 'fick', updateValue: string): void
}>()

</script>

<template>
  <div>
    <h1>Image Picker v6</h1>
    <h3>{{ title }}</h3>
    <button @click="emit('fick', 'fick mich')" type="button">Emit Test</button>
  </div>
</template>


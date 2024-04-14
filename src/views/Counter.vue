<template>
  <div>
    <h1>Counter</h1>
    <p>Count: {{ count }}</p>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated, onUnmounted } from 'vue'

const count = ref<number>(0)

const increase = () => { count.value = count.value + 1 } 
const decrease = () => { count.value = count.value - 1 }

onMounted(() => {
  console.log('mounted');
});

onUpdated(() => {
  console.log('updated: ', count.value);
});

onUnmounted(() => {
  console.log('unmounted');
});
</script>

<style scoped>
</style>

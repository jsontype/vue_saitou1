<template>
  <div>
    <h1>News</h1>
    <div v-for="item in news" :key="item.id">
      <a class="newsTitle" :href="item.url">{{ item.title }}</a>      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const news = ref<any[]>([])

const getNews = () => {
  fetch("https://api.hnpwa.com/v0/news.json")
    .then((res) => res.json())
    .then((json) => news.value = json)
}

onMounted(() => {
  getNews()
});
</script>

<style scoped>
.movieTitle {
  display: block;
}
</style>

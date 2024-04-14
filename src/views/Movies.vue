<template>
  <div>
    <h1>Movies</h1>
    <div v-for="movie in movies" :key="movie.id">
      <a class="movieTitle" :href="movie.url">{{ movie.title }}</a>
      <img :src="movie.large_cover_image" :alt="movie.title" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const movies = ref<any[]>([])

const getMovies = () => {
  fetch("https://yts.mx/api/v2/list_movies.json")
    .then((res) => res.json())
    .then((json) => {
      movies.value = json.data.movies;
  });
}

onMounted(() => {
  getMovies()
});
</script>

<style scoped>
.movieTitle {
  display: block;
}
</style>

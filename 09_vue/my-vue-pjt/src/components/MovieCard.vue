<template>
  <div class="card" style="width: 18rem; margin-left: 20px; margin-bottom: 20px;">
  <img :src="posterPath" class="card-img-top" height="400px">
  <div class="card-body">
    <h5 class="card-title">{{ movie.original_title }}</h5>
    <hr>
    <p class="card-text">{{ movie.overview }}</p>
    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
  </div>
</div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: Object,
  },
  computed: {
    posterPath() {
      return `https://image.tmdb.org/t/p/original/${this.movie.poster_path}`
    }
  }
}
</script>

<style>
</style>

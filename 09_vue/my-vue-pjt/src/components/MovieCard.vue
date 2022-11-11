<template>
  <div class="card" style="width: 18rem;">
  <img :src="posterPath" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{ movie.original_title }}</h5>
    <p class="card-text">{{ movie.overview }}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
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

<template>
  <div class="container">
  <div class="d-flex justify-content-center">
    <!-- {{ randomMovie }} -->
    <div class="card shadow-sm p-3 mb-5 bg-body rounded" style="width: 30rem;">
    <img :src="posterPath" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{ randomMovie.original_title }}</h5>
      <hr>
      <p class="card-text">{{ randomMovie.overview }}</p>
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
    </div>
  </div>
  </div>

  
</template>

<script>
export default {
  name: 'RandomView',
  data() {
    return {
      randomMovie : null,
    }
  },
  methods: {
    getData() {
      this.$store.dispatch('getData')
    }
  },
  created() {
    this.getData()
    const idx = Math.floor(Math.random() * this.$store.state.movies.length)
    return this.randomMovie = this.$store.state.movies[idx]
  },
  computed: {
    posterPath() {
      return `https://image.tmdb.org/t/p/original/${this.randomMovie.poster_path}`
    }
  }

}
</script>

<style>

</style>
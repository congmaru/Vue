<template>
  <div class="about">
    <h1>RANDOM</h1>
    <!-- {{ randomMovie }} -->

    <div class="card" style="width: 18rem;">
    <img :src="posterPath" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{ randomMovie.original_title }}</h5>
      <p class="card-text">{{ randomMovie.overview }}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
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
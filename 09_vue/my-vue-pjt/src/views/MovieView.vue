<template>
  <div class="row d-flex justify-content-center">
    <MovieCard
    v-for="movie in getMovieData "
    :key=movie.id
    :movie=movie
    id="card"
    />
    <!-- {{getMovieData}} -->
    <h5 id="h5">@created by tweedles</h5>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard'
export default {
  name: 'MovieView',
  components: {
    MovieCard,
  },
  methods: {
    getData() {
      this.$store.dispatch('getData')
    }
  },
  created() {
    this.getData()
  },
  computed: {
    getMovieData() {
      return this.$store.state.movies

    }
  }
}
</script>

<style>
#card {
  padding: 5px;
}

#h5 {
  color: lightgray;
}
</style>

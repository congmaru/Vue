<template>
  <div class="row ">
    <MovieCard
    v-for="movie in getMovieData "
    :key=movie.id
    :movie=movie
    />
    <!-- {{getMovieData}} -->
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

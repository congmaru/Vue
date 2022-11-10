<template>
  <div
  class="column d-flex justify-content-between text-monospace"
  @click="stvideo">
    <img :src="imgSrc" width="100px" height="80px">
    <div>
      {{ video.snippet.title }}

    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoListItem',
  props : {
    video: Object,
  },
  computed: {
    imgSrc() {
      return this.video.snippet.thumbnails.default.url
    }
  },
  methods: {
    stvideo() {
      return this.$store.dispatch('stvideo',this.video)
    }
  }
}
</script>

<style>

</style>
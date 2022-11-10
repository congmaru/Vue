<template>
  <div id="viewer">
    <h1 v-if="!getvideo" >비디오를 골라보던가</h1>
    <iframe id="getvideo.id.videoId" type="video" width="100%" height="100%" :src="imgsrc"
  frameborder="0"
  v-if="getvideo"></iframe>
  </div>
</template>

<script>
export default {
  name: 'VideoView',
  computed: {
    getvideo() {
      return this.$store.state.video
      
    },
    imgsrc() {
      return `http://www.youtube.com/embed/${this.getvideo.id.videoId}?enablejsapi=1&origin=http://example.com`
    }
  }

}
</script>

<style>
#viewer {
  border: solid 1px lightgray;
  
}
</style>
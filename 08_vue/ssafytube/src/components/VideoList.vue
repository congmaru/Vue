<template>
  <div class="list-group ali " id="list">
    <VideoListItem
    v-for="video in getData"
    :key="video.id.videoId"
    :video = "video"
    class="list-group-item"
    />
    <h4 class="line">@made by hs.ja</h4>
  </div>
</template>

<script>
import VideoListItem from '@/components/VideoListItem'
export default {
  name: 'VideoList',
  components: {
    VideoListItem,
  },
  computed: {
    getData() {
      return this.$store.state.videos
    }
  }
}
</script>

<style>
#list {
  height: 500px;
}
.line {
  position: absolute;
  margin-top: 520px;
  margin-left: 100px;


  color: lightgray;
}
</style>
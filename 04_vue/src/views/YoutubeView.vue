<template>
  <div>
    <h1 class="text-success">SSAFY TUBE</h1>
    <section v-if="isSelectedVideo">
      <div class="ratio ratio-16x9">
        <iframe :src="videoSrc" frameborder="0" width="800px"></iframe>
      </div>
      <div class="">
        {{ selectedVideo.snippet.title}}
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
// import _ from 'lodash'

const API_URL = 'https://www.googleapis.com/youtube/v3/search'
const API_KEY = 'AIzaSyAzFur2JkFAQj83Evv_zDneuCsxoAQjMsc'

export default {
  name:'YoutubeView',
  created() {
    axios.get(API_URL, {
      params: {
        key: API_KEY,
        type: 'video',
        part: 'snippet',
        q: ''
      }
    }).then((response) => {
      this.videos = response.data.items
      this.selectedVideo = this.videos[0]
    }). catch((error) => {
      console.error(error)
    })
  },
  data() {
    return {
      videos: [],
      selectedVideo: {}
    }
  },
  computed: {
    videoSrc() {
      // const url='http://www.youtube.com/embed/'
      // return url + this.selectedVideo.id.videoId

      return `http://www.youtube.com/embed/${ this.selectedVideo.id.videoId }`
    },
    isSelectedVideo() {
      //길이가 1이상이면 True
      return !!Object.keys(this.selectedVideo).length
    }
  }

}
</script>

<style>
* {
  font-family: 'Noto Sans KR', sans-serif;
}

.video-title {
  border: solid black 2px
}
</style>
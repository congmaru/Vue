<template>
  <div id="app" class="container">
    <h1 class="text-primary" style="font-family: 'Rubik Bubbles', cursive;">SSAFY TUBE</h1>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form class="input-group mb-3" @submit.prevent="sendData">
          <input type="text" v-model="inputData" class="form-control" placeholder="검색어를 입력하세요" aria-label="검색어를 입력하세요" aria-describedby="button-addon2" >
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">검색</button>
          </div>
        </form>
      </div>
    </div>
    <!-- <form @submit.prevent="sendData">
      <input type="text"
      v-model="inputData">
      <button>검색</button>
    </form> -->
    <b-container class="bv-example-row">
      <b-row>
      <b-col cols="12" lg="8" >
      <VideoView 
      id="mainbox"
      class="shadow-lg p-3 mb-5 bg-white rounded"
      />
      </b-col>
      <b-col cols="12" lg="4"><VideoList
      /></b-col>
      </b-row>
    </b-container>
    <!-- <div class="d-flex justify-content-center" id="mainbox">
      <VideoView class="col-lg-8 shadow-lg p-3 mb-5 bg-white rounded"/>
      <VideoList class="col-lg-4"/>
    </div> -->
  </div>
</template>

<script>
import VideoView from '@/components/VideoView'
import VideoList from '@/components/VideoList'

export default {
  name: 'App',
  components: {
    VideoView,
    VideoList

  },
  data() {
    return {
      inputData : null
    }
  },
  methods: {
    sendData() {
      this.$store.dispatch('sendData', this.inputData)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#mainbox {
  height: 600px;
}
</style>

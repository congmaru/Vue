import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    key: 'AIzaSyAcSYQODttNPg14HQYGIuB3xFb5vHC64Tc',
    URL: 'https://www.googleapis.com/youtube/v3/search',
    videos: null,
    video: null,
  },
  getters: {
  },
  mutations: {
    SEND_DATA(state,items) {
      state.videos=items
    },
    ST_VIDEO(state, video) {
      state.video = video
    }
    
  },
  actions: {
    sendData(context, sendData) {
      const params = {
        key: context.state.key,
        type: 'video',
        part: 'snippet',
        q: sendData,
      }
      axios.get(context.state.URL,{
        params})
      .then((response) => {
        const items = response.data.items
        context.commit('SEND_DATA',items)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    stvideo(context,video) {
      context.commit('ST_VIDEO', video)
    }

},
  modules: {
  }
})

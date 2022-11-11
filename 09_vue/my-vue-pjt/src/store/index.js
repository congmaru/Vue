import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Key: '164f8d9d4790c9d3f59a0cbda5d95c69',
    url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=164f8d9d4790c9d3f59a0cbda5d95c69&language=ko-KR',
    movies: null,
    wishlist: [],
  },
  getters: {
  },
  mutations: {
    GETDATA(state,movies) {
      state.movies=movies
    },
    CREATE_WISH_ITEM(state,wishItem) {
      const wish = {
        title: wishItem,
        isSelected: false,
      }
      state.wishlist.push(wish)
    },
    COMPLETE(state,selectedItem) {
      state.wishlist.forEach((wish) => {
        if (wish === selectedItem) {
          wish.isSelected = !wish.isSelected
        }
      })

    }
  },
  actions: {
    getData(context) {
      axios.get(context.state.url)
      .then((response) => {
        const movies = response.data.results
        context.commit('GETDATA',movies)
      })
      .catch((error) => {
        console.log(error)
      })
    }

  },
  modules: {
  }
})

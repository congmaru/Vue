import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  //   message: 'My feelings for today is HAPPY I guess'
  // },
  // getters: {
  //   messageLength(state) {
  //     return state.message.length
  //   },
  // },
  // mutations: {
  //   // 이름 똑같아도 되는데 굳이 스네이크케이스로 쓴 이유는 구분하여 강조하기 위함
  //   CHANGE_MESSAGE(state,newMessage) {
  //     state.message = newMessage
  //   }
  // },
  // actions: {
  //   changeMessage(context, newMessage) {
  //     context.commit('CHANGE_MESSAGE',newMessage)
  //   }

  // },
  modules: {
    todo
  }
})

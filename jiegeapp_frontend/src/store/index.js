import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  getters: { //（可以认为是 store 的计算属性）。
    doit(state){
      return state.count
    }
  },
  mutations: {  //methods
     increment(state){
        state.count++
     }
  },
  actions: {
  },
  modules: {
  }
})

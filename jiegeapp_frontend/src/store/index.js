import { createStore } from 'vuex'


const state = {
  count: 0
}
const getters = {
  doit(state){
    return state.count
  }
}
const mutations = {
  increment(state){
    state.count++
  }
}
const actions = {}
const modules = {}

export default createStore({
    state,
    getters,
    mutations,
    actions,
    modules
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    baseDomain: 'http://dangamble.co.uk'
  },
  getters: {
    baseDomain (state) {
      return state.baseDomain
    }
  }
})

export default store

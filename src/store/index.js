import Vue from 'vue'
import Vuex from 'vuex'
import state from './common/state'
import getters from './common/getters'
import mutations from './common/mutations'
import actions from './common/actions'
import user from './user'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    user,
  },
})

export default store

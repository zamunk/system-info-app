import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseHostAddress: 'http://localhost',
    hostAPIPort: 3000,
    staticURL: 's/info',
    dynamicURL: 'd/info',
    snackMessage: '',
    snackBar: false
  },
  getters: {
    getStaticAPIURL: state => {
      return `${state.baseHostAddress}:${state.hostAPIPort}/${state.staticURL}`
    },
    getDynamicAPIURL: state => {
      return `${state.baseHostAddress}:${state.hostAPIPort}/${state.dynamicURL}`
    }
  },
  mutations: {
    setHostConfig (state, payload) {
      state.baseHostAddress = payload.base
      state.hostAPIPort = payload.port
      state.staticURL = payload.stat
      state.dynamicURL = payload.dyn
    },
    setSnackBar (state, payload) {
      state.snackBar = payload.on
      state.snackMessage = payload.msg
    }
  },
  actions: {
  },
  modules: {
  }
})

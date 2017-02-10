import Vue from 'vue'
import Vuex from 'vuex'
import popupLoading from './modules/popup-loading'
import popupModal from './modules/popup-modal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    popup: {
      namespaced: true,
      modules: {
        loading: popupLoading,
        modal: popupModal
      }
    }
  }
})

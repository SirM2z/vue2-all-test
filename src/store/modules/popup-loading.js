import {
  SHOW_POPUP_LOADING,
  HIDE_POPUP_LOADING
} from '../types'

const state = {
	content: ''
}

const actions = {
  ['showLoading'] ({ commit }, content = '正在加载') {
    commit(SHOW_POPUP_LOADING, content)
  },
  ['hideLoading'] ({ commit }) {
    commit(HIDE_POPUP_LOADING)
  }
}

const mutations = {
  [SHOW_POPUP_LOADING](state, action) {
    state.content = action
  },
  [HIDE_POPUP_LOADING](state, action) {
    state.content = ''
  }
}

const getters = {
  loadContent: (state, getters) => {
    return state.content
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

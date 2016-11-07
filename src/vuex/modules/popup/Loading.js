import {
	SHOW_POPUP_LOADING,
	HIDE_POPUP_LOADING
} from '../../types'
const state = {
	content: ''
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
	SLContent: (state, getters) => {
    return state.content
  }
}

export default {
	state,
	mutations,
	getters
}
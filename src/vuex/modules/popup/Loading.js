import {
	SHOW_POPUP_LOADING,
	HIDE_POPUP_LOADING
} from '../../types'
const state = {
	message: {
		content: ''
	}
}

const mutations = {
	[SHOW_POPUP_LOADING](state, action) {
		state.message = {
			...action
		}
	},
	[HIDE_POPUP_LOADING](state, action) {
		state.message = {
			content: ''
		}
	}
}

export default {
	state,
	mutations
}
import Vue from 'vue'
import Vuex from 'vuex'

import {
	showLoading,
	hideLoading,
	showModal,
	hideModal
} from './actions/popup'

import {
	Loading,
	Modal
} from './modules/popup'

Vue.use(Vuex)

export default new Vuex.Store({
	actions: {
		showLoading,
		hideLoading,
		showModal,
		hideModal
	},
	modules: {
		Loading,
		Modal
	}
})
import Vue from 'vue'
import Vuex from 'vuex'

import {
	showLoading,
	hideLoading
} from './actions/popup'

import {
	Loading
} from './modules/popup'

Vue.use(Vuex)

export default new Vuex.Store({
	actions: {
		showLoading,
		hideLoading
	},
	modules: {
		Loading
	}
})
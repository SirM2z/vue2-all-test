import Vue from 'vue'
import Vuex from 'vuex'
import {
	Loading
} from './modules/popup'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		Loading
	}
})
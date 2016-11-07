import * as types from '../types'

//显示加载
export const showLoading = ({ commit }, content = '正在加载') => {
	commit(types.SHOW_POPUP_LOADING, content)
}

//隐藏加载
export const hideLoading = ({ commit }) => {
	commit(types.HIDE_POPUP_LOADING)
}

//显示Modal
export const showModal = ({ commit }) => {
	commit(types.MODAL_SHOW)
}

//隐藏Modal
export const hideModal = ({ commit }) => {
	commit(types.MODAL_HIDE)
}
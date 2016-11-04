//隐藏消息
export const hideMsg = ({
	dispatch
}) => {
	dispatch(types.HIDE_POPUP_MSG)
}

//显示加载
export const showLoading = ({
	dispatch
}, content = '正在加载') => {
	dispatch(types.SHOW_POPUP_LOADING, {
		content: content
	})
}
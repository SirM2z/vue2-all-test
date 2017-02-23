/*
*USAGE
*
*import clickOutside from './clickOutside'
*Vue.directive('clickOutside', clickOutside)
*
*当点击div以外的地方，执行something()
*<div v-click-outside="something()">click outside</div>
*
*/
export default {
  bind () {
    this.onClick = (event) => {
      if (this.el.contains(event.target)) return false
      if (this.expression) this.vm[this.expression]()
    }
    setTimeout(() => {
      document.addEventListener('click', this.onClick)
    })
  },
  unbind () {
    document.removeEventListener('click', this.onClick)
  }
}

<template>
  <div id="app">
    <img src="./assets/images/logo.png">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
    <load></load>
  </div>
</template>

<script>
require('animate.css')
require('./assets/style/common.css')
import 'element-ui/lib/theme-default/icon.css'
import 'element-ui/lib/theme-default/message.css'
import 'element-ui/lib/theme-default/notification.css'
import load from './components/popup/load.vue'
export default {
  name: 'app',
  components: {
    load
  },
  mounted: function(){
  },
  methods: {
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

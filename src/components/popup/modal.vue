<template>
  <transition name="expand">
    <div class="modal-box" v-show="isModalShow" @touchmove="prevent" @mousewheel="prevent" @click="hideModal">
      <transition name="zoom">
        <div class="modal-content" @click="prevent" v-show="isModalShow">
          <slot></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      hideModal: 'popup/modal/hideModal'
    }),
    prevent: function(e){
      e.preventDefault()
      e.stopPropagation()
      this.hideModal()
    }
  },
  computed: {
    ...mapGetters({
      isModalShow: 'popup/modal/isModalShow'
    })
  }
}
</script>

<style scoped>
.modal-box {
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .3);
  display: flex;
  justify-content: center;
  align-items: center;
}
/*expand-enter        定义进入的开始状态
  expand-enter-active 定义进入的结束状态
  expand-leave        定义离开的开始状态
  expand-leave-active 定义离开的结束状态*/

.expand-enter-active, .expand-leave-active {
  transition: all .3s ease;
}

.expand-enter,
.expand-leave-active {
  opacity: 0;
}

.zoom-enter-active, .zoom-leave-active {
  transition: all .2s ease;
}

.zoom-enter,
.zoom-leave-active {
  transform: scale(0);
}
</style>

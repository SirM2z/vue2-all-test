<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <h3><router-link to="/hello">go hello</router-link></h3>
    <h3><router-link to="/test/test1">go test1</router-link></h3>
    <h3><router-link to="/test/test2">go test2</router-link></h3>
    <h2>Very Cool~ Do you like it ?</h2>
    <a @click="searchGithub" style="cursor: pointer;">Click this to test Axios</a>
    <h3>{{time | formatDate('yyyy年MM月dd日 hh时mm分ss秒')}}</h3>
    <a @click="showModal" style="cursor: pointer;">Click this to show Modal</a>
    <h3>test message</h3>
    <a @click="testMessage" style="cursor: pointer;">Click this to test message</a>
    <h3>test notify</h3>
    <a @click="testNotify" style="cursor: pointer;">Click this to test notify</a>

    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>

    <modal>
      <div class="test-modal">
        <h3>hello modal</h3>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import modal from '../components/popup/modal.vue'
export default {
  name: 'test',
  components: {
    modal
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App -- test page',
      time: '2016-05-05 20:10:10'
    }
  },
  mounted: function(){
  },
  methods:{
    ...mapActions(['showModal']),
    searchGithub: function(){
      this.$http.get('/search/repositories',{
        params: {
          q: 'vscode',
          sort: 'stars',
          order: 'desc'
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    },
    testMessage: function(){
      let type = ['info', 'success', 'warning', 'error']
      let typeInt = parseInt(Math.random()*4)
      this.$message({
        type: type[typeInt],
        message:'操作提示'
      })
    },
    testNotify: function(){
      let type = ['info', 'success', 'warning', 'error']
      let typeInt = parseInt(Math.random()*4)
      this.$notify({
        title: '标题',
        message: '这是一条提示消息',
        type: type[typeInt]
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.test-modal{
  background-color: #fff;
  padding: 50px 200px
}
</style>

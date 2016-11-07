<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <router-link to="/hello">hello</router-link>
    <h2>Very Cool~ Do you like it ?</h2>
    <h3 @click="searchGithub" style="cursor: pointer;">Click this to test Axios</h3>
    <h3>{{SLContent}}</h3>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App -- test page'
    }
  },
  methods:{
    ...mapActions([
      'showLoading',
      'hideLoading'
    ]),
    searchGithub: function(){
      let _this = this;
      this.$http.get('/search/repositories',{
        params: {
          q: 'vscode',
          sort: 'stars',
          order: 'desc'
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  computed: {
    ...mapGetters([
      'SLContent'
    ])
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
</style>

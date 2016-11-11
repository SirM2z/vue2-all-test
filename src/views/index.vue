<template>
  <div class="index">
    <h1>{{ msg }}</h1>
    <router-link to="/test">go test</router-link>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <img id="testimg" style="display:none;" src="../assets/images/logo.png">
    <canvas id="c1" width="400" height="400" style="border: 1px solid #000;"></canvas>
    <img :src="testimgsrc" alt="">
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      testimgsrc: ''
    }
  },
  mounted: function(){
    this.testcanvas();
  },
  methods:{
    testcanvas: function(){
      var image = document.getElementById('testimg');
      var canvas = document.getElementById('c1');
      var ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0, 200, 200);
      ctx.drawImage(image, 200, 0, 200, 200);
      ctx.drawImage(image, 100, 200, 200, 200);
      ctx.font="20px Georgia";
      ctx.fillText("测试测试测试测试测试!",100,200);

      this.testimgsrc = canvas.toDataURL("png");  
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
</style>

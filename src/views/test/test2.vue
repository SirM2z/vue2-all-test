<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <router-link to="/test/test1">go to test1</router-link>
    <h2>Very Cool~ Do you like it ?</h2>
  </div>
</template>

<script>
export default {
  name: 'test2',
  data () {
    return {
      msg: 'Welcome to Your test2 page',
    }
  },
  methods:{
  }
}
</script>

<style scoped>
</style>

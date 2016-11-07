<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <router-link to="/test/test2">go to test2</router-link>
    <h2>Very Cool~ Do you like it ?</h2>
  </div>
</template>

<script>
export default {
  name: 'test1',
  data () {
    return {
      msg: 'Welcome to Your test1 page',
    }
  },
  methods:{
  }
}
</script>

<style scoped>
</style>

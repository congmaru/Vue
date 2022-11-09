<template>
  <div class="home">
    <h1>이곳은 App.vue </h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="이곳은 helloworld.vue"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

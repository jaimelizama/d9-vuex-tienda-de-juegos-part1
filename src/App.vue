<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <li><router-link :to="{name: 'inicio'}">Inicio</router-link></li>
    </ul>
    <transition name="vista">
      <router-view></router-view>
    </transition> -->
    <Navbar></Navbar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: { Navbar }
}
</script>

<style scoped>
.vista-enter-active,
.vista-leave-active {
  transition: opacity 0.1s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}
</style>

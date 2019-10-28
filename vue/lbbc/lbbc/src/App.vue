<template>
  <div id="app">
    <router-view/>
    <FooterGuide/>
  </div>
</template>

<script>
  import  FooterGuide from './components/FootGuide/FooterGuide.vue'
export default {
    components: {
      FooterGuide
    }
  }
</script>

<style>
#app {
  background-color: white;
  width: 100%;
  height: 100%;
}
</style>

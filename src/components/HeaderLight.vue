<template>
  <div class="row"> 
    <div class="logo-section">
      <div class="column">
        <router-link to="/"><img alt="HeadnShoulders logo" src="../assets/logo-light.png"></router-link>
      </div>
      <LeftMenu/>    
    </div>

    <div class="container header-section">
      <div class="columns navi">
        <div class="column"> <Navigation/> </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
import LeftMenu from '../components/LeftMenu.vue'


export default {
  name: 'HeaderLight',
  components: {
    Navigation,   
    LeftMenu  
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import '~bulma';
@import "@/styles/_main.scss";

</style>

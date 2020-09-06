<template>  
    <div class="left-menu">      
      <router-link to="/dandruffdecoded">
      <!-- <span>Dandruff Decoded</span> -->
      <img alt="Dandruff Decoded" src="../assets/img/dandruff-decoded.png" >
      </router-link>
          
    </div>
</template>

<script>

export default {
  name: 'LeftMenu',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .left-menu {      
      a {
        position: absolute;
        top: 0vh;
        bottom: 0;
        height: 1.6rem;
        margin: 3rem auto auto !important;
        text-transform: uppercase;
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        letter-spacing: .5rem;
        color: #222;
        left: 4.16667vw;        
        z-index:99;    
        transform-origin: top left;
        transform: rotate(-90deg) translateX(0%);
        img {
          transform-origin: top left;
          transform: rotate(90deg) translateX(-100%);
          max-height:80vh;
        }    
      }
    }   
</style>

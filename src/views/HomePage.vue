<template>
  <section class="homepage" :style="{ backgroundImage: 'url(' + require('@/assets/img/hero-home.jpg') + ')' }">    
    <header>
        <HeaderLight/>    
    </header>
    <div class="container is-fluid homevw">
      <div class="columns">
        <div class="column is-5 is-offset-6">
          <h2>Dandruff Decoded</h2>
          <h1>How to Shake the</h1>
          <p>Head & Shoulders has uncovered the devastating hidden impacts of flakes and reveals the holistic solution to Shake the Weight of the Flake with their new research study, Dandruff Decoded. As the most comprehensive study of its kind, it looks into the psychological and social impacts dandruff has on severe and moderate sufferers. </p>
        </div>
        <div class="column"></div>
      </div>
    </div>
    <div class="header__scroll_info">
      <div class="header__scroll_info_container">
        <span>Discover</span>
        <br>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 8"><line class="st0" x1="14" y1="1" x2="7.5" y2="7"></line><line class="st0" x1="1" y1="1" x2="7.5" y2="7"></line></svg>
      </div>
	  </div>
  </section>
</template>

<script>
import HeaderLight from '../components/HeaderLight.vue'

export default {
  name: 'HomePage',
  components: {
    HeaderLight,    
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .homepage {
    height: 100vh;
    width: 100%;
    background-size:cover;
    background-position:center center;
    .homevw {
      height:80vh;
      display:flex;
      align-items: center;
      justify-content: center;
      align-content: center;
      h2 {
        font-size:2.8rem;
        text-transform:uppercase;
        background: linear-gradient(to right, #52D2F6 0%, #42C6F0 10%, #2DB6E8 20%, #19A7DF 30%, #1481BC 40%, #11609B 50%, #0E4680 60%, #0F4C8E 70%, #0E509C 80%, #124090 90%, $darkblue 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;       
        font-family: $black-font;     
        }
      h1 {
          font-weight:normal;
          color:white;
          text-transform:uppercase;
          font-size:4.5rem;
          margin-bottom:5rem;
      }
      p {
          font-family:$bold-font;
          font-size:19px;
          color:white;
          line-height:1.4;
          width:90%;
      }
    }
  }
</style>

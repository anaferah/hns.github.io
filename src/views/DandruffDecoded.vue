<template>
<main>
    <section class="hero-section-dd">    
        <header>
            <HeaderDark/>    
        </header>
    </section>  
    <section class="dandruff-decoded-items hef-items">
        <div class="container">
            <div class="columns firstitems">
              <div class="column is-5">
                <figure class="lt item__inner">
                  <div class="aspect-ratio">     
                    <div class="item__asset-wrapper">  
                      <img alt="Free Dandruff Scalp" src="../assets/img/asset-8-1.png" class="howdecoded-covid-img">
                    </div>                   
                  </div>               
                </figure>  
              </div>
              <div class="column is-6 is-offset-1">
                <figure class="sq item__inner">
                  <div class="aspect-ratio">     
                    <div class="item__asset-wrapper">  
                      <img alt="Free Dandruff Scalp" src="../assets/img/asset-7.png" class="howdecoded-covid-img">
                    </div>                   
                  </div>               
                </figure>  
                <p>Many may assume dandruff is just an irritating minor issue resulting in pesky white flakes combined with a ‘bit of an itchy scalp’. Well, not anymore. <strong>We have decoded dandruff to expose the ongoing, life altering, disorder that effects sufferers with moderate to severe dandruff, revealing the truth behind the weight that flakes are having on people’s head…and shoulders</strong>. 
                </p>
              </div>
            </div>

            <div class="columns firstitems hef-items">
              <div class="column">
                 <h1>But, why?</h1>
                  <p class="figure-intro">There is a lot that happens in, on and around us that impacts dandruff and our scalp health. As the leading scalp experts, we are well versed in the impact of genes, habits, environments and even lifestyle can have on dandruff. But one key factor is missing - the psychosocial impact. How does the mind affect your scalp and, more importantly, how does your scalp affect your mind?
                </p>
              </div>
              <div class="column">
                <figure class="sq item__inner">
                  <div class="aspect-ratio">     
                    <div class="item__asset-wrapper">  
                      <img alt="Free Dandruff Scalp" src="../assets/img/asset-9-1.png" class="howdecoded-covid-img">
                    </div>                   
                  </div>               
                </figure>  
              </div>
            </div>
            <div class="columns anime-section">
              <div class="column">
                 Small Animation goes here
              </div>
              <div class="column">
                  <p class="figure-intro">We launched the most comprehensive and in-depth study we’ve ever conducted to bridge the gap in this knowledge, looking into how dandruff can have a real influence on our lives, from not wanting to attend social gatherings to increased feelings of acceptance and lack of self-confidence. This is known as psychodermatology - the part of dermatology that considers both the mind and the skin together. 
                  </p>
              </div>
            </div>
            
            <div class="hef-items">
              <div class="columns ">
                <div class="column">
                  <figure class="mt item__inner">
                    <a class="aspect-ratio" href="/stress">
                      <div class="item__asset-wrapper">
                        <img alt="Free Dandruff Scalp" src="../assets/img/asset-10.png" class="item__picture--cover">
                      </div>                        
                    </a>
                    <div class="item__title">
                          <h3>How Head & Shoulders </h3>
                          <h2 class="stroke-txt">Decoded <span>Dandruff</span></h2>
                    </div>
                  </figure>
                </div>
                <div class="column">
                    <h1>Find out more as to how we've decoded dandruff</h1>
                    <figure class="mt item__inner">
                      <a class="aspect-ratio" href="/stress">
                        <div class="item__asset-wrapper">
                          <img alt="Free Dandruff Scalp" src="../assets/img/asset-11.png" class="item__picture--cover">
                        </div>                        
                      </a>
                      <div class="item__title">
                          <h2 class="stroke-txt">The True Weight <span>of the Flake</span></h2>
                      </div>                        
                    </figure>
                </div>
              </div>
            </div>
        </div>
    </section> 

    <section class="video-area">
        <div class="container is-fluid">
            <video poster="" autoplay="autoplay" class="inline-video loaded" loop="loop" muted="muted" playsinline="" data-object-fit="contain" 
              src="../assets/video.mp4"></video>
        </div>
    </section>
    <Footer/>
</main>
</template>

<script>
import HeaderDark from '../components/HeaderDark.vue'
import Footer from '../components/Footer.vue'

import { gsap } from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, CustomEase, SplitText, ExpoScaleEase, RoughEase, SlowMo);

export default {
  name: 'DandruffDecoded',
  components: {
    HeaderDark,    
    Footer
  },
  props: {
    msg: String
  },
  mounted() { 
     gsap.utils.toArray(".item__title").forEach((elem) => {
        gsap.timeline({
            scrollTrigger: {
            trigger: elem,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 3
            },
        })
        .from(elem, {opacity: 0, duration:1, ease:'power3.inOut'})
        });

    gsap.utils.toArray(".figure-intro").forEach((elem) => {
        gsap.timeline({
            scrollTrigger: {
            trigger: elem,
            start: 'top 90%',
            end: 'top 35%',
            scrub: 3
            },
        })
        .from(elem, {opacity: 0, duration:2, ease:'power3.inOut'})
        });

    gsap.utils.toArray(".mt").forEach((elem) => {
        gsap.timeline({
            scrollTrigger: {
            trigger: elem,
            start: 'top 80%',
            end: 'top 25%',
            scrub: 1
            },
        })
        .from(elem, {y:200, duration:1, ease:'none'})
        });

    gsap.utils.toArray(".sq").forEach((elem) => {
        gsap.timeline({
            scrollTrigger: {
            trigger: elem,
            start: 'top 90%',
            end: 'top 40%',
            scrub: 1
            },
        })
        .from(elem, {y:150, duration:1, ease:'none'})
        });

    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hero-section-dd { 
    header {
      nav {
        &.main-nav {
          ul {
            li {
              a {
                color:$mediumblue;
              }
            }
          }
        }
      }
    }
}
.dandruff-decoded-items {
  p {
    color:$textblue;
    font-size:18px;
    line-height:1.8;
    font-family:$primary-font;
    strong{
      font-family: $bold-font;
      color:$textblue;
    }
  }
  h1 {
    background:$gradientxtreversed;
     -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 4.3rem;
    text-transform: uppercase;
    line-height: 1;
    font-family:$black-font;
    margin-bottom:3rem;
  }
  .firstitems {
    align-items:center;
    justify-content: center;
    margin:3rem 0 7rem 0;
    p {
      max-width:80%;
      margin-top:4rem;
    }
  }
  .anime-section {
    align-items:center;
    justify-content: center;
    margin:3rem 0 7rem 0;    
    .figure-intro {
      width:100%;
    }    
  }
  .hef-items {
    .figure-intro {
      width:100%;
    }
  }
}

.video-area {
  margin:2rem 0 5rem;
  text-align:center;
  video {
    max-width:90%;
    margin:0 auto;
  }
}

</style>

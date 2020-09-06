<template>
<main>
    <section class="howdecoded hero-section" :style="{ backgroundImage: 'url(' + require('@/assets/img/howdecoded-hero.jpg') + ')' }">    
        <header>
            <HeaderDark/>    
        </header>
        <div class="container is-fluid hero-section-inner">
            <div class="columns">
                <div class="column">
                    <h2>How Head & Shoulders</h2>
                     <h1 id="split" class="split-text">Decoded <br>Dandruff</h1>
                </div>
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
    <section class="howdecoded-intro hef-items">
      <div class="container">
        <div class="columns">
          <div class="column">
            <figure class="mt item__inner">
              <div class="aspect-ratio">     
                <div class="item__asset-wrapper">                       
                    <img alt="Free Dandruff Scalp" src="../assets/img/clean-head.png">  
                </div>                   
              </div>               
            </figure>            
            </div>
          <div class="column" style="padding-left:5rem;">
            <p>The research study, of over <br><span>10,000 Consumers (Aged 13-65) in the US and UK</span> <br>was built and analysed in collaboration with leading psychologist, <strong>Dr. Kristina Gorbatenko-Roth</strong> from the University of Wisconsin-Stout, who has a special interest in psychodermatology, with further insights provided by <strong>Dr Alia Ahmed</strong>, consultant dermatologist from the dermatology clinic, Eudelo, and part of the psychodermatology team at the Royal Hospital of London.
            </p>
            <p>The survey was built using and accredited medical psychological questioning techniques which are recognised by global medical industry bodies to ensure reliability across different countries and consistency for future research in additional countries. 
            </p>
            <div class="howdeded-intro-demo">
              <img alt="Case Study 2" src="../assets/img/kristinagorbatenkoroth.png">
              <img alt="Case Study 1" src="../assets/img/expert.png">
            </div>

          </div>
        </div>
      </div>
    </section>
    <section class="testimonials">
      <div class="container">
        <img alt="Dr Alia Ahmed Quote" src="../assets/img/quotes.png"  class="quoteimg">
        <p id="split-testimonial" class="split-text">
          As a dermatologist I know that my patients are at higher risk of developing poor psychological health. These feelings can then impact their skin and it can turn into a vicious cycle.
        </p>
        <p id="split-testimonial" class="split-text">
          In Psychodermatology, I use a holistic approach to treat the skin condition and the psychological impact, as well as decoding how lifestyle factors are affecting the skin problem. This is ground-breaking research which is set to change the way we treat patients with dandruff, and hopefully lead to many people being able to live their lives to the full, without dandruff holding them back.”
        </p>
        <p class="testimonial-author">Dr. Alia Ahmed</p>
      </div>
    </section>

    <section class="howdecoded-covid hef-items">
      <div class="covid-headline">
        <h1>Covid19</h1>
      </div>
      <div class="container">
        <div class="columns">
          <div class="column" style="padding-right:3rem">
            <figure class="sq item__inner">
              <div class="aspect-ratio">     
                <div class="item__asset-wrapper">                       
                    <img alt="Dr Alia Ahmed" src="../assets/img/draliaahmed.png" class="howdecoded-covid-img">  
                </div>                   
              </div>               
            </figure>               
            <p>This research has been conducted in unprecedented times. A global pandemic that restricts ‘normal life’ behavior has reset the bar for what is considered “normal”. As this research ascertains the quality of life for those with dandruff, we in turn have to reassess the levels associated with “normal way of life”.
            </p>
            <p>
              To ensure the research and feedback is reflective of “the new normal” and in order to differentiate the impact of dandruff on quality of life versus the global pandemic, a general quality of life survey was conducted during the pandemic (end of May 2020) for comparison of results to pre-COVD quality of life survey results. As such, the levels of impact have been adjusted to be reflective of the current pandemic culture and way of life.
            </p>
          </div>
          <div class="column" style="margin-top:6rem;">
            <h2>The Impact <br>of Covid19</h2>
            <figure class="mt item__inner">
              <div class="aspect-ratio">     
                <div class="item__asset-wrapper">                       
                    <img alt="Free Dandruff Scalp" src="../assets/img/hns-couple.png"> 
                </div>                   
              </div>               
            </figure>                
          </div>
        </div>
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
  name: 'HowDecoded',
  components: {
    HeaderDark,    
    Footer
  },
  props: {
    msg: String
  },
  mounted() {
    gsap.utils.toArray("#split").forEach(function(elem) {
        const splitTimeline = gsap.timeline({scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            end: "bottom 10%",
            onToggle: self => gsap.to(elem, {opacity: self.isActive ? 1 : 0}),
            toggleActions: "restart none none none",
            }
        });

        const splitTitle = new SplitText(elem);
            splitTimeline.from(splitTitle.chars, {duration: 2.5, opacity: 0, y: 10, stagger: {amount: 1}, ease: "back.out(1)", overwrite: "auto"});
        });

        gsap.utils.toArray("#split-testimonial").forEach(function(elem) {
        const splitTimeline = gsap.timeline({scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            end: "bottom 10%",
            onToggle: self => gsap.to(elem, {opacity: self.isActive ? 1 : 0}),
            toggleActions: "restart none none none",
            }
        });

        const splitTitle = new SplitText(elem, {type:"words"});
            splitTimeline.from(splitTitle.words, {duration: 2.5, opacity: 0, y: 0, stagger: {amount: 1}, ease: "back.out(1)", overwrite: "auto"});
        });
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .howdecoded {
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
  .howdecoded-intro {
    margin:5rem 0;
    .columns {
      align-items:flex-start;
      p {
        color: $textblue;
        margin-bottom: 2rem;
        font-size: 19px;
        line-height: 1.9;
        span {
          font-size:1.4rem;
          font-weight:700;
          text-transform: uppercase;
          font-family: $black-font;
          background: $gradientxt;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        strong {
          color:$textblue;
          font-family: $black-font;
        }
      }
    }
    .howdeded-intro-demo {
      margin-top:5rem;
      display:flex;
      align-items:center;
      justify-content: flex-end;
      img {
        padding-left:2rem;
      }
    }
  }
  .howdecoded-covid {
    position: relative;
    .columns {
      figure {
        &.item__inner {
          margin-bottom:9rem;
        }        
      }
    }
    .howdecoded-covid-img {
      margin-bottom:7rem;
    }
    p {
      color: $textblue;
      margin-bottom: 2rem;
      font-size: 18px;
      line-height: 1.8;
    }
    h2 {
      font-family: $black-font;
      text-transform: uppercase;
      font-size: 4.5rem;
      margin-bottom: 7rem;
      margin-left: -10rem;
      line-height: 1.1;
      color:$darkblue;
      background: $gradientxt;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .covid-headline  {
    h1 {
      transform-origin: bottom right;
      position: absolute;
      top: 0;
      bottom: 0;
      height: 10rem;
      margin: auto;
      text-transform: uppercase;
      font-size: 27.5rem;
      transform: rotate(-90deg) translateX(23%);
      right: 20rem;
      z-index: 99;
      font-family:$black-font;
      -webkit-text-stroke: 2px $lightblue;
      -webkit-text-fill-color: transparent;
    }
  }
</style>

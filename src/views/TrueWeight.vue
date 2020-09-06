<template>
<main>
    <section class="hero-section" :style="{ backgroundImage: 'url(' + require('@/assets/img/trueweight-hero.png') + ')' }">    
        <header>
            <HeaderLight/>    
        </header>
        <div class="container is-fluid hero-section-inner">
            <div class="columns">
                <div class="column">
                    <h2>Head & Shoulders</h2>
                   <h1 id="split" class="split-text">The true weight <br>of the flake</h1>
                    <p>Dandruff flakes may seem small, but they have a mighty impact across four key areas
                    </p>
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
    <section class="true-weight-items hef-items">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <figure class="lt item__inner">
                        <a class="aspect-ratio" href="/stress">
                            <div class="item__asset-wrapper">
                                <img alt="Free Dandruff Scalp" src="../assets/img/stress-item.png" class="item__picture--cover">
                            </div>                        
                        </a>
                        <div class="item__title">
                            <h3>The True Weight of the Flake</h3>
                            <h2 class="stroke-txt">Anxiety & <span>Stress</span></h2>
                        </div>
                        </figure>
                        <div class="figure-intro">
                            The nemesis of Dandruff is having an unspoken impact on anxiety and stress levels, resulting in major impacts to a dandruff sufferer’s quality of life… 
                        </div>
                    
                    <figure class="sq item__inner">
                        <a class="aspect-ratio" href="/teens">     
                        <div class="item__asset-wrapper">                       
                            <img alt="Free Dandruff Scalp" src="../assets/img/teens-item.png" class="item__picture--cover">   
                        </div>                    
                            
                         </a>
                         <div class="item__title" ref="box">
                                <h3>The True Weight of the Flake</h3>
                                <h2 class="stroke-txt">Teens</h2>
                        </div>
                        </figure>
                        <div class="figure-intro" ref="boxi">
                            Depression, bullying and feeling vulnerable are feelings often associated with young adults. For the first time the impact of dandruff on these feelings in teens is revealed… 
                        </div>
                    
                </div>
                <div class="column">
                    <figure class="sq item__inner">
                        <a class="aspect-ratio" href="/stigma">
                        <div class="item__asset-wrapper">
                        <img alt="Free Dandruff Scalp" src="../assets/img/stigma-item.png" class="item__picture--cover">
                        </div>
                        
                        </a>
                        <div class="item__title">
                            <h3>The True Weight of the Flake</h3>
                            <h2 class="stroke-txt">Stigma</h2>
                        </div>
                        </figure>
                        <div class="figure-intro">
                            Feeling unclean, unattractive and not socially accepted is how dandruff sufferers feel every single day…
                        </div>
                    
                    <figure class="lt item__inner">
                        <a class="aspect-ratio" href="/help">
                        <div class="item__asset-wrapper">
                            <img alt="Free Dandruff Scalp" src="../assets/img/help-item.png" class="item__picture--cover">
                        </div>
                            
                        </a>
                        <div class="item__title" ref="box">
                            <h3>The True Weight of the Flake</h3>
                            <h2 class="stroke-txt">Help <span>Lessness</span></h2>
                        </div>
                        </figure>
                        <div class="figure-intro" ref="boxi">
                            Taking control of dandruff feels like an impossible task. From believing that it’s down to bad luck or genetics, sufferers are quick to cover the problem rather than take control head on
                        </div>
                    
                </div>
            </div>
        </div>
    </section>
    <Footer/>
</main>
</template>

<script>
import HeaderLight from '../components/HeaderLight.vue'
import Footer from '../components/Footer.vue'

import { gsap } from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, CustomEase, SplitText, ExpoScaleEase, RoughEase, SlowMo);


export default {
  name: 'TrueWeight',
  components: {
    HeaderLight,    
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

    gsap.utils.toArray(".lt").forEach((elem) => {
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
    
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    
</style>

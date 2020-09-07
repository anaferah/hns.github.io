<template>
<main class="stigma">
    <section class="hero-section" :style="{ backgroundImage: 'url(' + require('@/assets/img/help-hero.png') + ')' }">    
        <header>
            <HeaderLight/>    
        </header>
        <div class="container is-fluid hero-section-inner">
            <div class="columns">
                <div class="column">
                    <h2>The true weight of the flake</h2>
                    <h1 id="split" class="split-text">Stigma</h1>
                    <p>Knowing that people think you are unclean, unattractive and therefore not feeling socially accepted is how dandruff sufferers feel 
                        every single day…
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
    <section class="info-intro">
        <div class="container">
            <div class="columns">
                <div class="column is-7">
                    <div class="info-intro-item">
                        <div class="info-intro-item-group">                            
                            <img alt="Flaking it" src="../assets/img/teens-unseen.svg"  class="flakingit">     
                            <div class="info-intro-item-copy">
                                <h5 id="split" class="split-text">The Unseen Symptoms of Dandruff</h5>                     
                                <h4 class="gradient-text">Helpless<br> Useless<br> Unattractive</h4>
                            </div>
                        </div>
                    </div>
                    <div class="info-intro-item">
                        <div class="info-intro-item-group">                           
                            <img alt="Flaking it" src="../assets/img/teens-blocker.svg"  class="flakingit">
                           <div class="info-intro-item-copy">
                               <h4 class="gradient-text">Bullying and Victimization</h4>
                                <h5 id="split" class="split-text">how dandruff id the unwanted third person</h5>
                                <h4 class="gradient-text">in your relationship?</h4>
                                
                            </div>
                        </div>
                    </div>
                    <div class="info-intro-item bg-item" :style=" { backgroundImage: 'url(' + require('@/assets/img/teens-bg.png') + ')' }">
                        <h4 class="gradient-text">Name-calling, rumours and depression</h4>
                        <p>teen dandruff sufferers reveal <span>the true story</span> behind the feeling of the flakes
                        </p>
                    </div>
                </div>
                <div class="column is-5">
                    <div class="bluebg">
                        <h2 class="stroke-text">Flake Fojo</h2>
                        <h4>Fear of judgement from others <span>fuels anxiety for dandruff sufferers</span></h4>
                    </div>
                </div>
            </div>
            <div class="columns quotestroke">
                <div class="column">
                    <h2 class="stroke-text">"I am not confident because I have no friends"</h2>
                </div>
            </div>
            <div class="columns info-items">
                <div class="column">
                    <p><span class="largetxt">1 in 2 </span> teens say they experienced an itchy, sore or painful scalp and have therefor <span> Changed or worn different clothes</span> because of their scalp.
                    </p>
                </div>
                <div class="column">
                    <p>Teen sufferers are <span class="largetxt">TWICE</span> as likely to struggle with <span>PERCEPTIONS OF THEIR QUALITY OF LIFE, HAPPINESS AND SELF-CONFIDENCE</span> and are less able to manage stress levels and maintain positive attitudes.
                    </p>
                </div>
            </div>
            <div class="columns info-items four-col">
                <div class="column" style="margin-top:6rem;">
                    <p>Teens with dandruff experience a significantly higher frequency of bullying and victimization with them being teased, called names in a hurtful way or have felt left out of a group or ignored on purpose at least once a month.
                    </p>
                </div>
                <div class="column" style="margin-top:6rem;">
                    <img alt="Four Group" src="../assets/img/fourten.png">
                    <p><span class="largetxt">4 in 10</span> of these people were <span>LEFT OUT OF GROUPS</span> when they were a teen. </p>
                </div>
                <div class="column">
                    <img alt="Four Group" src="../assets/img/halfchat.png">
                    <p><span class="largetxt">HALF</span> (49%) of adult dandruff sufferers were <span>PICKED</span> ON when they were a teen</p>
                </div>
                <div class="column">
                    <img alt="Four Group" src="../assets/img/twothree.png">
                    <p><span class="largetxt">2/3</span> of adult sufferers believe that dandruff as a teen has led to a <span>LIFELONG IMPACT</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section class="testimonials inner-testimonials">
      <div class="container">
            <div class="expertarea">
                <img alt="Four Group" src="../assets/img/expert.png" class="expertimg">
            </div>
            <img alt="Dr Alia Ahmed Quote" src="../assets/img/quotes.png"  class="quoteimg">
            <p id="split-testimonial" class="split-text">
            One of the common outcomes of having dandruff is social anxiety, the fear of someone else noticing your scalp problem, or even worse, commenting on it. This can lead to feelings of stigmatisation, especially as there are so many common negative connotations associated with having dandruff. For example, the feeling of being unclean, unattractive, or like a contagion. People with dandruff will go to great lengths to disguise their diagnosis and may avoid physical /social interactions to reduce the chance of being ‘found out’. By increasing education about dandruff, why it happens and how it can be controlled, may help to remove some of the stigma associated with this very common scalp issue.
            </p>        
            <p class="testimonial-author">Dr. Alia Ahmed</p>
        </div>
        <div class="textright">
            <h3>Stigma</h3>
        </div>
    </section>

    <section class="info-footer">
        <div class="container">
            <div class="columns">
               <div class="column is-8 bluebg">
                    <h3>Don’t let FOJO’s hold you back! Dandruff is normal, so let Head & Shoulders powerful duo of leading psycho-dermatologists advice and the world’s number one shampoo help you deal with both the symptoms AND causes of dandruff for good – leaving you with one less thing 
                        on your mind.
                    </h3>
                </div>
                <div class="column">
                    <h2 class="stroke-text">"People were actively avoiding me, and were unwilling to work with me if it meant being too close to me as they found it disgusting"</h2>
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
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, CustomEase, DrawSVGPlugin, SplitText, ExpoScaleEase, RoughEase, SlowMo);

export default {
  name: 'Stigma',
  components: {
    HeaderLight,  
    Footer  
  },
  props: {
    msg: String
  },

mounted() { 

    gsap.utils.toArray(".cell").forEach((elem) => {
        gsap.timeline({
            scrollTrigger: {
            trigger: elem,
            start: 'top center',
            end: "bottom center",
            scrub: true,
            // onToggle: self => gsap.to(elem, {opacity: self.isActive ? 1 : 0}),
            toggleActions: "play none none none",
            markers:true
            },            
        })
        .from(".figure span", {duration: 2,  ease:"none",  innerHTML:"0", roundProps:"innerHTML", }, "<");
        });

       

    gsap.utils.toArray("#progressbar").forEach((elem) => {
        gsap.timeline({
            scrollTrigger: {
            trigger: elem,
            start: 'top 80%',
            end: 'top 70%',
            scrub: 3,
            // onToggle: self => gsap.to(elem, {opacity: self.isActive ? 1 : 0}),
            toggleActions: "restart none none none",
            },
             snap: {
                snapTo: "labels", // snap to the closest label in the timeline
                duration: 13, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                delay: 12, // wait 0.2 seconds from the last scroll event before doing the snapping
                ease: "power2.inOut" // the ease of the snap animation ("power3" by default)
            }
        })
        .to(elem, 2, {value: 50, ease: "power2.easeInOut"})
        });
      
       

        
      gsap.utils.toArray(".flakingit").forEach((elem) => {
        gsap.timeline({
            scrollTrigger: {
            trigger: elem,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 3,
            // onToggle: self => gsap.to(elem, {opacity: self.isActive ? 1 : 0}),
            toggleActions: "restart none none none",
            },
            snap: {
                snapTo: "labels", // snap to the closest label in the timeline
                duration: 13, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                delay: 2, // wait 0.2 seconds from the last scroll event before doing the snapping
                ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
            }         
        })
        .from(elem, {scale: 0.1, rotation:45, opacity: 0, autoAlpha:0})
        });


       gsap.utils.toArray(".topsvg").forEach((elem) => {
        gsap.timeline({
            scrollTrigger: {
            trigger: elem,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 3,
            // onToggle: self => gsap.to(elem, {opacity: self.isActive ? 1 : 0}),
            toggleActions: "restart none none none",
            },
             snap: {
                snapTo: "labels", // snap to the closest label in the timeline
                duration: 13, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                delay: 12, // wait 0.2 seconds from the last scroll event before doing the snapping
                ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
            }
        })
        .from(elem, {scale: 0.3, rotation:365, opacity: 0})
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
            splitTimeline.from(splitTitle.chars, {duration: 2.5, opacity: 0, y: 0, stagger: {amount: 1}, ease: "back.out(1)", overwrite: "auto"});
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
    
    // }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
.stigma {
     .hero-section {
        background-position: right center;
        .hero-section-inner {
            p {
                max-width:40%;
            }
        }
    }
    .info-intro {
        .info-intro-item {
            // .info-intro-item-group {
            //     display:flex;
            //     align-items:center;
            //     justify-content:center;
            //     .info-intro-item-copy {

            //     }
            // }    
        }
        .bluebg {
            padding:3rem 5rem;
            h2 {
                max-width: 100%;
                margin-bottom: 2rem;
            }
            h4 {
                font-size:2.5rem;
                line-height: 1;
                width:100%;
            }
        }  
    }
}

   
</style>

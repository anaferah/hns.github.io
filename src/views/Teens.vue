<template>
<main class="teens">
    <section class="hero-section" :style="{ backgroundImage: 'url(' + require('@/assets/img/teens-hero.png') + ')' }">    
        <header>
            <HeaderLight/>    
        </header>
        <div class="container is-fluid hero-section-inner">
            <div class="columns">
                <div class="column">
                    <h2>THE TRUE WEIGHT OF the FLAKE</h2>
                    <h1 id="split" class="split-text">Teens</h1>
                    <p>Depression, bullying and feeling vulnerable are feelings often associated with young adults. For the first time the impact of dandruff on these feelings in teens is revealed…
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
                            <img alt="Flaking it" src="../assets/img/teens-fullforcen.svg"  class="topsvg">
                            <div class="info-intro-item-copy">
                                <h5 id="split" class="split-text">The full force of Dandruff Flakes</h5>
                                <h4 class="gradient-text">Difficulty of Dandruff as a teen carried through life</h4>
                            </div>
                        </div>
                    </div>
                    <div class="info-intro-item">
                        <div class="info-intro-item-group">                           
                            <img alt="Flaking it" src="../assets/img/teens-danger.svg"  class="topsvg">
                           <div class="info-intro-item-copy">
                                <h5 id="split" class="split-text">The Danger of Dandruff</h5>
                                <h4 class="gradient-text">Bullying and Victimization</h4>
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
                        <h2 class="stroke-text">Flaking it</h2>
                        <img alt="Flaking it" src="../assets/img/flaking.png"  class="flakingit">
                        <h4>Teens use outfit changes <span>and</span> clothes <span>to disguise dandruff</span> </h4>
                    </div>
                </div>
            </div>
            <div class="columns quotestroke">
                <div class="column">
                    <h2 class="stroke-text split-text" id="split">"I am not confident because I have no friends"</h2>
                </div>
            </div>
            <div class="columns info-items">
                <div class="column">
                    <p><span class="largetxt">1 in 2 </span> teens say they experienced an itchy, sore or painful scalp and have therefor <span> Changed or worn different clothes</span> because of their scalp.
                    </p>
                </div>
                <div class="column is-1 icon-middle"><img alt="Four Group" src="../assets/img/teens-change.svg"></div>
                <div class="column">
                    <p>Teen sufferers are <span class="largetxt">TWICE</span> as likely to struggle with <span>PERCEPTIONS OF THEIR QUALITY OF LIFE, HAPPINESS AND SELF-CONFIDENCE</span> and are less able to manage stress levels and maintain positive attitudes.
                    </p>
                </div>
            </div>
            <div class="columns info-items four-col">
                <div class="column" style="margin-top:6rem;">
                    <p class="sm-txt">Teens with dandruff experience a significantly higher frequency of bullying and victimization with them being teased, called names in a hurtful way or have felt left out of a group or ignored on purpose at least once a month.
                    </p>
                </div>
                <div class="column" style="margin-top:6rem;">
                    <div class="img-group-anim">
                        <img alt="Four Group" src="../assets/img/fourten-one.png" class="four-col-img">
                        <img alt="Four Group" src="../assets/img/fourten-two.png" class="four-col-img-two">
                        <img alt="Four Group" src="../assets/img/fourten-three.png" class="four-col-img-three">
                        <img alt="Four Group" src="../assets/img/fourten-four.png" class="four-col-img-four">
                    </div>
                    <p><span class="largetxt">4 in 10</span> of these people were <span>LEFT OUT OF GROUPS</span> when they were a teen. </p>
                </div>
                <div class="column">
                    <img alt="Four Group" src="../assets/img/halfchat.png" class="four-col-img-two">
                    <p><span class="largetxt">HALF</span> (49%) of adult dandruff sufferers were <span>PICKED</span> ON when they were a teen</p>
                </div>
                <div class="column">
                    <img alt="Four Group" src="../assets/img/twothree.png" class="four-col-img-two">
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
            Being a teenager can be pretty tough at times, let alone when you add a scalp condition on top. What’s tougher is that teens with dandruff are in danger of having their problem going unnoticed. So many skin problems occur in teenage years and are put down to ‘hormonal’ changes, and dandruff is one of them. To be told they will ‘grow out if it’ is usually not helpful as they are still in the vulnerable situation of dealing with a visible difference and may be subject to negativity from their peers because of it. For some dandruff is just one part of the problem, they may also have started to have acne, psoriasis, or eczema, and dandruff becomes an extra unwanted burden. Teens are less likely to reveal their feelings in fear of their problem being trivialised, which it often is. This leads them to enter a vicious circle of scalp symptoms, poor psychological health, leading to increased stress and aggravation of their condition. A new targeted focus on this particular patient group may be able to reduce some of the negative outcomes associated with having dandruff.
            </p>        
            <p class="testimonial-author">Dr. Alia Ahmed</p>
        </div>
        <div class="textright">
            <h3>Teens</h3>
        </div>
    </section>

    <section class="info-footer">
        <div class="container">
            <div class="columns">
               <div class="column is-7 bluebg">
                    <h3>When the world is your oyster, don’t let dandruff stop you. Head & Shoulders wants to help you to be 100% flake free and lift the weight off your shoulders, so you can live your best life with confidence.  
                    </h3>
                </div>
                <div class="column">
                    <h2 class="stroke-text">"Being picked on for most of my teenage years made me lack confidence in myself and on my worth a human being"</h2>
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
  name: 'Teens',
  components: {
    HeaderLight,    
    Footer
  },
  props: {
    msg: String
  },
  mounted() { 
      
      gsap.utils.toArray(".flakingit").forEach((elem) => {
        gsap.timeline({
            scrollTrigger: {
            trigger: elem,
            start: 'top 80%',
            end: 'top 55%',
            scrub: 3,
            // onToggle: self => gsap.to(elem, {opacity: self.isActive ? 1 : 0}),
            toggleActions: "restart none none none",
            snap: {
                snapTo: "labels", // snap to the closest label in the timeline
                duration: 13, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                delay: 2, // wait 0.2 seconds from the last scroll event before doing the snapping
                ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
            }
            },
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

    gsap.utils.toArray(".four-col-img").forEach((elem) => {
        gsap.timeline({
            scrollTrigger: {
            trigger: elem,
            start: 'top 80%',
            end: 'top 35%',
            scrub: 3
            },
        })
        .from(elem, 2, {opacity:0, delay:2, duration:2, ease:'power3.inOut'})
        });

        gsap.utils.toArray(".four-col-img-three, .four-col-img-four").forEach((elem) => {
        gsap.timeline({
            scrollTrigger: {
            trigger: elem,
            start: 'top 80%',
            end: 'top 35%',
            scrub: 3,
            },
        })
        .from(elem, 4, {opacity:0, delay:8, duration:4, ease:'power3.inOut'})
        });

        gsap.utils.toArray(".four-col-img-two").forEach((elem) => {
            gsap.timeline({
                scrollTrigger: {
                trigger: elem,
                start: 'top 80%',
                end: 'top 35%',
                scrub: 3
                },
            })
        .from(elem, 12, {opacity:0, delay:12, duration:12, ease:'power3.inOut'})
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
    
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">    
    .hero-section {
        .hero-section-inner  {
            p {
                max-width:40%;
            }
        }        
    }
    .teens {
        .hero-section {
             nav {
                &.main-nav {
                    ul {               
                        li {                   
                            a {
                                color:$textblue;                       
                            }
                        }
                    }
                }    
            }
        }
    }
    

</style>

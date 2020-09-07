<template>
<main class="stress">
    <section class="hero-section" :style="{ backgroundImage: 'url(' + require('@/assets/img/anxiety-hero.png') + ')' }">    
        <header>
            <HeaderLight/>    
        </header>
        <div class="container is-fluid hero-section-inner">
            <div class="columns">
                <div class="column">
                    <h2>The true weight of the flake</h2>
                    <h1 id="split" class="split-text">Anxiety & Stress</h1>
                    <p>The nemesis of dandruff, along with other skin conditons, is having an unspoken impact on anxiety and stress levels, resulting in major impacts to a sufferer’s quality of life…
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
                            <img alt="Flaking it" src="../assets/img/teens-dandruff.svg"  class="flakingit">                            
                            <div class="info-intro-item-copy">
                                <h5 id="split" class="split-text">DANDRUFF INDUCED</h5>
                                <h4 class="gradient-text">PANIC ATTACKS</h4>
                            </div>
                        </div>
                    </div>
                    <div class="info-intro-item">
                        <div class="info-intro-item-group">                           
                            <img alt="Flaking it" src="../assets/img/teens-active.svg"  class="flakingit">
                           <div class="info-intro-item-copy">
                                <h5 id="split" class="split-text">THE FEAR OF THE FLAKES STOPS DANDRUFF SUFFERERS </h5>
                                <h4 class="gradient-text">FROM BEING ACTIVE</h4>
                            </div>
                        </div>
                    </div>
                    <div class="quotestroke">
                        <h2 class="stroke-text split-text" id="split">"I always have to keep checking for flakes it drives me up the walls with anxiety"</h2>
                    </div>
                   
                </div>
                <div class="column is-5">
                    <div class="bluebg">
                        <h2 class="stroke-text">Flaking out</h2>
                        <div class="bluebg-content">
                            <h4><span>Dandruff sufferers socially distance to</span> hide their feelings and try to take back control</h4>
                            <img alt="Flaking it" src="../assets/img/flaking3.svg"  class="flakingit">
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="testimonials inner-testimonials">
        <div class="container">
            <div class="expertarea">
                <img alt="Four Group" src="../assets/img/kristinagorbatenkoroth.png" class="expertimg">
            </div>
            <img alt="Dr Alia Ahmed Quote" src="../assets/img/quotes.png"  class="quoteimg">
            <p id="split-testimonial" class="split-text">
                We’ve known for a long time that dandruff is a complicated issue for those who suffer from it, and now we can really see that its impacts are more widespread than we originally thought. And although the stressors of anxiety and other mental health issues are widely researched, it is the first time the link between skin diseases, and people’s mental wellbeing have been looked at together, so we are looking forward to educating many more people on this subject.”
            </p>        
            <p class="testimonial-author">Dr. Kristina Gorbatenko-Roth</p>
        </div>
        <div class="textright">
            <h3>Anxiety</h3>
        </div>
    </section>

    <section class="info-intro">
        <div class="container">
            <div class="columns info-items">                
                 <div class="column ">
                    <p><span class="cell figure"><span class="largetxt">50</span></span>
                    <span class="largetxt">% <progress id="progressbar"  value="0" max="100"></progress> <br></span>
                                  
                    of severe and moderate dandruff sufferers strongly/agree that <span> DANDRUFF GETS WORSE WHEN THEY ARE STRESSED</span> 
                    </p>
                    <br><br>
                    <div class="info-items-right">
                        <div class="info-items-right-content">
                            <p><span class="largetxt">1 in 2 </span> of dandruff sufferers get sudden  <span> FEELINGS OF PANIC.</span>
                            </p>
                        </div>
                        <img alt="Arrow Up" src="../assets/img/group3.png" >
                    </div>
                </div>
               
                <div class="column is-7 info-intro-item bg-item" :style=" { backgroundImage: 'url(' + require('@/assets/img/anxiety-bg.png') + ')' }">
                    <img alt="Arrow Up" src="../assets/img/arrow-circle.svg" >
                    <h4 class="gradient-text">The vicious circle</h4>
                    <p>Breakthrough study reveals the recurring <span>cycle of stress and dandruff</span>
                    </p>
                </div>
            </div>
           
            <div class="columns info-items">
                <div class="column info-items-left">
                    <img alt="Arrow Up" src="../assets/img/arrow-up-icon.svg" >
                    <div class="info-items-left-content">
                    <p>
                        <span class="cell figure">
                        <span class="largetxt">50
                        </span>
                        </span>
                        <span class="largetxt">%</span>                        
                        <br>
                        of people feel restless that they have to be on the move 
                    </p> 
                    </div>
                </div>
                <div class="column"> 
                    <p><span class="largetxt">3/4 </span> of sufferers worry <span> people stare at their skin disease</span> 
                    </p>
                </div>
                <div class="column"> </div>
            </div>
            <div class="columns info-items">
                <div class="column">
                    <p><span class="largetxt"> 6 in </span><span class="cell figure"><span class="largetxt"> 10</span></span> <img alt="Six in Ten" src="../assets/img/sixten2.png" class="smimg">
                    </p>
                    <p>of these people think that others find it<span class="largetxt"> distasteful to touch them</span> due to their skin issue.
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
                Sometimes it’s forgotten that the scalp is an organ, and it’s one that is extremely responsive to stress. Once the stress axis is activated the effects can be seen in the scalp (e.g. redness, flaking, itching) and this can exacerbate existing dandruff. The impact of flakes then further stimulates the stress response and the cycle continues. This research proves that stress and anxiety management have a role to play in dandruff treatment and management, which is rarely implemented.”
            </p>        
            <p class="testimonial-author">Dr. Alia Ahmed</p>
        </div>
        <div class="textright">
            <h3>Anxiety</h3>
        </div>
    </section>

    <section class="info-footer">
        <div class="container">
            <div class="columns">
                 <div class="column is-7 bluebg">
                    <h3>Head & Shoulders truly understands that it is hard to break the stress cycle and shake the weight of the flakes of stress induced dandruff. 
                    </h3>
                    <br>
                    <h3>So by tackling the root cause of dandruff paired with taking some expert advice from our panel of leading independent experts, you can set your head free.
                    </h3>
                </div>
                <div class="column">
                    <h2 class="stroke-text">"Led to me suffering depression and anxiety"</h2>
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
  name: 'Stress',
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
<style lang="scss">
.stress {    
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

    .hero-section {
        background-position: left center;
        .hero-section-inner {
            p {
                max-width:40%;
            }
        }        
    }
    .info-footer {
        .columns {
            align-items: flex-start;
        }
        h2 {
            &.stroke-text {
                font-size:3.8rem;
            }
        }
    }
    .info-intro {
        .info-intro-item-group {
            h4 {
                font-size:2.3rem;
            }
            h5 {
                font-size:1.9rem;
            }
        }
        .bluebg {
            padding: 2rem 1.5rem;
            h4 {
                text-transform:none;
                font-size:2.5rem;
                span {
                    text-transform:none;
                }
            }
            h2 {
                &.stroke-text {
                    top: 10%;
                    font-size: 4.5rem;
                    max-width: 100%;
                    position: absolute;
                    transform-origin: top left;
                    transform: rotate(-90deg) translateX(-100%);
                }
            }
            .bluebg-content {
                padding-left:6rem;
                img {
                    margin-top:1rem;
                }
            }
        }
        .bg-item {
            position:relative;
            img {
                right: 60%;
                top: 3%;
                position: absolute;
                max-height: 200px;
                left: 0;
            }
            h4 {
                margin: 40px;
                max-width: 100%;
            }
            p {
                margin-top: 130px;
            }
        }
    }    
    .quotestroke {
        max-width: 90%;
    }

    .smimg {
        margin-left: 1.5rem;
        max-width: 85%;
    }

    .info-items {
        margin:2rem 0;
        .info-items-left {
            display: flex;
            align-items: center;
            justify-content: space-between;
            img {
                margin-right:1rem;
            }
        }
        .info-items-right {
            display: flex;
            align-items: center;
            justify-content: space-between;
            img {
               
            }
        }
    }

</style>

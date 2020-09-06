import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// gsap.fromTo(".item__title", {autoAlpha: 0}, {autoAlpha: 1, duration: 5});
gsap.from(".item__title", { opacity: 0, duration: 7});
import { gsap } from 'gsap';


document.addEventListener("DOMContentLoaded", () => {
    gsap.timeline({repeat: -1, repeatDelay: 1})
        .set(".line-w", {transformOrigin: "0% 50%"})
        .to(".line-w", {xPercent: -100, ease: "expo.inOut", duration: 2, stagger: -0.012})
})
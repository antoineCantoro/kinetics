import { gsap } from 'gsap';


document.addEventListener("DOMContentLoaded", () => {
    console.log("ready");

    gsap.timeline({repeat: -1, repeatDelay: 1})
        // .set(".title", {yPercent: -50})
        .to(".title", {xPercent: 150, ease: "expo.inOut", delay: 1, duration: 2})
        .to(".overlay", {scaleX: 0, transformOrigin: "center right", ease: "expo.inOut", duration: 2, delay: 0.1}, "<")
        .set(".overlay", {transformOrigin: "center left", left: 0, right: "unset"})
        .set(".title", {xPercent: -150})
        .to(".overlay", {scaleX: 1, ease: "expo.inOut", delay: 1, duration: 2})
        .to(".title", {xPercent: 0, ease: "expo.inOut", duration: 2, delay: 0.1}, "<")
})
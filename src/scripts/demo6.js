import { gsap } from 'gsap';


document.addEventListener("DOMContentLoaded", () => {
    gsap.timeline({repeat: -1, repeatDelay: 1})
        .set(".wrapper", {scale: 3, rotate: 45})
        .to(document.querySelector(".line:nth-child(5) .word-wrapper:nth-child(5) span"), {yPercent: -100, duration: 2, ease: "expo.inOut"})
        .to(".wrapper", {scale: 1, rotate: 0, delay: .5, duration: 2, ease: "expo.inOut"})
        // .to(".word-wrapper span", {yPercent: -100, delay: 1, duration: 2, stagger: 0.02, ease: "expo.inOut"})
        .to(".word-wrapper span", {yPercent: -100, delay: 0.3, duration: 1, stagger: {
            grid: [9, 11],
            from: "center",
            amount: 0.5
          }, ease: "expo.inOut"}, "<")
        // .to(".word-wrapper span", {yPercent: -200, duration: 1, delay: 1, ease: "expo.out", stagger: {
        //     // from: "random",
        //     grid: [9, 11],
        //     from: "center",
        //     amount: 0.2
        // }})
        .to(".word-wrapper span", {yPercent: -200, duration: 1, delay: 1, ease: "expo.out", stagger: 0.01})


        
})
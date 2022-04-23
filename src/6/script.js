import { gsap } from 'gsap';


const animationOne = () => {
  gsap.timeline({repeat: -1, repeatDelay: 1})
  .set(".wrapper", {scale: 2, rotate: 45})
  .to(document.querySelector(".line:nth-child(6) .word-wrapper:nth-child(5) span"), {yPercent: -100, duration: 2, ease: "expo.inOut"})
  .to(".wrapper", {scale: 1, rotate: 0, delay: .5, duration: 2, ease: "expo.inOut"})
  //  ORIGINAL  //
  // .to(".word-wrapper span", {yPercent: -100, delay: 0.3, duration: 1, stagger: {
  //     grid: [9, 11],
  //     // from: "center",
  //     from: "random",
  //     amount: 0.5
  //   }, ease: "expo.inOut"}, "<")
  .to(".word-wrapper span", {yPercent: -100, delay: 0.1, duration: 2, stagger: {
      grid: [9, 11],
      from: "center",
      // from: "random",
      amount: 0.025
    }, ease: "expo.inOut"}, "<")
  // .to(".word-wrapper span", {yPercent: -200, duration: 1, delay: 1, ease: "expo.out", stagger: 0.01})
  .to(".word-wrapper span", {yPercent: -200, duration: 2, delay: 1, ease: "expo.inOut", stagger: 0.0025})
}


const animationTwo = () => {
  gsap.timeline({repeat: -1})
  .set(".wrapper", {scale: 2, rotate: 45})
  .to(document.querySelector(".line:nth-child(6) .word-wrapper:nth-child(5) span"), {yPercent: -100, duration: 2, ease: "expo.inOut"})
  .to(".wrapper", {scale: 1, rotate: 0, delay: .5, duration: 3, ease: "expo.inOut"})
  .to(".word-wrapper span", {yPercent: -100, delay: 0.5, duration: 2, stagger: {
      grid: [9, 11],
      from: "center",
      amount: 0.025
    }, ease: "expo.inOut"}, "<")
  .to(".word-wrapper span", {yPercent: -200, duration: 2, delay: 0.5, ease: "expo.inOut", stagger: 0.0025})
}

document.addEventListener("DOMContentLoaded", () => {
  animationTwo()
})
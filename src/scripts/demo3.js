import { gsap } from 'gsap';



async function generateClones(el, qty) {
    for(let i = 0; i < qty; i++) {
        const alias = el.cloneNode(true);
        wrapperEl.appendChild(alias)
    }

    await createTimeline();
}

function createTimeline() {

    const aeros = document.querySelectorAll(".aero");
    const bases = document.querySelectorAll(".base");


    // V1
    // let tl = gsap.timeline({repeat: -1, repeatDelay: 1})
    // tl.fromTo(".aero", {yPercent: 0, scaleX: 1.1}, {yPercent: -100, scaleX: 1, ease: "expo.out", duration: 1, stagger: -0.05, onComplete: () => {
    // tl.to(".aero", {yPercent: -200, scaleX: 0.9, ease: "expo.out", delay: 1, duration: 1, stagger: -0.05})


    let tl = gsap.timeline({repeat: -1, repeatDelay: 1})
        tl.fromTo(".aero", {yPercent: 0, scaleX: 1.1}, {yPercent: -100, scaleX: 1, ease: "expo.out", duration: 1, stagger: -0.05, onComplete: () => {
            bases.forEach((item, i) => {
                gsap.to(item, {yPercent: i * -100 + 200, ease: "expo.out", duration: 1.5 })
                // console.log(i * -100 + 200);
            })
        }})
        tl.to(".base", {rotate: 360, stagger: -0.05, ease: "expo.in", delay: 1.5, duration: 2, onComplete: () => {
            bases.forEach((item) => {
                item.querySelector("span").innerHTML = "genius"
                gsap.to(item, {yPercent: 0, ease: "expo.out", duration: 1.5 })
                // console.log(i * -100 + 200);
            })
        }})
        // tl.to(".base", {scale: 0, stagger: -0.05, ease: "expo.in", duration: 2, onComplete: () => {
        //     bases.forEach((item) => {
        //         gsap.to(item, {scale: 1, ease: "expo.out", duration: 1.5, stagger: -0.1 })
        //         // console.log(i * -100 + 200);
        //     })
        // }}, "<")
        // tl.to(".base", {yPercent: 0, ease: "expo.out", delay: 1, duration: 1, stagger: -0.05})
        tl.to(".aero", {yPercent: -200, scaleX: 0.9, ease: "expo.out", delay: 1, duration: 1, stagger: -0.05, onComplete: () => {
            bases.forEach((item) => {
                item.querySelector("span").innerHTML = "UNSTOPPABLE"
            })
        }})

}


const baseEl = document.querySelector(".base");
const wrapperEl = document.querySelector(".wrapper");

generateClones(baseEl, 4)
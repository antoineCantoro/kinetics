import { gsap } from 'gsap';
import globalEvents from './eventEmitter';

export default class Demo3 {
    constructor() {
        this.DOM = {}
        this.RGB = [255, 255, 255]


        this.initDemo3()
    }

    initDemo3() {
        this.DOM.container = document.querySelector(".demo3-wrapper")
        this.DOM.baseEl = document.querySelector(".demo3-wrapper .base");
        this.DOM.wrapperEl = document.querySelector(".demo3-wrapper .wrapper");

        this.generateClones(this.DOM.baseEl, 4)

        this.addEventListeners();  
    }

    createTimeline() {
        const bases = document.querySelectorAll(".demo3-wrapper .base");


        this.demo3Timeline = gsap.timeline({repeat: -1, paused: true})
        this.demo3Timeline.fromTo(".aero", {yPercent: -100, scaleX: 1.1}, {yPercent: 0, scaleX: 1, ease: "expo.out", duration: 1, stagger: -0.05, onComplete: () => {
            bases.forEach((item, i) => {
                gsap.to(item, {yPercent: i * -100 + 200, ease: "expo.out", duration: 1.5 })
            })
        }})
        this.demo3Timeline.to(".base", {rotate: 360, stagger: -0.05, ease: "expo.in", delay: 1.5, duration: 2, onComplete: () => {
            bases.forEach((item) => {
                item.querySelector("span").innerHTML = "genius"
                gsap.to(item, {yPercent: 0, ease: "expo.out", duration: 1.5 })
            })
        }})
        this.demo3Timeline.to(".aero", {yPercent: -100, scaleX: 0.9, ease: "expo.out", delay: 1, duration: 1, stagger: -0.05, onComplete: () => {
            bases.forEach((item) => {
                item.querySelector("span").innerHTML = "UNSTOPPABLE"
            })
        }})

    }

    async generateClones(el, qty) {
        for(let i = 0; i < qty; i++) {
            const alias = el.cloneNode(true);
            this.DOM.wrapperEl.appendChild(alias)
        }

        await this.createTimeline();
    }

    hideDemo() {
        document.body.classList.remove("demo3")
        document.querySelector(".demo3-wrapper").classList.remove("active")
        this.demo3Timeline.pause()
    }

    showDemo() {
        document.body.classList.add("demo3")
        document.body.classList.add("active")
        document.querySelector(".demo3-wrapper").classList.add("active")
        this.demo3Timeline.play()
    }


    potard1(value) {
        value = Math.round(value * 255 / 127)
        console.log(value);
        this.RGB[0] = value;
        this.setColor();
    }
    potard2(value) {
        value = Math.round(value * 255 / 127)
        console.log(value);
        this.RGB[1] = value;
        this.setColor();
    }
    potard3(value) {
        value = Math.round(value * 255 / 127)
        console.log(value);
        this.RGB[2] = value;
        this.setColor();
    }

    setColor() {
        this.DOM.container.style.color = `rgb(${this.RGB[0]}, ${this.RGB[1]}, ${this.RGB[2]})`
    }

    addEventListeners() {
        globalEvents.on("hide-demos", ()=> {
            this.hideDemo();
        })

        globalEvents.on(`show-demo3`, () => {
            this.showDemo();
        })

        globalEvents.on("demo3-potard1", (e) => {
            // console.log();
            this.potard1(e.detail.value)
        })
        globalEvents.on("demo3-potard2", (e) => {
            // console.log();
            this.potard2(e.detail.value)
        })
        globalEvents.on("demo3-potard3", (e) => {
            // console.log();
            this.potard3(e.detail.value)
        })
    }
}
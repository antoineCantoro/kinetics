import { gsap } from 'gsap';

let charsCount = null;
const lines = 17;
const charsPerLine = 30;



document.addEventListener("DOMContentLoaded", () => {
    
    const wrappers = document.querySelectorAll(".wrapper")

    wrappers.forEach(wrapper => {
        wrapper.querySelectorAll("div").forEach(div => {
          
          // Increment chars counter
          charsCount += div.innerHTML.length;

          const text = div.innerHTML;

          let textArray = text.split("")
          // console.log(textArray);
          
          div.innerHTML = "";

          for (let i = 0; i < textArray.length; i++) {
            const parentNode = document.createElement("span")
            const node = document.createElement("span")
            node.innerHTML = textArray[i]
            node.classList.add("chars")
            // console.log(node);
            parentNode.appendChild(node)
            div.appendChild(parentNode)
          }
        })
    })

    // gsap.timeline({repeat: -1})
    //     .to(".chars", {opacity: 0, duration: 0.2, ease: "power4.out", stagger: {
    //       grid: [lines, charsPerLine],
    //       from: "center",
    //       amount: 0.25,
          
    //     }})
    //     .to(".chars", {opacity: 1, delay: 0.1, duration: 0.2, ease: "expo.inOut", stagger: {
    //       grid: [lines, charsPerLine],
    //       from: "center",
    //       amount: 0.25,
    //       onStart: function() {
    //         this.targets()[0].classList.toggle("red")
    //       }
    //     }}, "<")
    
    
    gsap.timeline({repeat: -1})
        .to(".chars", {autoAlpha: 0, duration: 0.2, ease: "power4.out", stagger: {
          grid: [lines, charsPerLine],
          from: "center",
          amount: 2,
          
        }})
        .to(".chars", {autoAlpha: 1, delay: 0.1, duration: 1, ease: "expo.inOut", stagger: {
          grid: [lines, charsPerLine],
          from: "center",
          amount: 2,
          onStart: function() {
            this.targets()[0].classList.toggle("red")
          }
        }}, "<")

    // document.querySelectorAll(".chars").forEach((item) => {
    //   setInterval(() => {
    //     item.classList.toggle("red")
    //   }, 1000)
    // })

})




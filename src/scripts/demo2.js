import { gsap } from 'gsap';

const initialText = document.querySelector(".base")
const wrapper = document.querySelector(".wrapper")

async function generateNodes (qty) {
    
    for (let i = 0; i < qty; i++) {
        const node = document.createElement("span")
        node.innerHTML = initialText.innerHTML;
        node.style.zIndex = -1 * i;
        node.classList.add("node")
        wrapper.appendChild(node)
        // console.log(node);
    }

    await createTimeline();
}

generateNodes(20);

function createTimeline() {
    let tl = gsap.timeline({repeat: -1})
    tl.to(".node", {yPercent: 200, ease: "expo.in", duration: 2, stagger: 0.1})
}
import { gsap } from 'gsap';
import { lerp } from '../scripts/utils'

const cloneCount = 80;
const baseEl = document.querySelector(".base")
const cloneWrapperEl = document.querySelector(".clone-wrapper")


const mousePosition = {
  x: null,
  y: null
}

const cloneArray = []

// const mousePosition = {
//   x: null,
//   y: null
// }



const createClones = (count) => {

  const baseTextContent = baseEl.innerHTML;
  
  for (let i = 0; i < count; i++){
    // console.log(i);
    
    const node = document.createElement("div")
    node.innerHTML = baseTextContent

    node.classList.add("clone")
    node.style.zIndex = -1 * i;
    node.style.setProperty('--index', i);

    cloneWrapperEl.appendChild(node)
    cloneArray.push(node)

  }

  // console.log(cloneArray);
}

const windowSizes = {
  width: null,
  height: null
}


document.addEventListener("DOMContentLoaded", () => {

  windowSizes.width = window.innerWidth
  windowSizes.height = window.innerHeight
  
  console.log(windowSizes);
    
  createClones(cloneCount)

  document.addEventListener("mousemove", (e) => {
    mousePosition.x = e.clientX
    mousePosition.y = e.clientY

    // console.log([mousePosition.x, mousePosition.y]);

    const centerX = (e.clientX * 100 / windowSizes.width) - 50
    const centerY = (e.clientY * 100 / windowSizes.height) - 50

    // gsap.to(cloneArray, {yPercent: centerY * 10, xPercent: centerX * 2, stagger: 0.02})
    gsap.to(cloneArray, {y: e.clientY - windowSizes.height / 2 , xPercent: centerX * 2, stagger: 0.02})
    // gsap.to(cloneArray, {y: e.clientY - windowSizes.height / 2 , x: e.clientX - windowSizes.width / 2, stagger: 0.02})
  })

})




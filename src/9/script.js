import { gsap } from 'gsap';
import { lerp } from '../scripts/utils'

const cloneCount = 80;
const baseEl = document.querySelector(".base")

const cloneWrapperEl = document.querySelector(".clone-wrapper")
const cloneArray = []
const mousePosition = {
  x: null,
  y: null
}



const createClones = (count) => {

  const baseTextContent = baseEl.innerHTML;
  
  for (let i = 0; i < count; i++){
    const node = document.createElement("div")
    node.innerHTML = baseTextContent

    node.classList.add("clone")
    node.style.zIndex = -1 * i;
    node.style.setProperty('--index', i);

    cloneWrapperEl.appendChild(node)
    cloneArray.push(node)

  }
}

const windowSizes = {
  width: null,
  height: null
}


document.addEventListener("DOMContentLoaded", () => {

  windowSizes.width = window.innerWidth
  windowSizes.height = window.innerHeight
  
  // console.log(windowSizes);
  const baseElHeight = baseEl.getBoundingClientRect().height
  console.log(baseElHeight);
    
  createClones(cloneCount)

  document.addEventListener("mousemove", (e) => {
    mousePosition.x = e.clientX
    mousePosition.y = e.clientY

    const percentCenterX = (e.clientX * 100 / windowSizes.width) - 50
    const percentCenterY = (e.clientY * 100 / windowSizes.height) - 50

    cloneArray.forEach((clone, i) => {
      
      gsap.to(clone, {
        xPercent:  (i + 1) * -1 * percentCenterX / 10, 
        // yPercent:  -50 + (i + 1) * percentCenterY * -1 / 2, 
        yPercent:  -50 + (i * percentCenterY / -2), 
        delay:     i / 200 
      })

    })
  })

  window.addEventListener("resize", () => {
      windowSizes.width = window.innerWidth
  windowSizes.height = window.innerHeight
  })

})




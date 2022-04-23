import { gsap } from 'gsap';
import { lerp } from '../scripts/utils'
import Keyboard from './keyboard';
import globalEvents from './eventEmitter';

new Keyboard();

const container = document.querySelector(".square-wrapper")

let RGB = [255, 255, 255]

function potard1(value) {
    value = Math.round(value * 255 / 127)
    console.log(value);
    RGB[0] = value;
    setColor();
}
function potard2(value) {
    value = Math.round(value * 255 / 127)
    console.log(value);
    RGB[1] = value;
    setColor();
}
function potard3(value) {
    value = Math.round(value * 255 / 127)
    console.log(value);
    RGB[2] = value;
    setColor();
}

function setColor() {
    container.style.color = `rgb(${RGB[0]}, ${RGB[1]}, ${RGB[2]})`
}


const squares = document.querySelectorAll(".square")
gsap.to(squares[0], {scale: 3, rotation: 0, repeat: -1})
gsap.to(squares[1], {scale: 1, rotation: 0, delay: 0.01, repeat: -1})
gsap.to(squares[2], {scale: 0.55, rotation: 0, delay: 0.02, repeat: -1})
gsap.to(squares[3], {scale: 0.3, rotation: 0, delay: 0.03, repeat: -1})
gsap.to(squares[4], {scale: 0.16, rotation: 0, delay: 0.04, repeat: -1})


globalEvents.on("potard", (e) => {
    // console.log();
    // potard1(e.detail.value)
    const potard = e.detail.potard
    console.log(e.detail.potard);

    if(potard == 1) {
        potard1(e.detail.value)
    }
    if(potard == 2) {
        potard2(e.detail.value)
    }
    if(potard == 3) {
        potard3(e.detail.value)
    }
})

import { gsap } from 'gsap';
import { lerp } from '../scripts/utils';

import Keyboard from "./scripts/keyboard";
import globalEvents from './scripts/eventEmitter';
import Demo1 from './scripts/demo1';
import Demo3 from './scripts/demo3';
import Demo9 from './scripts/demo9';

new Keyboard();
const demo1 = new Demo1();
const demo3 = new Demo3();
// const demo9 = new Demo9();


let currentDemo = 0;


globalEvents.on("potard", (e)=> { 
  // console.log(`demo${currentDemo}-potard${e.detail.potard}`, e.detail.value);
  globalEvents.emit(`demo${currentDemo}-potard${e.detail.potard}`, {value: e.detail.value})

})

globalEvents.on("pad", (e)=> { 
  console.log(e.detail);

  globalEvents.emit("hide-demos")

  currentDemo = e.detail.note - 31; 

  console.log("currentDemo:" + currentDemo);

  globalEvents.emit(`show-demo${currentDemo}`)

  // if (e.detail.note == 44) {
  //   globalEvents.emit("show-demo1")
  // }
  // if (e.detail.note == 45) {
  //   globalEvents.emit("show-demo9")
  // }
  // if (e.detail.note == 46) {
  //   globalEvents.emit("hide-demo9")
  // }

  // if (e.detail.note == 48) {
  //   demo1.decreseBpm()
  // }
  // if (e.detail.note == 49) {
  //   demo1.increaseBpm()
  // }
  // if (e.detail.note == 50) {
  //     globalEvents.emit("show-demo1")
  // }
  // if (e.detail.note == 51) {
  //     globalEvents.emit("hide-demo1")
  // }
})




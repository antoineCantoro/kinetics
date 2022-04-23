import globalEvents from './eventEmitter';

export default class Keyboard {
    constructor() {
        this.initKeyboard();
    }

    initKeyboard() {
        // const pads = document.querySelectorAll(".pad")
        // const potards = document.querySelectorAll(".potard")
        // console.log(pads);
    
        const failure = () => {
            alert('please use navigator with midi support')
        }
    
        const setPotentiometerValue = (potard, value) => {
            // console.log(potard, value);
    
            // potards[potard-1].value = value
            // potards[potard-1].previousElementSibling.innerHTML = value

            globalEvents.emit("potard", {potard, value})
        }
    
        const noteOn = (note, velocity) => {
            // alert('please use navigator/ with midi support')
            // console.log(note, velocity);
            

            globalEvents.emit("pad", {note, velocity})

            // pads.forEach(pad => {
            //     if(pad.dataset.key == note) {
            //         pad.classList.toggle("--is-active")
            //     }
            // })
        }
        const noteOff = (note, velocity) => {
            // alert('please use navigator/ with midi support')
            // console.log(note, velocity);
    
            // pads.forEach(pad => {
            //     // if(pad.dataset.key == note) {
            //     //     pad.classList.toggle("--is-active")
            //     // }
            // })
        }
    
        const handleInput = (event) => {
            // console.log(event)
            // console.log(event.data)
            // console.log(event.data[1])
    
            const command = event.data[0]
            const note = event.data[1]
            const velocity = event.data[2]
    
            // console.table(command, note, velocity)
    
            switch (command) {
                case 144: // key is pressed
                    if (velocity > 0) {
                        //note is playing
                        noteOn(note, velocity)
                    } else {
                        // note is off
                        noteOff(note, velocity)
                    }
                break;
    
                case 128: // key is released
                    noteOff(note, velocity)
                break;
    
                case 176: // Potentiometer potard
                    setPotentiometerValue(note, velocity)
                break;
            }
        }
    
        const updateDevices = (event) => {
            // console.log(event);
            // console.log(`Connected with "${event.port.manufacturer} ${event.port.name}"`);
            // console.log(`State: "${event.port.state}"`);
        }
    
        const success = (midiAccess) => {
            // console.log(midiAccess);
            //    midiAccess.onstatechange = updateDevices;
            midiAccess.addEventListener("statechange", updateDevices)
    
            const inputs = midiAccess.inputs;
            // consorle.log(inputs);
    
            inputs.forEach(input => {
                // console.log(input);
                input.onmidimessage = handleInput
            })
        }
    
        if (navigator.requestMIDIAccess) {
            navigator.requestMIDIAccess().then(success, failure)
        }
    }
}
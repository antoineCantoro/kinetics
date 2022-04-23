import globalEvents from './eventEmitter';

export default class Demo1 {
    constructor() {
        this.initDemo1();

        this.baseBpm = 126;
        this.bpm = 126;
    }

    initDemo1() {
        console.log('demo 1 init');
        this.addEventListeners();

        let docStyle = getComputedStyle(document.documentElement);
        this.bpm = docStyle.getPropertyValue('--bpm');


    }

    decreseBpm() {
        this.bpm -= 2;
        document.documentElement.style.setProperty('--bpm', this.bpm);
        console.log("Current BPM: " + this.bpm);
    }

    increaseBpm() {
        this.bpm = parseInt(this.bpm) + 2;
        document.documentElement.style.setProperty('--bpm', this.bpm);
        console.log("Current BPM: " + this.bpm);
    }

    potard1(value) {
        value = Math.round(value - (127 / 2))
        let computed = this.bpm + value
        document.documentElement.style.setProperty('--bpm', computed);
        // console.log("Current BPM: " + computed);
    }
    potard2(value) {
        // value = Math.round(value - (127 / 2))
        if (value > (127 / 2)) {
            console.log("dark");

            document.documentElement.style.backgroundColor = "#000"
            document.querySelector(".demo1-wrapper").classList.remove("light")
        } else {
            console.log("light");
            document.documentElement.style.backgroundColor = "#fff"
            document.querySelector(".demo1-wrapper").classList.add("light")
            
        }
    }

    hideDemo() {
        document.body.classList.remove("demo1")
        document.querySelector(".demo1-wrapper").classList.remove("active")
    }

    showDemo() {
        document.body.classList.add("demo1")
        document.body.classList.add("active")
        document.querySelector(".demo1-wrapper").classList.add("active")
    }

    addEventListeners() {
        globalEvents.on("hide-demos", ()=> {
            this.hideDemo()
        })

        globalEvents.on(`show-demo1`, () => {
            this.showDemo();
        })

        globalEvents.on("demo1-potard1", (e) => {
            // console.log();
            this.potard1(e.detail.value)
        })
        globalEvents.on("demo1-potard2", (e) => {
            // console.log();
            this.potard2(e.detail.value)
        })

    }
}


import { gsap } from 'gsap';
import globalEvents from './eventEmitter';

export default class Demo9 {
    constructor() {
        this.initDemo9()
    }

    initDemo9() {
        
        this.DOM = {}
        this.DOM.baseEl = document.querySelector(".base")
        this.DOM.cloneWrapperEl = document.querySelector(".clone-wrapper")
        
        this.cloneCount = 80;
        this.cloneArray = []
        
        this.mousePosition = {
          x: null,
          y: null
        }

        this.windowSizes = {
            width: null,
            height: null
        }

        this.getScreenSize();
        this.createClones(this.cloneCount)

        globalEvents.on("hide-demo9", () => {
            this.hideDemo()
        })
        globalEvents.on("show-demo9", () => {
            this.showDemo()
        })

        globalEvents.on("hide-demos", () => {
            this.hideDemo()
        })

        globalEvents.on("demo9-potard1", (e) => {
            this.updateClonePosition(e.detail.value, "potard")
        })
        globalEvents.on("demo9-potard5", (e) => {
            this.updateCloneNumber(e.detail.value)
        })
        // globalEvents.on("updateY", (e) => {
        //     console.log();
        // })



        this.addEventListeners()
    }

    clearNode() {
        console.log("clear");
        this.DOM.cloneWrapperEl.innerHTML = "";
        this.cloneArray = [];
    }

    createClones(count) {
        console.log("create");
        // console.log(count);
        // console.log(this.DOM.cloneWrapperEl);
        
        for (let i = 0; i < count; i++){
            const node = document.createElement("div")
            node.innerHTML = this.DOM.baseEl.innerHTML

            node.classList.add("clone")
            node.style.zIndex = -1 * i;
            node.style.setProperty('--index', i);

            // console.log(node);

            this.DOM.cloneWrapperEl.appendChild(node)
            this.cloneArray.push(node)

        }
    }

    updateCloneNumber(e) {
        console.log(e);
        this.clearNode()
        this.cloneCount = e;
        this.createClones(this.cloneCount)
    }

    hideDemo() {
        document.body.classList.remove("demo9")
        document.querySelector(".demo9-wrapper").classList.remove("active")
        this.clearNode()
        this.removeEventListeners()
    }

    showDemo() {
        document.body.classList.add("demo9")
        document.body.classList.add("active")
        document.querySelector(".demo9-wrapper").classList.add("active")

        this.createClones(this.cloneCount);
    }

    getScreenSize() {
        this.windowSizes.width = window.innerWidth;
        this.windowSizes.height = window.innerHeight;
    }

    updateClonePosition (e, from) {

        if (from) {
            console.log("pot");

            const value = e - 128 / 2
            console.log(value);

            this.cloneArray.forEach((clone, i) => {
            
                gsap.to(clone, {
                    x:  value * i, 
                    // yPercent:  -50 + (i + 1) * percentCenterY * -1 / 2, 
                    y:  -value * i, 
                    transformOrigin: "center",
                    delay:     i / 200 
                })

            })


        } else {
            this.mousePosition.x = e.clientX
            this.mousePosition.y = e.clientY    
            
            const percentCenterX = (e.clientX * 100 / this.windowSizes.width) - 50
            const percentCenterY = (e.clientY * 100 / this.windowSizes.height) - 50

            this.cloneArray.forEach((clone, i) => {
            
                gsap.to(clone, {
                    xPercent:  (i + 1) * -1 * percentCenterX / 10, 
                    // yPercent:  -50 + (i + 1) * percentCenterY * -1 / 2, 
                    yPercent:  -50 + (i * percentCenterY / -2), 
                    delay:     i / 200 
                })

            })
        }

        
    }

    addEventListeners() {
        document.addEventListener("mousemove", this.updateClonePosition.bind(this))
        window.addEventListener("resize", this.getScreenSize.bind(this))
    }

    removeEventListeners() {
        document.removeEventListener("mousemove", this.updateClonePosition.bind(this))
        window.removeEventListener("resize", this.getScreenSize.bind(this))
    }
}


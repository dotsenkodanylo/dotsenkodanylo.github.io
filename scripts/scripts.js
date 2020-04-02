/***
 * dotsenkodanylo.github.io personal website JS scripts file.
 */
let currentMode = "default-light";

let
    freshDot = function () {
        this.obj = document.createElement("div");
        this.obj.classList.add("box");
        this.obj.style.top = (window.innerHeight * Math.random()) + 'px';
        this.obj.style.left = (window.innerWidth * Math.random()) + 'px';
        this.size = Math.floor(2 * Math.random()) + 1;
        this.obj.style.height = this.size + 'px';
        this.obj.style.width = this.size + 'px';

        document.getElementById("stars-wrapper").appendChild(this.obj);
    },
    addStars = function () {
        let dot = [];

        for (let i = 0; i < 300; i++) {
            dot.push(new freshDot());
        }
    },
    updateViewMode = function (event, mode) {
        let selectors = document.getElementsByClassName('switch__toggle');

        if (event.checked) {
            currentMode = mode;
        } else {
            currentMode = "default-light";
        }

        for (let i = 0; i < selectors.length; i++) {
            if (mode !== selectors[i].name) {
                selectors[i].checked = false;
            }
        }

        document.getElementById("body-main").className = currentMode;
    };

setTimeout(function () {
    addStars();
}, 100)

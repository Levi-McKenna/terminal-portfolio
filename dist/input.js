"use strict";
function addInput() {
    document.addEventListener("keypress", (event) => {
        const inputIdName = "inputFocus";
        const inputLine = document.getElementById(inputIdName);
        if (!inputLine)
            return;
        console.log(event.key);
        switch (event.key) {
            case " ":
                inputLine.textContent += event.key;
                // add a false space where the trailing space should be
                inputLine.style.paddingRight = "1em";
                break;
            default:
                inputLine.style.paddingRight = "0"; // remove false trailing space
                inputLine.textContent += event.key;
        }
    });
}

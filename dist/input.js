"use strict";
const inputIdName = "inputFocus";
/**
 * Controls keyboard input for mouse and keyboard. Website will need a separate
 * mobile friendly web page.
 */
function addInput() {
    document.addEventListener("keydown", (event) => {
        const inputLine = document.getElementById(inputIdName);
        if (!inputLine)
            return;
        console.log(event.key);
        switch (event.key) {
            case " ":
                inputLine.textContent += event.key;
                break;
            case "Backspace":
                if (inputLine.textContent) {
                    inputLine.textContent = inputLine.textContent.slice(0, inputLine.textContent.length - 1); // remove last char
                }
                break;
            case "Alt":
                // nothing
                break;
            case "Control":
                // nothing
                break;
            case "Shift":
                // nothing
                break;
            case "Enter":
                // create new line and pass command to interpreter
                newPrompt();
                break;
            default:
                inputLine.textContent += event.key;
                break;
        }
    });
}

"use strict";
var _a;
const INITIAL_LINE_ID = "terminal--line--input-main";
const SECOND_LINE_ID = "terminal--line--input-second";
const INITIAL_LINE_ORIGINAL_HEIGHT = (_a = document.getElementById(INITIAL_LINE_ID)) === null || _a === void 0 ? void 0 : _a.scrollHeight;
function alterTextHeight() {
    const inputLine = document.getElementById("focus-input");
    if (inputLine instanceof HTMLTextAreaElement) {
        inputLine.style.height = inputLine.scrollHeight + "px";
        inputLine.addEventListener("input", function () {
            this.style.height = "auto";
            this.style.height = this.scrollHeight + "px";
        });
    }
}
function onBackSpace(e) {
    const initialLine = document.getElementById(INITIAL_LINE_ID);
    const secondLine = document.getElementById(SECOND_LINE_ID);
}
function terminalLineInputHandler(e) {
    var _a;
    e.preventDefault();
    const target = e.target;
    const initialLine = document.getElementById(INITIAL_LINE_ID);
    const secondLine = document.getElementById(SECOND_LINE_ID);
    // input validation
    if (!initialLine || !secondLine) {
        console.error("The first or second line was not found within the DOM. Ensure the id specified in the query is correct.");
        return;
    }
    if (!INITIAL_LINE_ORIGINAL_HEIGHT) {
        console.error("The initial height was not set. Ensure the id specified in the query is correct.");
        return;
    }
    if (target instanceof HTMLTextAreaElement) {
        if (target.id == INITIAL_LINE_ID) {
            // if the scroll height increases. move to the next line
            if (target.scrollHeight > INITIAL_LINE_ORIGINAL_HEIGHT) {
                secondLine.classList.remove("hidden"); // unhide textarea
                // remove the last character from initial line
                const textContent = initialLine.textContent;
                if (textContent)
                    initialLine.textContent = textContent.slice(0, textContent.length - 1);
                (_a = secondLine.textContent) === null || _a === void 0 ? void 0 : _a.concat(e.data ? e.data : ""); // add the last text
                secondLine.focus();
            }
        }
        else if (target.id == SECOND_LINE_ID) {
        }
    }
}
function terminalNewLine() {
    const commandLine = document.getElementById("terminal--line"); // parent container
    const mainLineInput = document.getElementById("focus-input"); // first input line
    if (mainLineInput instanceof HTMLTextAreaElement) {
        const originalHeight = mainLineInput.scrollHeight; // baseline height
        // check for characters surpassing first line | create new terminal line
        // if so
        mainLineInput.addEventListener("input", (event) => {
            var _a;
            event.preventDefault();
            // check for changes in rows
            if (mainLineInput.scrollHeight > originalHeight) {
                const nextInput = document.createElement("textarea");
                nextInput.id = "focus-input";
                commandLine === null || commandLine === void 0 ? void 0 : commandLine.appendChild(nextInput);
                // remove focus id
                mainLineInput.id = "";
                (_a = document.getElementById("focus-input")) === null || _a === void 0 ? void 0 : _a.focus();
                alterTextHeight();
            }
        });
    }
}

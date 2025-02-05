"use strict";
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

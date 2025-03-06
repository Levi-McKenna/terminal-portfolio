"use strict";
const INPUT_ID = "inputFocus";
const COMMAND_LINE = `<span class="terminal--line--prompt">[User@portfolio home]$ </span>
        <span id="${INPUT_ID}" class="terminal--line--input"></span>`;
/**
 * Creates a new prompt within the terminal for the user.
 */
function newPrompt() {
    setTimeout(() => {
        const terminal = document.getElementById("terminal");
        if (terminal) {
            // remove focusInput id from previous prompt
            let focus = document.getElementById(INPUT_ID);
            if (focus) {
                focus.id = "";
                focus.getAnimations()[0].cancel();
            }
            // add new prompt to terminal
            let promptTemplate = document.createElement("div");
            promptTemplate.innerHTML = COMMAND_LINE;
            terminal.appendChild(promptTemplate);
            // switch focus to new element
            focus = document.getElementById(INPUT_ID);
            // set animation
            animateCursor();
        }
    }, 400);
}
/**
 * Animates cursor to flash like a typical terminal cursor.
 */
function animateCursor() {
    const terminalInput = document.getElementById(INPUT_ID);
    // input validation
    if (terminalInput) {
        terminalInput.animate([
            { borderRight: "solid .75em white" },
            { borderRight: "solid .75em transparent" }
        ], {
            duration: 1000,
            easing: "steps(2, jump-both)", // each jump is half the time and the jump occurs at start and end
            iterations: Infinity,
        });
    }
}

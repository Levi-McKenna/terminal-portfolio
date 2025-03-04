const inputIdName: string = "inputFocus";

/**
 * Controls keyboard input for mouse and keyboard. Website will need a separate
 * mobile friendly web page.
 */
function addInput() {
    document.addEventListener("keydown", (event: KeyboardEvent) => {
        const inputLine = document.getElementById(inputIdName);
        if (!inputLine) return;

        console.log(event.key);
        switch (event.key) {
            case " ":
                inputLine.textContent += event.key;
                break;
            case "Backspace":
                if (inputLine.textContent) {
                    inputLine.textContent = inputLine.textContent.slice(0, inputLine.textContent.length-1); // remove last char
                }
                break;
            case "Alt":
                // nothing
                break;
            case "Control":
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
    })
}

const commandLine: string = `<span class="terminal--line--prompt">[User@portfolio home]$ </span>
        <span id="inputFocus" class="terminal--line--input"></span>`;

/**
 * Creates a new prompt within the terminal for the user.
 */
function newPrompt() {
    setTimeout(() => {
        const terminal = document.getElementById("terminal");

        if (terminal) {
            // remove focusInput id from previous prompt
            const focus = document.getElementById(inputIdName);
            if (focus) focus.id = "";

            // add new prompt to terminal
            let promptTemplate = document.createElement("div");
            promptTemplate.innerHTML = commandLine;
            terminal.appendChild(promptTemplate);
        }
    }, 400);
}

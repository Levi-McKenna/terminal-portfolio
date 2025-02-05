function alterTextHeight() {
    const inputLine = document.getElementById("focus-input");

    if (inputLine instanceof HTMLTextAreaElement) {
        inputLine.style.height = inputLine.scrollHeight+"px";

        inputLine.addEventListener("input", function (this: HTMLElement) {
            this.style.height = "auto";
            this.style.height = this.scrollHeight + "px";
        })
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
            event.preventDefault();
            // check for changes in rows
            if (mainLineInput.scrollHeight > originalHeight) {
                const nextInput = document.createElement("textarea");
                nextInput.id = "focus-input";
                commandLine?.appendChild(nextInput);
                // remove focus id
                mainLineInput.id = "";
                document.getElementById("focus-input")?.focus();
                alterTextHeight();
            }
        });
    }
}

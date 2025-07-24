const INITIAL_LINE_ID: string = "terminal--line--input-main";
const SECOND_LINE_ID: string = "terminal--line--input-second";
const INITIAL_LINE_ORIGINAL_HEIGHT: number | undefined = document.getElementById(INITIAL_LINE_ID)?.scrollHeight;

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

function onBackSpace(e: KeyboardEvent) {
    const initialLine = document.getElementById(INITIAL_LINE_ID);
    const secondLine = document.getElementById(SECOND_LINE_ID);
}

function terminalLineInputHandler(e: InputEvent) {
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
        console.error("The initial height was not set. Ensure the id specified in the query is correct.")
        return;
    }

    if (target instanceof HTMLTextAreaElement) {
        if (target.id == INITIAL_LINE_ID) {
            // if the scroll height increases. move to the next line
            if (target.scrollHeight > INITIAL_LINE_ORIGINAL_HEIGHT) {
                secondLine.classList.remove("hidden"); // unhide textarea
                // remove the last character from initial line
                const textContent: string | null = initialLine.textContent;
                if (textContent) initialLine.textContent = textContent.slice(0, textContent.length-1);

                secondLine.textContent?.concat(e.data ? e.data : ""); // add the last text
                secondLine.focus();
            }
        } else if (target.id == SECOND_LINE_ID) {
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

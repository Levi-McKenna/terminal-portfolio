/**
 * Controls keyboard input for mouse and keyboard. Website will need a separate
 * mobile friendly web page.
 */
function addInput() {
    document.addEventListener("keydown", (event: KeyboardEvent) => {
        const inputLine = document.getElementById(INPUT_ID);
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
            case "Shift":
                // nothing
                break;
            case "F1":
                // nothing
                break;
            case "F2":
                // nothing
                break;
            case "F3":
                // nothing
                break;
            case "F4":
                // nothing
                break;
            case "F5":
                // nothing
                break;
            case "F6":
                // nothing
                break;
            case "F7":
                // nothing
                break;
            case "F8":
                // nothing
                break;
            case "F9":
                // nothing
                break;
            case "F10":
                // nothing
                break;
            case "F11":
                // nothing
                break;
            case "F12":
                // nothing
                break;
            case "Home":
                // nothing
                break;
            case "End":
                // nothing
                break;
            case "PageUp":
                // nothing
                break;
            case "PageDown":
                // nothing
                break;
            case "Delete":
                // nothing
                break;
            case "Meta":
                // nothing
                break;
            case "Enter":
                // create new line and pass command to interpreter
                parseCommand(getCommand());
                newPrompt();
                break;
            default:
                inputLine.textContent += event.key;
                break;
        }
    })
}

/**
 * Returns the command currently stored in the user input element.
 *
 * @returns {string} textContent of the input element or an empty string if the
 * content is empty or the element does not exist
 */
function getCommand() : string {
    const inputElement = document.getElementById(INPUT_ID);
    if (inputElement) {
        return inputElement.textContent ? inputElement.textContent : "";
    }
    return "";
}

/**
 * Parse a command to its underlying program, options an arguments
 *
 * @param {string} command - full command from user input
 */
function parseCommand(command: string) {
    let program: string = "";
    let options: string[] = [];
    let args: string[] = [];

    let start: number = 0;
    let stringLiteral: boolean = false;
    let optionLiteral: boolean = false;
    for (let i = 0; i < command.length; i++) {
        // all edge cases for end of string when missing a arg delimiter
        if (i == command.length - 1) {
            if (optionLiteral) {
                options.push(command[i]);
                continue;
            } else if (!program) {
                program = command.trim();
                continue;
            } else if (command[i] != `"`) { // `"` handled by the stringLiteral branch
                args.push(command.slice(start, i + 1));
                continue;
            } 
        }


        if (command[i] == " " && !stringLiteral) {
            // ensure not parsing an empty slice
            if (start == i) continue; 

            // prevent parsing options as args
            if (optionLiteral) { 
                optionLiteral = false;
                start = i + 1;
                continue;
            }

            // program must be the first word
            if (start == 0) {
                program = command.slice(0, i);
                start = i + 1;
                continue;
            }

            args.push(command.slice(start, i));
            start = i + 1;
        } else if ((command[i] == `"` && !optionLiteral) ||
                    i == command.length - 1) { // indicate literal parsing
            // inverse whether a literal is being parsed
            stringLiteral = !stringLiteral; 

            if (stringLiteral) start = i + 1; // start the arg at the ahead of the string delimiter
            else if (command[i] == `"`) { // if the character truly is the string delimiter then remove it
                args.push(command.slice(start, i));
                start = i + 1;
            } else args.push(command.slice(start, i + 1)); // else we parse the argument to the end of the command

            continue;
        } else if (command[i] == "-" && !stringLiteral) {
            optionLiteral = true;
            continue;
        }

        // when reading a list of options/flags
        if (optionLiteral) {
            options.push(command[i]);
            start = i;
            continue;
        }
    }

    console.log("Program : " + program);
    console.log("Args : " + args);
    console.log("Options : " + options);

    // print program output
    printProgramOutput(program, args, options);
}

function printProgramOutput(program: string, args: string[], opts: string[]) {
    const terminal = document.getElementById("terminal");
    if (terminal) {
        const output = document.createElement("p");

        // for any program that does not exist
        if (!programTable || !programTable.has(program)) { 
            output.textContent = `Program: ${program} does not exist. <br> Use command "help" for more info.`
            output.style.color = "red";
            terminal.appendChild(output);
            return;
        }

        // here we are certain that the program exists within our table so we
        // use the definite assertion modifier to calm our friendly neighborhood
        // TypeScript
        const result: Result = programTable.get(program)!(args, opts);

        if (result.ok != "") {
            output.textContent = result.ok;
            output.style.color = "gray"; // add some personality to output
        } else if (result.err != "") {
            output.textContent = result.err;
            output.style.color = "red"; // red error text
        }

        terminal.appendChild(output);
    }
}

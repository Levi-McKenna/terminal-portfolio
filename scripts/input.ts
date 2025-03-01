function addInput() {
    document.addEventListener("keydown", (event: KeyboardEvent) => {
        const inputIdName: string = "inputFocus"; 
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
            default:
                inputLine.textContent += event.key;
                break;
        }
    })
}

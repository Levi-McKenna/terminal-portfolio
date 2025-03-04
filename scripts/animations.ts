/**
 * Animates cursor to flash like a typical terminal cursor. 
 */
function animateCursor() {
    const inputIdName: string = "inputFocus"; 
    const terminalInput: Element | null = document.getElementById(inputIdName);
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

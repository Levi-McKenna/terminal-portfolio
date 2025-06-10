"use strict";
/*
 * The navigation arrow mentioned in this file is seen in the top right corner
 * of all selected 'terminal viewports' (i.e. viewports large enough to have
 * physical keyboard support.
 */
const termArrow = document.getElementById("term-arrow");
const attentText = document.getElementById("attent-text");
const term = document.getElementById("terminal-wrapper");
/**
 * Event handler for scrolling the terminal into view after the arrow is
 * clicked.
 *
 * @param {Event} e The Event object.
 */
function termArrowOnHover(e) {
    console.assert(termArrow !== null, "arrow must not be null");
    console.assert(e.target instanceof HTMLElement, "event must target an HTMLElement");
    console.assert(attentText !== null, "attention text must exist");
    attentText === null || attentText === void 0 ? void 0 : attentText.classList.add("opacity-0");
}
/**
 * Event handler for scrolling the terminal into view after the arrow is
 * clicked.
 *
 * @param {Event} e The Event object.
 */
function termArrowClick(e) {
    console.assert(termArrow !== null, "arrow must not be null");
    console.assert(e.target instanceof HTMLElement, "event must target an HTMLElement");
    console.assert(term !== null, "terminal must exist");
    term === null || term === void 0 ? void 0 : term.scrollIntoView({
        behavior: "smooth"
    });
}
/**
 * Event handler for scroll to control the visibility of the terminal arrow.
 */
function termArrowScroll() {
    console.assert(termArrow !== null, "arrow must not be null");
    if (window.scrollY >= 50) {
        termArrow === null || termArrow === void 0 ? void 0 : termArrow.classList.add("opacity-0");
    }
    else if (window.scrollY < 50) {
        termArrow === null || termArrow === void 0 ? void 0 : termArrow.classList.remove("opacity-0");
    }
}
termArrow === null || termArrow === void 0 ? void 0 : termArrow.addEventListener("mouseenter", termArrowOnHover);
termArrow === null || termArrow === void 0 ? void 0 : termArrow.addEventListener("click", termArrowClick);
window.addEventListener("scroll", termArrowScroll);

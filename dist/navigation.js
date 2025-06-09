"use strict";
const termArrow = document.getElementById("term-arrow");
const attentText = document.getElementById("attent-text");
const term = document.getElementById("terminal-wrapper");
function termArrowOnHover(e) {
    console.assert(termArrow !== null, "arrow must not be null");
    console.assert(e.target instanceof HTMLElement, "event must target an HTMLElement");
    console.assert(attentText !== null, "attention text must exist");
    attentText === null || attentText === void 0 ? void 0 : attentText.classList.add("opacity-0");
}
function termArrowClick(e) {
    console.assert(termArrow !== null, "arrow must not be null");
    console.assert(e.target instanceof HTMLElement, "event must target an HTMLElement");
    console.assert(term !== null, "terminal must exist");
    term === null || term === void 0 ? void 0 : term.scrollIntoView({
        behavior: "smooth"
    });
}
function termArrowScroll() {
    console.assert(termArrow !== null, "arrow must not be null");
    console.assert(attentText !== null, "attention text must exist");
    if (window.scrollY >= 50) {
        termArrow === null || termArrow === void 0 ? void 0 : termArrow.classList.add("opacity-0");
        attentText === null || attentText === void 0 ? void 0 : attentText.classList.add("opacity-0");
    }
    else {
        termArrow === null || termArrow === void 0 ? void 0 : termArrow.classList.remove("opacity-0");
    }
}
termArrow === null || termArrow === void 0 ? void 0 : termArrow.addEventListener("mouseenter", termArrowOnHover);
termArrow === null || termArrow === void 0 ? void 0 : termArrow.addEventListener("click", termArrowClick);
window.addEventListener("scroll", termArrowScroll);

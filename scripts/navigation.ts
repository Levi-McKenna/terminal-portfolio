const termArrow = document.getElementById("term-arrow");
const attentText = document.getElementById("attent-text")
const term = document.getElementById("terminal-wrapper");

function termArrowOnHover(e: Event) {
    console.assert(termArrow !== null, "arrow must not be null");
    console.assert(e.target instanceof HTMLElement, "event must target an HTMLElement");
    console.assert(attentText !== null, "attention text must exist");

    attentText?.classList.add("opacity-0");
}

function termArrowClick(e: Event) {
    console.assert(termArrow !== null, "arrow must not be null");
    console.assert(e.target instanceof HTMLElement, "event must target an HTMLElement");
    console.assert(term !== null, "terminal must exist");

    term?.scrollIntoView({
        behavior: "smooth"
    });
}

function termArrowScroll() {
    console.assert(termArrow !== null, "arrow must not be null");
    console.assert(attentText !== null, "attention text must exist");

    if (window.scrollY >= 50) {
        termArrow?.classList.add("opacity-0");
        attentText?.classList.add("opacity-0");
    } else {
        termArrow?.classList.remove("opacity-0");
    }
}

termArrow?.addEventListener("mouseenter", termArrowOnHover);
termArrow?.addEventListener("click", termArrowClick);
window.addEventListener("scroll", termArrowScroll);








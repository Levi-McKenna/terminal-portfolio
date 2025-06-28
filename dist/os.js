"use strict";
/*
 * This file defines the scripts for determining the user's operating system and
 * whether we should hide the terminal format. This is very much best effort as
 * sometimes it is unecessary to hide the terminal even within the certain mobile
 * operating systems; however, in most cases, a mobile user will not have a
 * physcial keyboard handy, so this is the most intuitive solution for now.
 */
/**
 * Returns true if the user's platform is incompatible with the terminal and
 * false otherwise. This is a helper function for the routine: `termVisibility`.
 *
 * @returns {boolean} True if incompatible with the terminal, false otherwise.
 */
function determinePlatform() {
    const userAgent = window.navigator.userAgent;
    console.info(userAgent);
    return /Mobile/.test(userAgent);
}
/**
 * Changes the terminal visibility based off the helper function
 * `determinePlatform()`'s return value.
 */
function termVisibility() {
    // shadow global vars for readability
    const term = document.getElementById("terminal-wrapper");
    const termArrow = document.getElementById("term-arrow");
    if (determinePlatform()) {
        term === null || term === void 0 ? void 0 : term.classList.replace("terminal-program-wrapper", "hidden");
        termArrow === null || termArrow === void 0 ? void 0 : termArrow.classList.replace("term-arrow-wrapper", "hidden");
    }
}
termVisibility();

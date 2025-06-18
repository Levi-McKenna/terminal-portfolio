/*
 * This script and its functions handle all 'tab' related events. The tabs are
 * experience, projects or any other content in a tabular format (see the visual
 * layout of the website to see what I mean).
 */

const TABS =  document.getElementsByClassName("tab");

/* 
 * List of all seperate class identifiers for different tab groups. Used instanceof
 * attaching event handlers and the logic within them. 
 */
const TAB_CLASSES: string[] = ["experience", "projects"];

/**
 * Handler for enter events on any experience tabs
 *
 * @param {Event} event The Event object.
 */
function tabMouseEnter(event: Event, className: string) {
    if (event.target instanceof HTMLElement) {
        // to prevent target of the event from being a child element
        let target = event.target.closest(".tab");
        const tabs =  document.getElementsByClassName(className);
        if (target) {
            target.classList.add("tab-hover");
            for (const tab of tabs) {
                // skip the hovered tab
                if (tab === target) continue;
                tab.classList.add("opacity-50");
            }
        }
    }
}

/**
 * Handler for leave events on any experience tabs
 *
 * @param {Event} event The Event object.
 */
function tabMouseLeave(event: Event, className: string) {
    if (event.target instanceof HTMLElement) {
        // to prevent target of the event from being a child element
        const target = event.target.closest(".tab");
        const tabs =  document.getElementsByClassName(className);
        if (target) {
            target.classList.remove("tab-hover");
            for (const tab of tabs) {
                // skip the hovered tab
                if (tab === target) continue;
                tab.classList.remove("opacity-50");
            }
        }
    }
}

for (const tab of TABS) {
    for (const className of TAB_CLASSES) {
        if (tab.classList.contains(className)) {
            tab.addEventListener("mouseover", (e: Event) => tabMouseEnter(e, className));
            tab.addEventListener("mouseout", (e: Event) => tabMouseLeave(e, className));
            break;
        }
    }
}

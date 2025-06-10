/*
 * This script and its functions handle all 'tab' related events. The tabs are
 * experience, projects or any other content in a tabular format (see the visual
 * layout of the website to see what I mean).
 */

const experienceTabs =  document.getElementsByClassName("experience");
const projectTabs = document.getElementsByClassName("project");
const tabs =  document.getElementsByClassName("tab");

/**
 * Handler for enter events on any experience tabs
 *
 * @param {Event} event The Event object.
 */
function experienceMouseEnter(event: Event) {
    if (event.target instanceof HTMLElement) {
        // to prevent target of the event from being a child element
        let target = event.target.closest(".tab");
        if (target) {
            target.classList.add("tab-hover");
            for (const tab of experienceTabs) {
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
function experienceMouseLeave(event: Event) {
    if (event.target instanceof HTMLElement) {
        // to prevent target of the event from being a child element
        let target = event.target.closest(".tab");
        if (target) {
            target.classList.remove("tab-hover");
            for (const tab of experienceTabs) {
                // skip the hovered tab
                if (tab === target) continue;
                tab.classList.remove("opacity-50");
            }
        }
    }
}

/**
 * Handler for enter events on any project tabs. This is currently a pretty
 * redundant way of writing these handlers, so I'll look into a more DRY way of
 * doing it before I complete this function.
 *
 * @param {Event} event The Event object.
 */
function projectMouseEnter(event: Event) {

}

for (const tab of tabs) {
        tab.addEventListener("mouseover", experienceMouseEnter);
        tab.addEventListener("mouseout", experienceMouseLeave);
}

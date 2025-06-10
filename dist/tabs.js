"use strict";
const experienceTabs = document.getElementsByClassName("experience");
const projectTabs = document.getElementsByClassName("project");
const tabs = document.getElementsByClassName("tab");
/**
 * Handler for enter events on any experience tabs
 */
function experienceMouseEnter(event) {
    if (event.target instanceof HTMLElement) {
        // to prevent target of the event from being a child element
        let target = event.target.closest(".tab");
        if (target) {
            target.classList.add("tab-hover");
            for (const tab of experienceTabs) {
                // skip the hovered tab
                if (tab === target)
                    continue;
                tab.classList.add("opacity-50");
            }
        }
    }
}
/**
 * Handler for leave events on any experience tabs
 */
function experienceMouseLeave(event) {
    if (event.target instanceof HTMLElement) {
        // to prevent target of the event from being a child element
        let target = event.target.closest(".tab");
        if (target) {
            target.classList.remove("tab-hover");
            for (const tab of experienceTabs) {
                // skip the hovered tab
                if (tab === target)
                    continue;
                tab.classList.remove("opacity-50");
            }
        }
    }
}
function projectMouseEnter(e) {
}
for (const tab of tabs) {
    tab.addEventListener("mouseover", experienceMouseEnter);
    tab.addEventListener("mouseout", experienceMouseLeave);
}

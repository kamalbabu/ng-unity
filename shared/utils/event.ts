import Core from "./core";

/**
* Stops propagation and prevents default behavior.
*
* @param e The event to be supressed.
*/
const suppress = function suppress(e: Event): void {
    stop(e);
};

/**
* Stops propagation but allows default behavior.
*
* @param e The event to be confined.
*/
const confine = function confine(e: Event): void {
    stop(e, false);
};

const stop = function stop(event: Event, preventDefault?: boolean): void {
    if (event.stopPropagation) {
        event.stopPropagation(); // W3C
    }
    if (event.cancelBubble) {
        event.cancelBubble = true;
    }
    if (Core.coalesce(preventDefault, true)) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
};

export default {
    suppress, confine
};

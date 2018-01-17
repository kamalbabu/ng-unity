"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("./core");
/**
* Stops propagation and prevents default behavior.
*
* @param e The event to be supressed.
*/
var suppress = function suppress(e) {
    stop(e);
};
/**
* Stops propagation but allows default behavior.
*
* @param e The event to be confined.
*/
var confine = function confine(e) {
    stop(e, false);
};
var stop = function stop(event, preventDefault) {
    if (event.stopPropagation) {
        event.stopPropagation(); // W3C
    }
    if (event.cancelBubble) {
        event.cancelBubble = true;
    }
    if (core_1.default.coalesce(preventDefault, true)) {
        if (event.preventDefault) {
            event.preventDefault();
        }
        else {
            event.returnValue = false;
        }
    }
};
exports.default = {
    suppress: suppress, confine: confine
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUEwQjtBQUUxQjs7OztFQUlFO0FBQ0YsSUFBTSxRQUFRLEdBQUcsa0JBQWtCLENBQVE7SUFDdkMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBRUY7Ozs7RUFJRTtBQUNGLElBQU0sT0FBTyxHQUFHLGlCQUFpQixDQUFRO0lBQ3JDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFDO0FBRUYsSUFBTSxJQUFJLEdBQUcsY0FBYyxLQUFZLEVBQUUsY0FBd0I7SUFDN0QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsTUFBTTtJQUNuQyxDQUFDO0lBQ0QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDckIsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUNELEVBQUUsQ0FBQyxDQUFDLGNBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUN2QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDM0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixrQkFBZTtJQUNYLFFBQVEsVUFBQSxFQUFFLE9BQU8sU0FBQTtDQUNwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvcmUgZnJvbSBcIi4vY29yZVwiO1xuXG4vKipcbiogU3RvcHMgcHJvcGFnYXRpb24gYW5kIHByZXZlbnRzIGRlZmF1bHQgYmVoYXZpb3IuXG4qXG4qIEBwYXJhbSBlIFRoZSBldmVudCB0byBiZSBzdXByZXNzZWQuXG4qL1xuY29uc3Qgc3VwcHJlc3MgPSBmdW5jdGlvbiBzdXBwcmVzcyhlOiBFdmVudCk6IHZvaWQge1xuICAgIHN0b3AoZSk7XG59O1xuXG4vKipcbiogU3RvcHMgcHJvcGFnYXRpb24gYnV0IGFsbG93cyBkZWZhdWx0IGJlaGF2aW9yLlxuKlxuKiBAcGFyYW0gZSBUaGUgZXZlbnQgdG8gYmUgY29uZmluZWQuXG4qL1xuY29uc3QgY29uZmluZSA9IGZ1bmN0aW9uIGNvbmZpbmUoZTogRXZlbnQpOiB2b2lkIHtcbiAgICBzdG9wKGUsIGZhbHNlKTtcbn07XG5cbmNvbnN0IHN0b3AgPSBmdW5jdGlvbiBzdG9wKGV2ZW50OiBFdmVudCwgcHJldmVudERlZmF1bHQ/OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgLy8gVzNDXG4gICAgfVxuICAgIGlmIChldmVudC5jYW5jZWxCdWJibGUpIHtcbiAgICAgICAgZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKENvcmUuY29hbGVzY2UocHJldmVudERlZmF1bHQsIHRydWUpKSB7XG4gICAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc3VwcHJlc3MsIGNvbmZpbmVcbn07XG4iXX0=
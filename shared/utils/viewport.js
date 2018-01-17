"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var host_1 = require("./host");
/**
 * Returns the viewport dimension.
 *
 * @returns A ClientRect object containing viewport width and height.
 * If the context is Node.js then returns undefined.
 */
var getClientRect = function getClientRect() {
    if (host_1.default.isNode()) {
        return undefined;
    }
    else {
        var boundingRect = document.body.getBoundingClientRect();
        return {
            width: Math.max(window.innerWidth, document.documentElement.clientWidth, document.body.clientWidth, window.screen.width),
            height: Math.max(window.innerHeight, document.documentElement.clientHeight, document.body.clientHeight, window.screen.height),
            bottom: boundingRect.bottom,
            left: boundingRect.left,
            right: boundingRect.right,
            top: boundingRect.top
        };
    }
};
exports.default = {
    getClientRect: getClientRect
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3BvcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2aWV3cG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUEwQjtBQUUxQjs7Ozs7R0FLRztBQUNILElBQU0sYUFBYSxHQUFHO0lBQ2xCLEVBQUUsQ0FBQyxDQUFDLGNBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEIsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixJQUFNLFlBQVksR0FBZSxRQUFRLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDdkUsTUFBTSxDQUFDO1lBQ0gsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFDbkUsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDbkQsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksRUFDdEUsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDckQsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNO1lBQzNCLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSTtZQUN2QixLQUFLLEVBQUUsWUFBWSxDQUFDLEtBQUs7WUFDekIsR0FBRyxFQUFFLFlBQVksQ0FBQyxHQUFHO1NBQ3hCLENBQUM7SUFDTixDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsa0JBQWU7SUFDWCxhQUFhLGVBQUE7Q0FDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIb3N0IGZyb20gXCIuL2hvc3RcIjtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSB2aWV3cG9ydCBkaW1lbnNpb24uXHJcbiAqXHJcbiAqIEByZXR1cm5zIEEgQ2xpZW50UmVjdCBvYmplY3QgY29udGFpbmluZyB2aWV3cG9ydCB3aWR0aCBhbmQgaGVpZ2h0LlxyXG4gKiBJZiB0aGUgY29udGV4dCBpcyBOb2RlLmpzIHRoZW4gcmV0dXJucyB1bmRlZmluZWQuXHJcbiAqL1xyXG5jb25zdCBnZXRDbGllbnRSZWN0ID0gZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdCgpOiBDbGllbnRSZWN0IHwgdW5kZWZpbmVkIHtcclxuICAgIGlmIChIb3N0LmlzTm9kZSgpKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgYm91bmRpbmdSZWN0OiBDbGllbnRSZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB3aWR0aDogTWF0aC5tYXgod2luZG93LmlubmVyV2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIHdpbmRvdy5zY3JlZW4ud2lkdGgpLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGgubWF4KHdpbmRvdy5pbm5lckhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LCB3aW5kb3cuc2NyZWVuLmhlaWdodCksXHJcbiAgICAgICAgICAgIGJvdHRvbTogYm91bmRpbmdSZWN0LmJvdHRvbSxcclxuICAgICAgICAgICAgbGVmdDogYm91bmRpbmdSZWN0LmxlZnQsXHJcbiAgICAgICAgICAgIHJpZ2h0OiBib3VuZGluZ1JlY3QucmlnaHQsXHJcbiAgICAgICAgICAgIHRvcDogYm91bmRpbmdSZWN0LnRvcFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBnZXRDbGllbnRSZWN0XHJcbn07XHJcbiJdfQ==
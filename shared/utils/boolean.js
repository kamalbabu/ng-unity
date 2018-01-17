"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var type_1 = require("./type");
/**
 * Returns the boolean equivalent of various non boolean data.
 *
 *      value("Yes");// true
 *      value(0);// false
 *
 * @param val Input whose boolean equivalent is to be returned.
 * e.g. "Yes", true, 0 etc.
 *
 * @returns Boolean equivalent of the input.
 */
var value = function value(val) {
    var TRUE_MAP = {
        "YES": "NO", "Y": "N", "TRUE": "FALSE", "ON": "OFF", "1": "0"
    };
    if (!val) {
        return false;
    }
    if (type_1.default.isBoolean(val)) {
        return val;
    }
    // Apparently, fastest way to convert a number to a string is "" + num
    var strVal = type_1.default.isNumber(val) ? "" + val : val.toUpperCase();
    return strVal in TRUE_MAP;
};
exports.default = {
    value: value
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2xlYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBMEI7QUFFMUI7Ozs7Ozs7Ozs7R0FVRztBQUNILElBQU0sS0FBSyxHQUFHLGVBQWUsR0FBUTtJQUNqQyxJQUFNLFFBQVEsR0FBVztRQUNyQixLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHO0tBQ2hFLENBQUM7SUFDRixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDUCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDRCxFQUFFLENBQUMsQ0FBQyxjQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUNELHNFQUFzRTtJQUN0RSxJQUFNLE1BQU0sR0FBVyxjQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pFLE1BQU0sQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDO0FBQzlCLENBQUMsQ0FBQztBQUVGLGtCQUFlO0lBQ1gsS0FBSyxPQUFBO0NBQ1IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUeXBlIGZyb20gXCIuL3R5cGVcIjtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBib29sZWFuIGVxdWl2YWxlbnQgb2YgdmFyaW91cyBub24gYm9vbGVhbiBkYXRhLlxyXG4gKlxyXG4gKiAgICAgIHZhbHVlKFwiWWVzXCIpOy8vIHRydWVcclxuICogICAgICB2YWx1ZSgwKTsvLyBmYWxzZVxyXG4gKlxyXG4gKiBAcGFyYW0gdmFsIElucHV0IHdob3NlIGJvb2xlYW4gZXF1aXZhbGVudCBpcyB0byBiZSByZXR1cm5lZC5cclxuICogZS5nLiBcIlllc1wiLCB0cnVlLCAwIGV0Yy5cclxuICpcclxuICogQHJldHVybnMgQm9vbGVhbiBlcXVpdmFsZW50IG9mIHRoZSBpbnB1dC5cclxuICovXHJcbmNvbnN0IHZhbHVlID0gZnVuY3Rpb24gdmFsdWUodmFsOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IFRSVUVfTUFQOiBPYmplY3QgPSB7XHJcbiAgICAgICAgXCJZRVNcIjogXCJOT1wiLCBcIllcIjogXCJOXCIsIFwiVFJVRVwiOiBcIkZBTFNFXCIsIFwiT05cIjogXCJPRkZcIiwgXCIxXCI6IFwiMFwiXHJcbiAgICB9O1xyXG4gICAgaWYgKCF2YWwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoVHlwZS5pc0Jvb2xlYW4odmFsKSkge1xyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcbiAgICAvLyBBcHBhcmVudGx5LCBmYXN0ZXN0IHdheSB0byBjb252ZXJ0IGEgbnVtYmVyIHRvIGEgc3RyaW5nIGlzIFwiXCIgKyBudW1cclxuICAgIGNvbnN0IHN0clZhbDogc3RyaW5nID0gVHlwZS5pc051bWJlcih2YWwpID8gXCJcIiArIHZhbCA6IHZhbC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIHN0clZhbCBpbiBUUlVFX01BUDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHZhbHVlXHJcbn07XHJcbiJdfQ==
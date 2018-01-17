// import Number from "./number";
// import OSVersion from "../core/osVersion";
// const MAC: string = "MAC";
// const WIN: string = "WIN";
// /**
//  * Checks whether the device make is Apple.
//  *
//  * @returns True if the device make is Apple.
//  */
// const isApple = function isApple(): boolean {
//     return /iP(hone|od|ad)/.test(navigator.platform) || navigator.platform.toUpperCase().indexOf(MAC) > -1;
// };
// /**
//  * Checks whether the OS is Windows.
//  *
//  * @returns True if the OS is Windows.
//  */
// const isWindows = function isWindows(): boolean {
//     return navigator.platform.toUpperCase().indexOf(WIN) > -1;
// };
// /**
//  * Detects the OS version.
//  *
//  * @returns An object of type OSVersion if the device make is Apple. Otherwise
//  * returns undefined.
//  */
// const getOSVersion = function getOSVersion(): OSVersion | undefined {
//     if (isApple()) {
//         const v: RegExpMatchArray | null = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
//         if (v) {
//             const info: OSVersion = {
//                 tag: v[1] + "." + v[2] + "." + v[3],
//                 major: Number.parse(v[1]),
//                 minor: Number.parse(v[2]),
//                 build: Number.parse(v[3] || "0")
//             };
//             return info;
//         }
//         return undefined;
//     } else {
//         return undefined;
//     }
//     /* Support other Operating systems.Formats are different..tedious!*/
// };
// export default {
//     isApple, isWindows, getOSVersion
// };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF0Zm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBaUM7QUFDakMsNkNBQTZDO0FBRTdDLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFFN0IsTUFBTTtBQUNOLDhDQUE4QztBQUM5QyxLQUFLO0FBQ0wsZ0RBQWdEO0FBQ2hELE1BQU07QUFDTixnREFBZ0Q7QUFDaEQsOEdBQThHO0FBQzlHLEtBQUs7QUFFTCxNQUFNO0FBQ04sdUNBQXVDO0FBQ3ZDLEtBQUs7QUFDTCx5Q0FBeUM7QUFDekMsTUFBTTtBQUNOLG9EQUFvRDtBQUNwRCxpRUFBaUU7QUFDakUsS0FBSztBQUVMLE1BQU07QUFDTiw2QkFBNkI7QUFDN0IsS0FBSztBQUNMLGlGQUFpRjtBQUNqRix3QkFBd0I7QUFDeEIsTUFBTTtBQUNOLHdFQUF3RTtBQUN4RSx1QkFBdUI7QUFDdkIscUdBQXFHO0FBQ3JHLG1CQUFtQjtBQUNuQix3Q0FBd0M7QUFDeEMsdURBQXVEO0FBQ3ZELDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsbURBQW1EO0FBQ25ELGlCQUFpQjtBQUNqQiwyQkFBMkI7QUFDM0IsWUFBWTtBQUNaLDRCQUE0QjtBQUM1QixlQUFlO0FBQ2YsNEJBQTRCO0FBQzVCLFFBQVE7QUFDUiwyRUFBMkU7QUFDM0UsS0FBSztBQUVMLG1CQUFtQjtBQUNuQix1Q0FBdUM7QUFDdkMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBOdW1iZXIgZnJvbSBcIi4vbnVtYmVyXCI7XHJcbi8vIGltcG9ydCBPU1ZlcnNpb24gZnJvbSBcIi4uL2NvcmUvb3NWZXJzaW9uXCI7XHJcblxyXG4vLyBjb25zdCBNQUM6IHN0cmluZyA9IFwiTUFDXCI7XHJcbi8vIGNvbnN0IFdJTjogc3RyaW5nID0gXCJXSU5cIjtcclxuXHJcbi8vIC8qKlxyXG4vLyAgKiBDaGVja3Mgd2hldGhlciB0aGUgZGV2aWNlIG1ha2UgaXMgQXBwbGUuXHJcbi8vICAqXHJcbi8vICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGRldmljZSBtYWtlIGlzIEFwcGxlLlxyXG4vLyAgKi9cclxuLy8gY29uc3QgaXNBcHBsZSA9IGZ1bmN0aW9uIGlzQXBwbGUoKTogYm9vbGVhbiB7XHJcbi8vICAgICByZXR1cm4gL2lQKGhvbmV8b2R8YWQpLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkgfHwgbmF2aWdhdG9yLnBsYXRmb3JtLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihNQUMpID4gLTE7XHJcbi8vIH07XHJcblxyXG4vLyAvKipcclxuLy8gICogQ2hlY2tzIHdoZXRoZXIgdGhlIE9TIGlzIFdpbmRvd3MuXHJcbi8vICAqXHJcbi8vICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIE9TIGlzIFdpbmRvd3MuXHJcbi8vICAqL1xyXG4vLyBjb25zdCBpc1dpbmRvd3MgPSBmdW5jdGlvbiBpc1dpbmRvd3MoKTogYm9vbGVhbiB7XHJcbi8vICAgICByZXR1cm4gbmF2aWdhdG9yLnBsYXRmb3JtLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihXSU4pID4gLTE7XHJcbi8vIH07XHJcblxyXG4vLyAvKipcclxuLy8gICogRGV0ZWN0cyB0aGUgT1MgdmVyc2lvbi5cclxuLy8gICpcclxuLy8gICogQHJldHVybnMgQW4gb2JqZWN0IG9mIHR5cGUgT1NWZXJzaW9uIGlmIHRoZSBkZXZpY2UgbWFrZSBpcyBBcHBsZS4gT3RoZXJ3aXNlXHJcbi8vICAqIHJldHVybnMgdW5kZWZpbmVkLlxyXG4vLyAgKi9cclxuLy8gY29uc3QgZ2V0T1NWZXJzaW9uID0gZnVuY3Rpb24gZ2V0T1NWZXJzaW9uKCk6IE9TVmVyc2lvbiB8IHVuZGVmaW5lZCB7XHJcbi8vICAgICBpZiAoaXNBcHBsZSgpKSB7XHJcbi8vICAgICAgICAgY29uc3QgdjogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwgPSAobmF2aWdhdG9yLmFwcFZlcnNpb24pLm1hdGNoKC9PUyAoXFxkKylfKFxcZCspXz8oXFxkKyk/Lyk7XHJcbi8vICAgICAgICAgaWYgKHYpIHtcclxuLy8gICAgICAgICAgICAgY29uc3QgaW5mbzogT1NWZXJzaW9uID0ge1xyXG4vLyAgICAgICAgICAgICAgICAgdGFnOiB2WzFdICsgXCIuXCIgKyB2WzJdICsgXCIuXCIgKyB2WzNdLFxyXG4vLyAgICAgICAgICAgICAgICAgbWFqb3I6IE51bWJlci5wYXJzZSh2WzFdKSxcclxuLy8gICAgICAgICAgICAgICAgIG1pbm9yOiBOdW1iZXIucGFyc2UodlsyXSksXHJcbi8vICAgICAgICAgICAgICAgICBidWlsZDogTnVtYmVyLnBhcnNlKHZbM10gfHwgXCIwXCIpXHJcbi8vICAgICAgICAgICAgIH07XHJcbi8vICAgICAgICAgICAgIHJldHVybiBpbmZvO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgLyogU3VwcG9ydCBvdGhlciBPcGVyYXRpbmcgc3lzdGVtcy5Gb3JtYXRzIGFyZSBkaWZmZXJlbnQuLnRlZGlvdXMhKi9cclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHtcclxuLy8gICAgIGlzQXBwbGUsIGlzV2luZG93cywgZ2V0T1NWZXJzaW9uXHJcbi8vIH07XHJcbiJdfQ==
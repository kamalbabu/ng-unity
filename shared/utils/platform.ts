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

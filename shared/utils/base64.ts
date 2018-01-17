// import WindowX from "../core/window";
// import Host from "./host";

// const TEXT_BASE_64: string = "base64";
// const TEXT_BINARY: string = "binary";

// const env = Host.isNode() ? global : <WindowX> window;

// /**
//  * Encodes the given string.
//  *
//  * @param string to be encoded.
//  *
//  * @returns Encoded string.
//  */
// const encode = function encode(value: string): string {
//     return base64Encode(env.unescape(encodeURIComponent(value)));
// };

// /**
// * Decodes the given string.
// *
// * @param Encoded string.
// *
// * @returns Decoded string.
// */
// const decode = function decode(value: string): string {
//     return decodeURIComponent(env.escape(base64Decode(value)));
// };

// declare const Buffer: any;

// const base64Encode = function base64Encode(value: any): string {
//     if (Host.isNode()) {
//         const buffer: Buffer = (value instanceof Buffer) ? value : new Buffer(value.toString(), TEXT_BINARY);
//         return buffer.toString(TEXT_BASE_64);
//     }
//     return window.btoa(value);
// };

// const base64Decode = function base64Decode(value: string): string {
//     if (Host.isNode()) {
//         return new Buffer(value, TEXT_BASE_64).toString(TEXT_BINARY);
//     }
//     return window.atob(value);
// };

// export default {
//     encode, decode
// };

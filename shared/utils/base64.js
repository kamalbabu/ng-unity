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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZTY0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFzZTY0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUF3QztBQUN4Qyw2QkFBNkI7QUFFN0IseUNBQXlDO0FBQ3pDLHdDQUF3QztBQUV4Qyx5REFBeUQ7QUFFekQsTUFBTTtBQUNOLCtCQUErQjtBQUMvQixLQUFLO0FBQ0wsa0NBQWtDO0FBQ2xDLEtBQUs7QUFDTCw4QkFBOEI7QUFDOUIsTUFBTTtBQUNOLDBEQUEwRDtBQUMxRCxvRUFBb0U7QUFDcEUsS0FBSztBQUVMLE1BQU07QUFDTiw4QkFBOEI7QUFDOUIsSUFBSTtBQUNKLDJCQUEyQjtBQUMzQixJQUFJO0FBQ0osNkJBQTZCO0FBQzdCLEtBQUs7QUFDTCwwREFBMEQ7QUFDMUQsa0VBQWtFO0FBQ2xFLEtBQUs7QUFFTCw2QkFBNkI7QUFFN0IsbUVBQW1FO0FBQ25FLDJCQUEyQjtBQUMzQixnSEFBZ0g7QUFDaEgsZ0RBQWdEO0FBQ2hELFFBQVE7QUFDUixpQ0FBaUM7QUFDakMsS0FBSztBQUVMLHNFQUFzRTtBQUN0RSwyQkFBMkI7QUFDM0Isd0VBQXdFO0FBQ3hFLFFBQVE7QUFDUixpQ0FBaUM7QUFDakMsS0FBSztBQUVMLG1CQUFtQjtBQUNuQixxQkFBcUI7QUFDckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBXaW5kb3dYIGZyb20gXCIuLi9jb3JlL3dpbmRvd1wiO1xuLy8gaW1wb3J0IEhvc3QgZnJvbSBcIi4vaG9zdFwiO1xuXG4vLyBjb25zdCBURVhUX0JBU0VfNjQ6IHN0cmluZyA9IFwiYmFzZTY0XCI7XG4vLyBjb25zdCBURVhUX0JJTkFSWTogc3RyaW5nID0gXCJiaW5hcnlcIjtcblxuLy8gY29uc3QgZW52ID0gSG9zdC5pc05vZGUoKSA/IGdsb2JhbCA6IDxXaW5kb3dYPiB3aW5kb3c7XG5cbi8vIC8qKlxuLy8gICogRW5jb2RlcyB0aGUgZ2l2ZW4gc3RyaW5nLlxuLy8gICpcbi8vICAqIEBwYXJhbSBzdHJpbmcgdG8gYmUgZW5jb2RlZC5cbi8vICAqXG4vLyAgKiBAcmV0dXJucyBFbmNvZGVkIHN0cmluZy5cbi8vICAqL1xuLy8gY29uc3QgZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuLy8gICAgIHJldHVybiBiYXNlNjRFbmNvZGUoZW52LnVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpKTtcbi8vIH07XG5cbi8vIC8qKlxuLy8gKiBEZWNvZGVzIHRoZSBnaXZlbiBzdHJpbmcuXG4vLyAqXG4vLyAqIEBwYXJhbSBFbmNvZGVkIHN0cmluZy5cbi8vICpcbi8vICogQHJldHVybnMgRGVjb2RlZCBzdHJpbmcuXG4vLyAqL1xuLy8gY29uc3QgZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuLy8gICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZW52LmVzY2FwZShiYXNlNjREZWNvZGUodmFsdWUpKSk7XG4vLyB9O1xuXG4vLyBkZWNsYXJlIGNvbnN0IEJ1ZmZlcjogYW55O1xuXG4vLyBjb25zdCBiYXNlNjRFbmNvZGUgPSBmdW5jdGlvbiBiYXNlNjRFbmNvZGUodmFsdWU6IGFueSk6IHN0cmluZyB7XG4vLyAgICAgaWYgKEhvc3QuaXNOb2RlKCkpIHtcbi8vICAgICAgICAgY29uc3QgYnVmZmVyOiBCdWZmZXIgPSAodmFsdWUgaW5zdGFuY2VvZiBCdWZmZXIpID8gdmFsdWUgOiBuZXcgQnVmZmVyKHZhbHVlLnRvU3RyaW5nKCksIFRFWFRfQklOQVJZKTtcbi8vICAgICAgICAgcmV0dXJuIGJ1ZmZlci50b1N0cmluZyhURVhUX0JBU0VfNjQpO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gd2luZG93LmJ0b2EodmFsdWUpO1xuLy8gfTtcblxuLy8gY29uc3QgYmFzZTY0RGVjb2RlID0gZnVuY3Rpb24gYmFzZTY0RGVjb2RlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuLy8gICAgIGlmIChIb3N0LmlzTm9kZSgpKSB7XG4vLyAgICAgICAgIHJldHVybiBuZXcgQnVmZmVyKHZhbHVlLCBURVhUX0JBU0VfNjQpLnRvU3RyaW5nKFRFWFRfQklOQVJZKTtcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIHdpbmRvdy5hdG9iKHZhbHVlKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IHtcbi8vICAgICBlbmNvZGUsIGRlY29kZVxuLy8gfTtcbiJdfQ==
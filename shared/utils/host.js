"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserAgentSignature = (function () {
    function UserAgentSignature() {
    }
    UserAgentSignature.MSIE = "MSIE";
    UserAgentSignature.TRIDENT = "Trident/";
    UserAgentSignature.EDGE = "Edge/";
    UserAgentSignature.FIREFOX = "Firefox/";
    return UserAgentSignature;
}());
/**
 * Checks whether the user's browser is Internet Explorer.
 *
 * @returns True if the user's browser is Internet Explorer.
 */
var isIE = function isIE() {
    var ua = navigator.userAgent;
    // Test values; Uncomment to check result …
    // IE 10
    // ua = "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)";
    // IE 11
    // ua = "Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko";
    // Edge 12 (Spartan)
    // ua = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0";
    // Edge 13
    // ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586";
    return ua.indexOf(UserAgentSignature.MSIE) > -1 || ua.indexOf(UserAgentSignature.TRIDENT) > -1 || ua.indexOf(UserAgentSignature.EDGE) > -1;
};
/**
 * Checks whether the user's browser is Firefox.
 *
 * @returns True if the user's browser is Firefox.
 */
var isFireFox = function isFireFox() {
    // userAgent in FF2.0.0.13 WinXP returns: Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US;
    //                                            rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13
    // userAgent in FF35 Win7 returns: Mozilla/5.0 (Windows NT 6.1; WOW64; rv:35.0)
    //                                              Gecko/20100101 Firefox/35.0
    var ua = navigator.userAgent;
    return ua.indexOf(UserAgentSignature.FIREFOX) > -1;
};
/**
 * Checks whether the environment is Node.js.
 *
 * @returns True if the environment is Node.js.
 */
var isNode = function isNode() {
    return typeof window === "undefined";
};
exports.default = {
    isIE: isIE, isFireFox: isFireFox, isNode: isNode
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUFBO0lBS0EsQ0FBQztJQUowQix1QkFBSSxHQUFXLE1BQU0sQ0FBQztJQUN0QiwwQkFBTyxHQUFXLFVBQVUsQ0FBQztJQUM3Qix1QkFBSSxHQUFXLE9BQU8sQ0FBQztJQUN2QiwwQkFBTyxHQUFXLFVBQVUsQ0FBQztJQUN4RCx5QkFBQztDQUFBLEFBTEQsSUFLQztBQUVEOzs7O0dBSUc7QUFDSCxJQUFNLElBQUksR0FBRztJQUNULElBQU0sRUFBRSxHQUFXLFNBQVMsQ0FBQyxTQUFTLENBQUM7SUFFdkMsMkNBQTJDO0lBRTNDLFFBQVE7SUFDUiwyRUFBMkU7SUFFM0UsUUFBUTtJQUNSLHdFQUF3RTtJQUV4RSxvQkFBb0I7SUFDcEIsa0lBQWtJO0lBRWxJLFVBQVU7SUFDViwwSUFBMEk7SUFDMUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQy9JLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDSCxJQUFNLFNBQVMsR0FBRztJQUNkLHlGQUF5RjtJQUN6RiwwRkFBMEY7SUFDMUYsK0VBQStFO0lBQy9FLDJFQUEyRTtJQUMzRSxJQUFNLEVBQUUsR0FBVyxTQUFTLENBQUMsU0FBUyxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDSCxJQUFNLE1BQU0sR0FBRztJQUNYLE1BQU0sQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUM7QUFDekMsQ0FBQyxDQUFDO0FBRUYsa0JBQWU7SUFDWCxJQUFJLE1BQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxNQUFNLFFBQUE7Q0FDMUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFVzZXJBZ2VudFNpZ25hdHVyZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE1TSUU6IHN0cmluZyA9IFwiTVNJRVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBUUklERU5UOiBzdHJpbmcgPSBcIlRyaWRlbnQvXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEVER0U6IHN0cmluZyA9IFwiRWRnZS9cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRklSRUZPWDogc3RyaW5nID0gXCJGaXJlZm94L1wiO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIHVzZXIncyBicm93c2VyIGlzIEludGVybmV0IEV4cGxvcmVyLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB1c2VyJ3MgYnJvd3NlciBpcyBJbnRlcm5ldCBFeHBsb3Jlci5cclxuICovXHJcbmNvbnN0IGlzSUUgPSBmdW5jdGlvbiBpc0lFKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgdWE6IHN0cmluZyA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XHJcblxyXG4gICAgLy8gVGVzdCB2YWx1ZXM7IFVuY29tbWVudCB0byBjaGVjayByZXN1bHQg4oCmXHJcblxyXG4gICAgLy8gSUUgMTBcclxuICAgIC8vIHVhID0gXCJNb3ppbGxhLzUuMCAoY29tcGF0aWJsZTsgTVNJRSAxMC4wOyBXaW5kb3dzIE5UIDYuMjsgVHJpZGVudC82LjApXCI7XHJcblxyXG4gICAgLy8gSUUgMTFcclxuICAgIC8vIHVhID0gXCJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCA2LjM7IFRyaWRlbnQvNy4wOyBydjoxMS4wKSBsaWtlIEdlY2tvXCI7XHJcblxyXG4gICAgLy8gRWRnZSAxMiAoU3BhcnRhbilcclxuICAgIC8vIHVhID0gXCJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXT1c2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzM5LjAuMjE3MS43MSBTYWZhcmkvNTM3LjM2IEVkZ2UvMTIuMFwiO1xyXG5cclxuICAgIC8vIEVkZ2UgMTNcclxuICAgIC8vIHVhID0gXCJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvNDYuMC4yNDg2LjAgU2FmYXJpLzUzNy4zNiBFZGdlLzEzLjEwNTg2XCI7XHJcbiAgICByZXR1cm4gdWEuaW5kZXhPZihVc2VyQWdlbnRTaWduYXR1cmUuTVNJRSkgPiAtMSB8fCB1YS5pbmRleE9mKFVzZXJBZ2VudFNpZ25hdHVyZS5UUklERU5UKSA+IC0xIHx8IHVhLmluZGV4T2YoVXNlckFnZW50U2lnbmF0dXJlLkVER0UpID4gLTE7XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIHVzZXIncyBicm93c2VyIGlzIEZpcmVmb3guXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHVzZXIncyBicm93c2VyIGlzIEZpcmVmb3guXHJcbiAqL1xyXG5jb25zdCBpc0ZpcmVGb3ggPSBmdW5jdGlvbiBpc0ZpcmVGb3goKTogYm9vbGVhbiB7XHJcbiAgICAvLyB1c2VyQWdlbnQgaW4gRkYyLjAuMC4xMyBXaW5YUCByZXR1cm5zOiBNb3ppbGxhLzUuMCAoV2luZG93czsgVTsgV2luZG93cyBOVCA1LjE7IGVuLVVTO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ2OjEuOC4xLjEzKSBHZWNrby8yMDA4MDMxMSBGaXJlZm94LzIuMC4wLjEzXHJcbiAgICAvLyB1c2VyQWdlbnQgaW4gRkYzNSBXaW43IHJldHVybnM6IE1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDYuMTsgV09XNjQ7IHJ2OjM1LjApXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZWNrby8yMDEwMDEwMSBGaXJlZm94LzM1LjBcclxuICAgIGNvbnN0IHVhOiBzdHJpbmcgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xyXG4gICAgcmV0dXJuIHVhLmluZGV4T2YoVXNlckFnZW50U2lnbmF0dXJlLkZJUkVGT1gpID4gLTE7XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIGVudmlyb25tZW50IGlzIE5vZGUuanMuXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGVudmlyb25tZW50IGlzIE5vZGUuanMuXHJcbiAqL1xyXG5jb25zdCBpc05vZGUgPSBmdW5jdGlvbiBpc05vZGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGlzSUUsIGlzRmlyZUZveCwgaXNOb2RlXHJcbn07XHJcbiJdfQ==
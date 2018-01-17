"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var type_1 = require("./type");
/**
 * Parses a URL and returns an object created from the query string.
 *
 *	var url = "https://www.xyz.com?name=Neo&age=23";
 *	parseQueryString(url); // Object {name: "Neo", age: "23"}
 *
 * @param url URL to be parsed.
 *
 * @returns Object created from the query string.
 */
var parseQueryString = function parseQueryString(url) {
    var qStart = url.indexOf("?");
    var query = qStart < 0 ? url : url.substring(qStart + 1);
    var pairs = ((query || "").replace(/^\?/, "").split(/&/));
    var len = pairs.length;
    var result = {};
    for (var i = 0; i < len; i++) {
        var pair = decode(pairs[i]);
        var name_1 = pair.substring(0, pair.indexOf("="));
        var value = pair.substring(pair.indexOf("=") + 1);
        if (result[name_1] === undefined) {
            result[name_1] = value;
            continue;
        }
        // name can appear more than once in query string..
        // here we will create an array
        if (!type_1.default.isObject(result[name_1])) {
            result[name_1] = [result[name_1]];
        }
        result[name_1].push(value);
    }
    return result;
};
/**
 * Encodes a URI.
 *
 * @param value URI to be encoded.
 *
 * @returns Encoded URI.
 */
var encode = function encode(value) {
    return encodeURIComponent(value);
};
/**
 * Decodes a URI.
 *
 * @param value URI to be decoded. Replaces +, @, : and $.
 *
 * @returns URI.
 */
var decode = function decode(value) {
    return decodeURIComponent(value.replace(/\+/g, "%20")
        .replace(/@/g, "%40").replace(/:/g, "%3A").replace(/\$/g, "%24"));
};
exports.default = {
    parseQueryString: parseQueryString, encode: encode, decode: decode
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXJsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQTBCO0FBRTFCOzs7Ozs7Ozs7R0FTRztBQUVILElBQU0sZ0JBQWdCLEdBQUcsMEJBQTBCLEdBQVc7SUFDMUQsSUFBTSxNQUFNLEdBQVcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxJQUFNLEtBQUssR0FBVyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRSxJQUFNLEtBQUssR0FBYSxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEUsSUFBTSxHQUFHLEdBQVcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNqQyxJQUFNLE1BQU0sR0FBVyxFQUFFLENBQUM7SUFDMUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNuQyxJQUFNLElBQUksR0FBVyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBTSxNQUFJLEdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFELElBQU0sS0FBSyxHQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1RCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBSSxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsTUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLFFBQVEsQ0FBQztRQUNiLENBQUM7UUFDRCxtREFBbUQ7UUFDbkQsK0JBQStCO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLE1BQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQUksQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUY7Ozs7OztHQU1HO0FBQ0gsSUFBTSxNQUFNLEdBQUcsZ0JBQWdCLEtBQWE7SUFDeEMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3JDLENBQUMsQ0FBQztBQUVGOzs7Ozs7R0FNRztBQUNILElBQU0sTUFBTSxHQUFHLGdCQUFnQixLQUFhO0lBQ3hDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7U0FDaEQsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMxRSxDQUFDLENBQUM7QUFFRixrQkFBZTtJQUNYLGdCQUFnQixrQkFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLE1BQU0sUUFBQTtDQUNuQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xyXG5cclxuLyoqXHJcbiAqIFBhcnNlcyBhIFVSTCBhbmQgcmV0dXJucyBhbiBvYmplY3QgY3JlYXRlZCBmcm9tIHRoZSBxdWVyeSBzdHJpbmcuXHJcbiAqXHJcbiAqXHR2YXIgdXJsID0gXCJodHRwczovL3d3dy54eXouY29tP25hbWU9TmVvJmFnZT0yM1wiO1xyXG4gKlx0cGFyc2VRdWVyeVN0cmluZyh1cmwpOyAvLyBPYmplY3Qge25hbWU6IFwiTmVvXCIsIGFnZTogXCIyM1wifVxyXG4gKlxyXG4gKiBAcGFyYW0gdXJsIFVSTCB0byBiZSBwYXJzZWQuXHJcbiAqXHJcbiAqIEByZXR1cm5zIE9iamVjdCBjcmVhdGVkIGZyb20gdGhlIHF1ZXJ5IHN0cmluZy5cclxuICovXHJcblxyXG5jb25zdCBwYXJzZVF1ZXJ5U3RyaW5nID0gZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZyh1cmw6IHN0cmluZyk6IE9iamVjdCB7XHJcbiAgICBjb25zdCBxU3RhcnQ6IG51bWJlciA9IHVybC5pbmRleE9mKFwiP1wiKTtcclxuICAgIGNvbnN0IHF1ZXJ5OiBzdHJpbmcgPSBxU3RhcnQgPCAwID8gdXJsIDogdXJsLnN1YnN0cmluZyhxU3RhcnQgKyAxKTtcclxuICAgIGNvbnN0IHBhaXJzOiBzdHJpbmdbXSA9ICgocXVlcnkgfHwgXCJcIikucmVwbGFjZSgvXlxcPy8sIFwiXCIpLnNwbGl0KC8mLykpO1xyXG4gICAgY29uc3QgbGVuOiBudW1iZXIgPSBwYWlycy5sZW5ndGg7XHJcbiAgICBjb25zdCByZXN1bHQ6IE9iamVjdCA9IHt9O1xyXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcGFpcjogc3RyaW5nID0gZGVjb2RlKHBhaXJzW2ldKTtcclxuICAgICAgICBjb25zdCBuYW1lOiBzdHJpbmcgPSBwYWlyLnN1YnN0cmluZygwLCBwYWlyLmluZGV4T2YoXCI9XCIpKTtcclxuICAgICAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gcGFpci5zdWJzdHJpbmcocGFpci5pbmRleE9mKFwiPVwiKSArIDEpO1xyXG4gICAgICAgIGlmIChyZXN1bHRbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXN1bHRbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG5hbWUgY2FuIGFwcGVhciBtb3JlIHRoYW4gb25jZSBpbiBxdWVyeSBzdHJpbmcuLlxyXG4gICAgICAgIC8vIGhlcmUgd2Ugd2lsbCBjcmVhdGUgYW4gYXJyYXlcclxuICAgICAgICBpZiAoIVR5cGUuaXNPYmplY3QocmVzdWx0W25hbWVdKSkgey8vIGNvbnZlcnQgdG8gYXJyYXlcclxuICAgICAgICAgICAgcmVzdWx0W25hbWVdID0gW3Jlc3VsdFtuYW1lXV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdFtuYW1lXS5wdXNoKHZhbHVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG4vKipcclxuICogRW5jb2RlcyBhIFVSSS5cclxuICpcclxuICogQHBhcmFtIHZhbHVlIFVSSSB0byBiZSBlbmNvZGVkLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBFbmNvZGVkIFVSSS5cclxuICovXHJcbmNvbnN0IGVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIERlY29kZXMgYSBVUkkuXHJcbiAqXHJcbiAqIEBwYXJhbSB2YWx1ZSBVUkkgdG8gYmUgZGVjb2RlZC4gUmVwbGFjZXMgKywgQCwgOiBhbmQgJC5cclxuICpcclxuICogQHJldHVybnMgVVJJLlxyXG4gKi9cclxuY29uc3QgZGVjb2RlID0gZnVuY3Rpb24gZGVjb2RlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZS5yZXBsYWNlKC9cXCsvZywgXCIlMjBcIilcclxuICAgICAgICAucmVwbGFjZSgvQC9nLCBcIiU0MFwiKS5yZXBsYWNlKC86L2csIFwiJTNBXCIpLnJlcGxhY2UoL1xcJC9nLCBcIiUyNFwiKSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwYXJzZVF1ZXJ5U3RyaW5nLCBlbmNvZGUsIGRlY29kZVxyXG59O1xyXG4iXX0=
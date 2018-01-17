"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EMPTY_STRING = "";
var EMPTY_OBJ = null;
/**
 * Restores the original object from its serialized string version.
 *
 * @param param The string to be deserialized.
 *
 * @returns The object if successful, otherwise throws an error.
 */
var deserialize = function deserialize(param) {
    if (!param) {
        return EMPTY_OBJ;
    }
    param = param.replace(/\n/g, "\\n")
        .replace(/\r/g, "\\r")
        .replace(/\t/g, "\\t")
        .replace(/\f/g, "\\f");
    return JSON.parse(param);
};
/**
 * Converts the given object to a string representation that can be stored
 * locally or transmitted along the network and can later be used to reconstruct
 * the original object.
 *
 * @param param The object to be serialized.
 *
 * @returns The string representation of the object.
 */
var serialize = function serialize(param) {
    if (!param) {
        return EMPTY_STRING;
    }
    return JSON.stringify(param);
};
/**
 * Attempts to restore the original object from its serialized version.
 *
 * @param param The string to be deserialized.
 *
 * @returns The object if successful, otherwise returns undefined.
 */
var tryDeserialize = function tryDeserialize(param) {
    var result;
    try {
        result = deserialize(param);
    }
    catch (e) {
        result = undefined;
    }
    return result;
};
exports.default = {
    deserialize: deserialize, serialize: serialize, tryDeserialize: tryDeserialize
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImpzb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFlBQVksR0FBVyxFQUFFLENBQUM7QUFDaEMsSUFBTSxTQUFTLEdBQVMsSUFBSSxDQUFDO0FBRTdCOzs7Ozs7R0FNRztBQUNILElBQU0sV0FBVyxHQUFHLHFCQUFxQixLQUFhO0lBQ2xELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNULE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUNELEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7U0FDOUIsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7U0FDckIsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7U0FDckIsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QixDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7R0FRRztBQUNILElBQU0sU0FBUyxHQUFHLG1CQUFtQixLQUFVO0lBQzNDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNULE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDeEIsQ0FBQztJQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQztBQUVGOzs7Ozs7R0FNRztBQUNILElBQU0sY0FBYyxHQUFHLHdCQUF3QixLQUFhO0lBQ3hELElBQUksTUFBVyxDQUFDO0lBQ2hCLElBQUksQ0FBQztRQUNELE1BQU0sR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDVCxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUVGLGtCQUFlO0lBQ1gsV0FBVyxhQUFBLEVBQUUsU0FBUyxXQUFBLEVBQUUsY0FBYyxnQkFBQTtDQUN6QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRU1QVFlfU1RSSU5HOiBzdHJpbmcgPSBcIlwiO1xyXG5jb25zdCBFTVBUWV9PQko6IG51bGwgPSBudWxsO1xyXG5cclxuLyoqXHJcbiAqIFJlc3RvcmVzIHRoZSBvcmlnaW5hbCBvYmplY3QgZnJvbSBpdHMgc2VyaWFsaXplZCBzdHJpbmcgdmVyc2lvbi5cclxuICpcclxuICogQHBhcmFtIHBhcmFtIFRoZSBzdHJpbmcgdG8gYmUgZGVzZXJpYWxpemVkLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBUaGUgb2JqZWN0IGlmIHN1Y2Nlc3NmdWwsIG90aGVyd2lzZSB0aHJvd3MgYW4gZXJyb3IuXHJcbiAqL1xyXG5jb25zdCBkZXNlcmlhbGl6ZSA9IGZ1bmN0aW9uIGRlc2VyaWFsaXplKHBhcmFtOiBzdHJpbmcpOiBPYmplY3QgfCBudWxsIHtcclxuICAgIGlmICghcGFyYW0pIHtcclxuICAgICAgICByZXR1cm4gRU1QVFlfT0JKO1xyXG4gICAgfVxyXG4gICAgcGFyYW0gPSBwYXJhbS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXHIvZywgXCJcXFxcclwiKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXHQvZywgXCJcXFxcdFwiKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXGYvZywgXCJcXFxcZlwiKTtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKHBhcmFtKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aGUgZ2l2ZW4gb2JqZWN0IHRvIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIHRoYXQgY2FuIGJlIHN0b3JlZFxyXG4gKiBsb2NhbGx5IG9yIHRyYW5zbWl0dGVkIGFsb25nIHRoZSBuZXR3b3JrIGFuZCBjYW4gbGF0ZXIgYmUgdXNlZCB0byByZWNvbnN0cnVjdFxyXG4gKiB0aGUgb3JpZ2luYWwgb2JqZWN0LlxyXG4gKlxyXG4gKiBAcGFyYW0gcGFyYW0gVGhlIG9iamVjdCB0byBiZSBzZXJpYWxpemVkLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBUaGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3QuXHJcbiAqL1xyXG5jb25zdCBzZXJpYWxpemUgPSBmdW5jdGlvbiBzZXJpYWxpemUocGFyYW06IGFueSk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXBhcmFtKSB7XHJcbiAgICAgICAgcmV0dXJuIEVNUFRZX1NUUklORztcclxuICAgIH1cclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShwYXJhbSk7XHJcbn07XHJcblxyXG4vKipcclxuICogQXR0ZW1wdHMgdG8gcmVzdG9yZSB0aGUgb3JpZ2luYWwgb2JqZWN0IGZyb20gaXRzIHNlcmlhbGl6ZWQgdmVyc2lvbi5cclxuICpcclxuICogQHBhcmFtIHBhcmFtIFRoZSBzdHJpbmcgdG8gYmUgZGVzZXJpYWxpemVkLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBUaGUgb2JqZWN0IGlmIHN1Y2Nlc3NmdWwsIG90aGVyd2lzZSByZXR1cm5zIHVuZGVmaW5lZC5cclxuICovXHJcbmNvbnN0IHRyeURlc2VyaWFsaXplID0gZnVuY3Rpb24gdHJ5RGVzZXJpYWxpemUocGFyYW06IHN0cmluZyk6IGFueSB7XHJcbiAgICBsZXQgcmVzdWx0OiBhbnk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJlc3VsdCA9IGRlc2VyaWFsaXplKHBhcmFtKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXN1bHQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGVzZXJpYWxpemUsIHNlcmlhbGl6ZSwgdHJ5RGVzZXJpYWxpemVcclxufTtcclxuIl19
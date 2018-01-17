"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Checks whether an arguments is null.
 *
 * @param The values to be checked.
 *
 * @returns true if any argument is null.
 */
var isNull = function isNull() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 0) {
        return true;
    }
    var len = args.length;
    for (var i = 0; i < len; i++) {
        var obj = args[i];
        if (obj === undefined || obj === null) {
            return true;
        }
    }
    return false;
};
/**
 * Checks whether all of the provided arguments are NOT null.
 *
 * @param values to be checked.
 *
 * @returns true if all arguments are NOT null.
 */
var isNotNull = function isNotNull() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return !isNull.apply(undefined, args); // forward args
};
/**
 * Checks whether any of the provided arguments are empty.
 *
 * @param Values to be checked.
 *
 * @returns true if any argument is empty.
 */
var isEmpty = function isEmpty() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (isNull.apply(undefined, args)) {
        return true;
    }
    var len = args.length;
    for (var i = 0; i < len; i++) {
        if (emptyInternal(args[i])) {
            return true;
        }
    }
    return false;
};
/**
 * @private
 */
var emptyInternal = function emptyInternal(obj) {
    if (typeof (obj) === "object") {
        /* Objects like Number, Date, Boolean
         * are never null.
         * Since they contain only non enumerable
         * properties, they can never be caught in
         * the property for..in loop in _isEmptyObj
         */
        if (hasEnumerablePropertiesInternal(obj)) {
            return isEmptyObjInternal(obj);
        }
        return false;
    }
    else {
        return obj.length === 0;
    }
};
var isEmptyObjInternal = function isEmptyObjInternal(obj) {
    for (var name_1 in obj) {
        if (obj.hasOwnProperty(name_1)) {
            return false;
        }
    }
    return true;
};
var hasEnumerablePropertiesInternal = function hasEnumerablePropertiesInternal(obj) {
    return !(obj instanceof Date || typeof (obj) === "boolean" || typeof (obj) === "number");
};
/**
 * Gives the first non-null value in the arguments list.
 *
 * @param Values to be checked.
 *
 * @returns Returns the first non-null value in the arguments list.
 */
var coalesce = function coalesce() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 0) {
        return null;
    }
    var len = args.length;
    var arg = null;
    for (var i = 0; i < len; i++) {
        arg = args[i];
        if (isNotNull(arg)) {
            break;
        }
    }
    return arg;
};
/**
 * Generate a pseudo-GUID by concatinating random hexadecimal.
 *
 *      guid();// f4487005-82e9-96fd-fd7b-11b20dced4cf
 *
 * @returns GUID.
 */
var guid = function guid() {
    return (rndHexInternal() + rndHexInternal() + "-" + rndHexInternal() + "-" + rndHexInternal() + "-" + rndHexInternal() + "-" + rndHexInternal() + rndHexInternal() + rndHexInternal());
};
var rndHexInternal = function rndHexInternal() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};
exports.default = {
    isNull: isNull, isNotNull: isNotNull, isEmpty: isEmpty, coalesce: coalesce, guid: guid
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0dBTUc7QUFDSCxJQUFNLE1BQU0sR0FBRztJQUFnQixjQUFjO1NBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztRQUFkLHlCQUFjOztJQUN6QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0QsSUFBTSxHQUFHLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNoQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ25DLElBQU0sR0FBRyxHQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQUVGOzs7Ozs7R0FNRztBQUNILElBQU0sU0FBUyxHQUFHO0lBQW1CLGNBQWM7U0FBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1FBQWQseUJBQWM7O0lBQy9DLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZTtBQUMxRCxDQUFDLENBQUM7QUFFRjs7Ozs7O0dBTUc7QUFDSCxJQUFNLE9BQU8sR0FBRztJQUFpQixjQUFjO1NBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztRQUFkLHlCQUFjOztJQUMzQyxFQUFFLENBQUMsQ0FB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RSxHQUFHLEdBQUcsR0FBRyxjQUFjLEVBQUUsR0FBRyxHQUFHLEdBQUcsY0FBYyxFQUFFLEdBQUcsY0FBYyxFQUFFLEdBQUcsY0FBYyxFQUFFLENBQUMsQ0FBQztBQUMzTCxDQUFDLENBQUM7QUFFRixJQUFNLGNBQWMsR0FBRztJQUNuQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0UsQ0FBQyxDQUFDO0FBRUYsa0JBQWU7SUFDWCxNQUFNLFFBQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxJQUFJLE1BQUE7Q0FDN0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgYW4gYXJndW1lbnRzIGlzIG51bGwuXG4gKlxuICogQHBhcmFtIFRoZSB2YWx1ZXMgdG8gYmUgY2hlY2tlZC5cbiAqXG4gKiBAcmV0dXJucyB0cnVlIGlmIGFueSBhcmd1bWVudCBpcyBudWxsLlxuICovXG5jb25zdCBpc051bGwgPSBmdW5jdGlvbiBpc051bGwoLi4uYXJnczogYW55W10pOiBib29sZWFuIHtcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGxlbjogbnVtYmVyID0gYXJncy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG9iajogYW55ID0gYXJnc1tpXTtcbiAgICAgICAgaWYgKG9iaiA9PT0gdW5kZWZpbmVkIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBhbGwgb2YgdGhlIHByb3ZpZGVkIGFyZ3VtZW50cyBhcmUgTk9UIG51bGwuXG4gKlxuICogQHBhcmFtIHZhbHVlcyB0byBiZSBjaGVja2VkLlxuICpcbiAqIEByZXR1cm5zIHRydWUgaWYgYWxsIGFyZ3VtZW50cyBhcmUgTk9UIG51bGwuXG4gKi9cbmNvbnN0IGlzTm90TnVsbCA9IGZ1bmN0aW9uIGlzTm90TnVsbCguLi5hcmdzOiBhbnlbXSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhaXNOdWxsLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7IC8vIGZvcndhcmQgYXJnc1xufTtcblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBhbnkgb2YgdGhlIHByb3ZpZGVkIGFyZ3VtZW50cyBhcmUgZW1wdHkuXG4gKlxuICogQHBhcmFtIFZhbHVlcyB0byBiZSBjaGVja2VkLlxuICpcbiAqIEByZXR1cm5zIHRydWUgaWYgYW55IGFyZ3VtZW50IGlzIGVtcHR5LlxuICovXG5jb25zdCBpc0VtcHR5ID0gZnVuY3Rpb24gaXNFbXB0eSguLi5hcmdzOiBhbnlbXSk6IGJvb2xlYW4ge1xuICAgIGlmIChpc051bGwuYXBwbHkodW5kZWZpbmVkLCBhcmdzKSkgey8vIGZvcndhcmQgYXJnc1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY29uc3QgbGVuOiBudW1iZXIgPSBhcmdzLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGVtcHR5SW50ZXJuYWwoYXJnc1tpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGVtcHR5SW50ZXJuYWwgPSBmdW5jdGlvbiBlbXB0eUludGVybmFsKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiAob2JqKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAvKiBPYmplY3RzIGxpa2UgTnVtYmVyLCBEYXRlLCBCb29sZWFuXG4gICAgICAgICAqIGFyZSBuZXZlciBudWxsLlxuICAgICAgICAgKiBTaW5jZSB0aGV5IGNvbnRhaW4gb25seSBub24gZW51bWVyYWJsZVxuICAgICAgICAgKiBwcm9wZXJ0aWVzLCB0aGV5IGNhbiBuZXZlciBiZSBjYXVnaHQgaW5cbiAgICAgICAgICogdGhlIHByb3BlcnR5IGZvci4uaW4gbG9vcCBpbiBfaXNFbXB0eU9ialxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKGhhc0VudW1lcmFibGVQcm9wZXJ0aWVzSW50ZXJuYWwob2JqKSkge1xuICAgICAgICAgICAgcmV0dXJuIGlzRW1wdHlPYmpJbnRlcm5hbChvYmopO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gb2JqLmxlbmd0aCA9PT0gMDtcbiAgICB9XG59O1xuXG5jb25zdCBpc0VtcHR5T2JqSW50ZXJuYWwgPSBmdW5jdGlvbiBpc0VtcHR5T2JqSW50ZXJuYWwob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICBmb3IgKGNvbnN0IG5hbWUgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IGhhc0VudW1lcmFibGVQcm9wZXJ0aWVzSW50ZXJuYWwgPSBmdW5jdGlvbiBoYXNFbnVtZXJhYmxlUHJvcGVydGllc0ludGVybmFsKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEob2JqIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgKG9iaikgPT09IFwiYm9vbGVhblwiIHx8IHR5cGVvZiAob2JqKSA9PT0gXCJudW1iZXJcIik7XG59O1xuLyoqXG4gKiBHaXZlcyB0aGUgZmlyc3Qgbm9uLW51bGwgdmFsdWUgaW4gdGhlIGFyZ3VtZW50cyBsaXN0LlxuICpcbiAqIEBwYXJhbSBWYWx1ZXMgdG8gYmUgY2hlY2tlZC5cbiAqXG4gKiBAcmV0dXJucyBSZXR1cm5zIHRoZSBmaXJzdCBub24tbnVsbCB2YWx1ZSBpbiB0aGUgYXJndW1lbnRzIGxpc3QuXG4gKi9cbmNvbnN0IGNvYWxlc2NlID0gZnVuY3Rpb24gY29hbGVzY2UoLi4uYXJnczogYW55W10pOiBhbnkge1xuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgbGVuOiBudW1iZXIgPSBhcmdzLmxlbmd0aDtcbiAgICBsZXQgYXJnOiBhbnkgPSBudWxsO1xuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBhcmcgPSBhcmdzW2ldO1xuICAgICAgICBpZiAoaXNOb3ROdWxsKGFyZykpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcmc7XG59O1xuLyoqXG4gKiBHZW5lcmF0ZSBhIHBzZXVkby1HVUlEIGJ5IGNvbmNhdGluYXRpbmcgcmFuZG9tIGhleGFkZWNpbWFsLlxuICpcbiAqICAgICAgZ3VpZCgpOy8vIGY0NDg3MDA1LTgyZTktOTZmZC1mZDdiLTExYjIwZGNlZDRjZlxuICpcbiAqIEByZXR1cm5zIEdVSUQuXG4gKi9cbmNvbnN0IGd1aWQgPSBmdW5jdGlvbiBndWlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChybmRIZXhJbnRlcm5hbCgpICsgcm5kSGV4SW50ZXJuYWwoKSArIFwiLVwiICsgcm5kSGV4SW50ZXJuYWwoKSArIFwiLVwiICsgcm5kSGV4SW50ZXJuYWwoKSArIFwiLVwiICsgcm5kSGV4SW50ZXJuYWwoKSArIFwiLVwiICsgcm5kSGV4SW50ZXJuYWwoKSArIHJuZEhleEludGVybmFsKCkgKyBybmRIZXhJbnRlcm5hbCgpKTtcbn07XG5cbmNvbnN0IHJuZEhleEludGVybmFsID0gZnVuY3Rpb24gcm5kSGV4SW50ZXJuYWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKCgoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMCkgfCAwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGlzTnVsbCwgaXNOb3ROdWxsLCBpc0VtcHR5LCBjb2FsZXNjZSwgZ3VpZFxufTtcbiJdfQ==
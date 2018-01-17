"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("./core");
/**
 * Checks whether the argument is an Object.
 *
 * @param obj The value to be checked.
 *
 * @retuns Returns true if the argument is an Object.
 */
var isObject = function isObject(obj) {
    return typeof (obj) === "object";
};
/**
 * Checks whether the argument is a function.
 *
 * @param fn The value to be checked.
 *
 * @returns Returns true if the variable is a Function.
 */
var isFunction = function isFunction(fn) {
    return typeof (fn) === "function";
};
/**
 * Checks whether the argument is a Number.
 *
 * @param num The value to be checked.
 * @param strict If true strict checking is done i.e. "5" is not equal to 5.
 *
 * @returns Returns true if the argument is number.
 */
var isNumber = function isNumber(num, strict) {
    if (core_1.default.isNotNull(num)) {
        return strict ? typeof num === "number" : !isNaN(num);
    }
    return false;
};
/**
 * Checks whether the argument is a String.
 *
 * @param val The value to be checked.
 *
 * @returns Returns true if the variable is an String.
 */
var isString = function isString(val) {
    return typeof val === "string";
};
/**
 * Checks whether the argument is boolean.
 *
 * @param obj The value to be checked.
 *
 * @returns Returns true if the variable is boolean.
 */
var isBoolean = function isBoolean(obj) {
    return typeof (obj) === "boolean";
};
/**
 * Checks whether the argument is an Array.
 *
 * @param  The value to be checked.
 *
 * @returns Returns true if all arguments are arrays.
 */
var isArray = function isArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 0) {
        return false;
    }
    var len = args.length;
    var out = false;
    for (var i = 0; i < len; i++) {
        var obj = args[i];
        out = Array.isArray(obj);
        if (!out) {
            break;
        }
    }
    return out;
};
/**
 * Checks whether the argument is an POJO.
 *
 * @param  The value to be checked.
 *
 * @returns Returns true if all arguments are POJO.
 */
var isPOJO = function isPOJO() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length === 0) {
        return false;
    }
    var len = args.length;
    var out = false;
    for (var i = 0; i < len; i++) {
        var obj = args[i];
        out = isPOJOInternal(obj);
        if (!out) {
            break;
        }
    }
    return out;
};
var isPOJOInternal = function isPOJOInternal(obj) {
    if (core_1.default.isNotNull(obj)) {
        return obj && ((obj.constructor && obj.constructor.name === "Object")
            || Object.prototype.toString.call(obj) === "[object Object]");
    }
    return false;
};
/**
 * Checks whether the argument is a Promise.
 *
 * @param  The value to be checked.
 *
 * @returns Returns true if the variable is a Promise.
 */
var isPromise = function isPromise(obj) {
    if (core_1.default.isNotNull(obj)) {
        return obj && obj.hasOwnProperty("then") && isFunction(obj.then);
    }
    return false;
};
/*
 * @returns T & U an intersection type combines multiple types into one.
 */
var extend = function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
};
exports.default = {
    isObject: isObject, isFunction: isFunction, isNumber: isNumber, isString: isString, isBoolean: isBoolean, isArray: isArray, isPOJO: isPOJO, isPromise: isPromise,
    extend: extend
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBMEI7QUFDMUI7Ozs7OztHQU1HO0FBQ0gsSUFBTSxRQUFRLEdBQUcsa0JBQWtCLEdBQVE7SUFDdkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLENBQUM7QUFDckMsQ0FBQyxDQUFDO0FBRUY7Ozs7OztHQU1HO0FBQ0gsSUFBTSxVQUFVLEdBQUcsb0JBQW9CLEVBQU87SUFDMUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxVQUFVLENBQUM7QUFDdEMsQ0FBQyxDQUFDO0FBQ0Y7Ozs7Ozs7R0FPRztBQUNILElBQU0sUUFBUSxHQUFHLGtCQUFrQixHQUFRLEVBQUUsTUFBZ0I7SUFDekQsRUFBRSxDQUFDLENBQUMsY0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsS0FBSyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBQ0Y7Ozs7OztHQU1HO0FBQ0gsSUFBTSxRQUFRLEdBQUcsa0JBQWtCLEdBQVE7SUFDdkMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQztBQUNuQyxDQUFDLENBQUM7QUFFRjs7Ozs7O0dBTUc7QUFDSCxJQUFNLFNBQVMsR0FBRyxtQkFBbUIsR0FBUTtJQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsQ0FBQztBQUN0QyxDQUFDLENBQUM7QUFFRjs7Ozs7O0dBTUc7QUFDSCxJQUFNLE9BQU8sR0FBRztJQUFpQixjQUFjO1NBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztRQUFkLHlCQUFjOztJ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QUFDO0lBQzNDLENBQUM7SUFDRCxHQUFHLENBQUMsQ0FBQyxJQUFNLEVBQUUsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTyxDQUFDLEVBQUUsQ0FBQyxHQUFVLE1BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QyxDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUYsa0JBQWU7SUFDWCxRQUFRLFVBQUEsRUFBRSxVQUFVLFlBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxTQUFTLFdBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxTQUFTLFdBQUE7SUFDL0UsTUFBTSxRQUFBO0NBQ1QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb3JlIGZyb20gXCIuL2NvcmVcIjtcbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIGFyZ3VtZW50IGlzIGFuIE9iamVjdC5cbiAqXG4gKiBAcGFyYW0gb2JqIFRoZSB2YWx1ZSB0byBiZSBjaGVja2VkLlxuICpcbiAqIEByZXR1bnMgUmV0dXJucyB0cnVlIGlmIHRoZSBhcmd1bWVudCBpcyBhbiBPYmplY3QuXG4gKi9cbmNvbnN0IGlzT2JqZWN0ID0gZnVuY3Rpb24gaXNPYmplY3Qob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIChvYmopID09PSBcIm9iamVjdFwiO1xufTtcblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgYXJndW1lbnQgaXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gZm4gVGhlIHZhbHVlIHRvIGJlIGNoZWNrZWQuXG4gKlxuICogQHJldHVybnMgUmV0dXJucyB0cnVlIGlmIHRoZSB2YXJpYWJsZSBpcyBhIEZ1bmN0aW9uLlxuICovXG5jb25zdCBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbihmbjogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiAoZm4pID09PSBcImZ1bmN0aW9uXCI7XG59O1xuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgYXJndW1lbnQgaXMgYSBOdW1iZXIuXG4gKlxuICogQHBhcmFtIG51bSBUaGUgdmFsdWUgdG8gYmUgY2hlY2tlZC5cbiAqIEBwYXJhbSBzdHJpY3QgSWYgdHJ1ZSBzdHJpY3QgY2hlY2tpbmcgaXMgZG9uZSBpLmUuIFwiNVwiIGlzIG5vdCBlcXVhbCB0byA1LlxuICpcbiAqIEByZXR1cm5zIFJldHVybnMgdHJ1ZSBpZiB0aGUgYXJndW1lbnQgaXMgbnVtYmVyLlxuICovXG5jb25zdCBpc051bWJlciA9IGZ1bmN0aW9uIGlzTnVtYmVyKG51bTogYW55LCBzdHJpY3Q/OiBib29sZWFuKTogYm9vbGVhbiB7XG4gICAgaWYgKENvcmUuaXNOb3ROdWxsKG51bSkpIHtcbiAgICAgICAgcmV0dXJuIHN0cmljdCA/IHR5cGVvZiBudW0gPT09IFwibnVtYmVyXCIgOiAhaXNOYU4obnVtKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIGFyZ3VtZW50IGlzIGEgU3RyaW5nLlxuICpcbiAqIEBwYXJhbSB2YWwgVGhlIHZhbHVlIHRvIGJlIGNoZWNrZWQuXG4gKlxuICogQHJldHVybnMgUmV0dXJucyB0cnVlIGlmIHRoZSB2YXJpYWJsZSBpcyBhbiBTdHJpbmcuXG4gKi9cbmNvbnN0IGlzU3RyaW5nID0gZnVuY3Rpb24gaXNTdHJpbmcodmFsOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIjtcbn07XG5cbi8qKlxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIGFyZ3VtZW50IGlzIGJvb2xlYW4uXG4gKlxuICogQHBhcmFtIG9iaiBUaGUgdmFsdWUgdG8gYmUgY2hlY2tlZC5cbiAqXG4gKiBAcmV0dXJucyBSZXR1cm5zIHRydWUgaWYgdGhlIHZhcmlhYmxlIGlzIGJvb2xlYW4uXG4gKi9cbmNvbnN0IGlzQm9vbGVhbiA9IGZ1bmN0aW9uIGlzQm9vbGVhbihvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgKG9iaikgPT09IFwiYm9vbGVhblwiO1xufTtcblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgYXJndW1lbnQgaXMgYW4gQXJyYXkuXG4gKlxuICogQHBhcmFtICBUaGUgdmFsdWUgdG8gYmUgY2hlY2tlZC5cbiAqXG4gKiBAcmV0dXJucyBSZXR1cm5zIHRydWUgaWYgYWxsIGFyZ3VtZW50cyBhcmUgYXJyYXlzLlxuICovXG5jb25zdCBpc0FycmF5ID0gZnVuY3Rpb24gaXNBcnJheSguLi5hcmdzOiBhbnlbXSk6IGJvb2xlYW4ge1xuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGxlbjogbnVtYmVyID0gYXJncy5sZW5ndGg7XG4gICAgbGV0IG91dDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBvYmo6IGFueSA9IGFyZ3NbaV07XG4gICAgICAgIG91dCA9IEFycmF5LmlzQXJyYXkob2JqKTtcbiAgICAgICAgaWYgKCFvdXQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG59O1xuLyoqXG4gKiBDaGVja3Mgd2hldGhlciB0aGUgYXJndW1lbnQgaXMgYW4gUE9KTy5cbiAqXG4gKiBAcGFyYW0gIFRoZSB2YWx1ZSB0byBiZSBjaGVja2VkLlxuICpcbiAqIEByZXR1cm5zIFJldHVybnMgdHJ1ZSBpZiBhbGwgYXJndW1lbnRzIGFyZSBQT0pPLlxuICovXG5jb25zdCBpc1BPSk8gPSBmdW5jdGlvbiBpc1BPSk8oLi4uYXJnczogYW55W10pOiBib29sZWFuIHtcbiAgICBpZiAoYXJncy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBsZW46IG51bWJlciA9IGFyZ3MubGVuZ3RoO1xuICAgIGxldCBvdXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSBhcmdzW2ldO1xuICAgICAgICBvdXQgPSBpc1BPSk9JbnRlcm5hbChvYmopO1xuICAgICAgICBpZiAoIW91dCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn07XG5cbmNvbnN0IGlzUE9KT0ludGVybmFsID0gZnVuY3Rpb24gaXNQT0pPSW50ZXJuYWwob2JqOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAoQ29yZS5pc05vdE51bGwob2JqKSkge1xuICAgICAgICByZXR1cm4gb2JqICYmICgob2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIk9iamVjdFwiKVxuICAgICAgICAgICAgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBPYmplY3RdXCIpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIHRoZSBhcmd1bWVudCBpcyBhIFByb21pc2UuXG4gKlxuICogQHBhcmFtICBUaGUgdmFsdWUgdG8gYmUgY2hlY2tlZC5cbiAqXG4gKiBAcmV0dXJucyBSZXR1cm5zIHRydWUgaWYgdGhlIHZhcmlhYmxlIGlzIGEgUHJvbWlzZS5cbiAqL1xuY29uc3QgaXNQcm9taXNlID0gZnVuY3Rpb24gaXNQcm9taXNlKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKENvcmUuaXNOb3ROdWxsKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiBvYmouaGFzT3duUHJvcGVydHkoXCJ0aGVuXCIpICYmIGlzRnVuY3Rpb24ob2JqLnRoZW4pO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKlxuICogQHJldHVybnMgVCAmIFUgYW4gaW50ZXJzZWN0aW9uIHR5cGUgY29tYmluZXMgbXVsdGlwbGUgdHlwZXMgaW50byBvbmUuXG4gKi9cbmNvbnN0IGV4dGVuZCA9IGZ1bmN0aW9uIGV4dGVuZDxULCBVPihmaXJzdDogVCwgc2Vjb25kOiBVKTogVCAmIFUge1xuICAgIGNvbnN0IHJlc3VsdCA9IDxUICYgVT4ge307XG4gICAgZm9yIChjb25zdCBpZCBpbiBmaXJzdCkge1xuICAgICAgICAoPGFueT4gcmVzdWx0KVtpZF0gPSAoPGFueT4gZmlyc3QpW2lkXTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBpZCBpbiBzZWNvbmQpIHtcbiAgICAgICAgaWYgKCFyZXN1bHQuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAgICAgICAoPGFueT4gcmVzdWx0KVtpZF0gPSAoPGFueT4gc2Vjb25kKVtpZF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpc09iamVjdCwgaXNGdW5jdGlvbiwgaXNOdW1iZXIsIGlzU3RyaW5nLCBpc0Jvb2xlYW4sIGlzQXJyYXksIGlzUE9KTywgaXNQcm9taXNlLFxuICAgIGV4dGVuZFxufTtcbiJdfQ==
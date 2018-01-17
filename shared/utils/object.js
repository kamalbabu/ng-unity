"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("./core");
var type_1 = require("./type");
var json_1 = require("./json");
/**
 * Freezes an Object  that is, prevents new properties from being added to it,
 * prevents existing properties from being removed; and prevents any properties from being changed.
 *
 * @param target Object to be  frozen.
 * @param deep determines whether nested objects is to be frozen.
 * If true nested objects will be frozen.
 *
 * @returns Frozen object.
 */
var freeze = function freeze(target, deep) {
    var prop;
    var propKey;
    target = Object.freeze(target); // First freeze the object.
    if (deep) {
        for (propKey in target) {
            prop = target[propKey];
            if (!target.hasOwnProperty(propKey) || !type_1.default.isObject(prop) ||
                Object.isFrozen(prop)) {
                continue;
            }
            target[propKey] = freeze(prop, deep); // Recursively call deepFreeze.
        }
    }
    return target;
};
/*
* Helper to create a property on an object.
*
* @param  target The object where property will be created.
* @param  name Name of the property.
* @param  value Value for the property.
* @param  isReadOnly true to prevent modification to value. Default is false.
* @param  isPrivate true to prevent property from being enumerated. Default is false.
* @param  isTransient true to allow property to be modified. Default is false.
*/
var defineProperty = function defineProperty(target, name, value, isReadOnly, isPrivate, isTransient) {
    if (core_1.default.isNull(target, name)) {
        return;
    }
    if (!target.hasOwnProperty(name)) {
        Object.defineProperty(target, name, {
            value: value, configurable: !isTransient, writable: !isReadOnly,
            enumerable: !isPrivate
        });
    }
};
/*
* Helper to create custom accessors on an object.
*
* @param  target The object where property will be created.
* @param  name Name of the property.
* @param  getter A function which serves as a getter for the property.Default is undefined.
* @param  setter A function which serves as a setter for the property.Default is undefined.
* @param  isPrivate true to prevent property from being enumerated. Default is false.
* @param  isTransient true to allow property to be modified. Default is false.
*/
var defineAccessors = function defineAccessors(target, name, getter, setter, isPrivate, isTransient) {
    if (core_1.default.isNull(target, name)) {
        return;
    }
    var descriptor = {
        enumerable: !isPrivate,
        configurable: core_1.default.isNull(isTransient) ? true : isTransient,
        get: getter ? getter : null,
        set: setter ? setter : null
    };
    Object.defineProperty(target, name, descriptor);
};
/**
 * Checks whether the object has specified properties .
 *
 * @param obj Object.
 * @param props Property to be checked if it exists on obj.Can be single or array of properties.
 *
 * @returns True if all the properties are found on the object.
 */
var hasProp = function hasProp(obj) {
    var props = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        props[_i - 1] = arguments[_i];
    }
    if (core_1.default.isNull(obj, props)) {
        return false;
    }
    var len = props.length;
    for (var i = 0; i < len; i++) {
        if (!obj.hasOwnProperty(props[i])) {
            return false;
        }
    }
    return true;
};
/**
 * Allows us to read/modify properties of an object.
 *
 * If the function is called with two arguments,
 * it reads the property. If the function is called with three
 * arguments it writes the property.
 *
 *	var obj = { "name" : "Jaison" };
 *	value(obj, "name"); //gives "Jaison"
 *	value(obj, "name", "Kamal"); //modifies the property
 *
 * @param src The object to work with.
 * @param prop The property to be read/modified.
 * @param value The value to set to the property.
 *
 * @returns The value of the property when called with two arguments. `undefined`
 * if called with three arguments.
 */
var value = function value(src, prop, newValue) {
    if (core_1.default.isNull(src, prop)) {
        return undefined;
    }
    var props = prop.indexOf(".") > 0 ? prop.split(".") : [prop];
    var len = props.length;
    var isSetter = newValue !== undefined;
    var target = src;
    for (var i = 0; i < len; i++) {
        var propName = props[i];
        var end = i === len - 1;
        if (!target.hasOwnProperty(propName)) {
            if (!isSetter) {
                return undefined;
            }
            else if (!end) {
                target[propName] = {};
            }
        }
        if (end && isSetter) {
            target[propName] = newValue;
            return undefined;
        }
        target = target[propName];
    }
    return target;
};
var values = function (src) {
    var out = [];
    for (var key in src) {
        out.push(src[key]);
    }
    return out;
};
/**
 * Clones the given Object.
 *
 * @param obj Object to be cloned.
 * @param deep True if deep cloning is to be done.
 *
 * @returns Returns the cloned Object.
 */
var clone = function clone(obj, deep) {
    if (core_1.default.isNull(obj) || !type_1.default.isObject(obj)) {
        return obj;
    }
    var target = obj.constructor ? obj.constructor() : {};
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) {
            continue;
        }
        target[i] = deep && type_1.default.isPOJO(obj[i]) ? clone(obj[i], deep) : obj[i];
    }
    return target;
};
/**
 * Clones the Object by serializing and deserializing as JSON.
 *
 * @param obj Object to be cloned.
 *
 * @returns Cloned Object.
 */
var cloneX = function cloneX(obj) {
    if (core_1.default.isNull(obj) || !type_1.default.isObject(obj)) {
        return obj;
    }
    /* serialize and deserialize as JSON to create a new object*/
    return json_1.default.deserialize(json_1.default.serialize(obj));
};
/**
 * Performs a deep comparison between two values, to determine if they should be considered equal.
 *
 *      let a = {name: "moe", luckyNumbers: [13, 27, 34]};
 *      let b  = {name: "moe", luckyNumbers: [13, 27, 34]};
 *      isEqual(a,b); //true
 *
 * @param a Values to be compared.
 * @param b Values to be compared.
 * @param aStack
 * @param bStack
 *
 * @returns True if the two arguments are equal.
 */
var isEqual = function isEqual(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) {
        return a !== 0 || 1 / a === 1 / b;
    }
    // A strict comparison is necessary because `null == undefined`.
    if (core_1.default.isNull(a, b)) {
        return a === b;
    }
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a) {
        return b !== b;
    }
    // Exhaust primitive checks
    if (!type_1.default.isFunction(a) && !type_1.default.isObject(a) && !type_1.default.isObject(b)) {
        return false;
    }
    return isDeepEqual(a, b, aStack, bStack);
};
/**
 * Similar to {@link isEqual }
 */
var isDeepEqual = function isDeepEqual(a, b, aStack, bStack) {
    // Compare `[[Class]]` names.
    var className = a.toString();
    if (className !== b.toString()) {
        return false;
    }
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN
            if (+a !== +a) {
                return +b !== +b;
            }
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
    }
    var areArrays = Array.isArray(a) || Array.isArray(b); // NOTE:different from underscore.js
    if (!areArrays) {
        if (!type_1.default.isObject(a) || !type_1.default.isObject(b)) {
            return false;
        }
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor;
        var bCtor = b.constructor;
        if (aCtor !== bCtor && !(type_1.default.isFunction(aCtor) && aCtor instanceof aCtor &&
            type_1.default.isFunction(bCtor) && bCtor instanceof bCtor)
            && ("constructor" in a && "constructor" in b)) {
            return false;
        }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a) {
            return bStack[length] === b;
        }
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length) {
            return false;
        }
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!isEqual(a[length], b[length], aStack, bStack)) {
                return false;
            }
        }
    }
    else {
        // Deep compare objects.
        var keys = Object.keys(a);
        var key = void 0;
        length = keys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length) {
            return false;
        }
        while (length--) {
            // Deep compare each member
            key = keys[length];
            if (!(b != null && b.hasOwnProperty(key) && isEqual(a[key], b[key], aStack, bStack))) {
                return false;
            }
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
};
exports.default = {
    freeze: freeze, defineProperty: defineProperty, defineAccessors: defineAccessors, hasProp: hasProp, value: value, values: values, clone: clone, cloneX: cloneX, isEqual: isEqual, isDeepEqual: isDeepEqual
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQTBCO0FBQzFCLCtCQUEwQjtBQUMxQiwrQkFBMEI7QUFDMUI7Ozs7Ozs7OztHQVNHO0FBQ0gsSUFBTSxNQUFNLEdBQUcsZ0JBQWdCLE1BQWMsRUFBRSxJQUFjO0lBQ3pELElBQUksSUFBUyxDQUFDO0lBQ2QsSUFBSSxPQUFlLENBQUM7SUFDcEIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQywyQkFBMkI7SUFDM0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNQLEdBQUcsQ0FBQyxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixRQUFRLENBQUM7WUFDYixDQUFDO1lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQywrQkFBK0I7UUFDekUsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQUVGOzs7Ozs7Ozs7RUFTRTtBQUNGLElBQU0sY0FBYyxHQUFHLHdCQUF3QixNQUFjLEVBQUUsSUFBWSxFQUFFLEtBQVUsRUFDbkYsVUFBb0IsRUFBRSxTQUFtQixFQUFFLFdBQXFCO0lBQ2hFLEVBQUUsQ0FBQyxDQUFDLGNBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFF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QUksT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuRixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUNELCtEQUErRDtJQUMvRCxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLGtCQUFlO0lBQ1gsTUFBTSxRQUFBLEVBQUUsY0FBYyxnQkFBQSxFQUFFLGVBQWUsaUJBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxXQUFXLGFBQUE7Q0FDdkcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb3JlIGZyb20gXCIuL2NvcmVcIjtcclxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xyXG5pbXBvcnQgSlNPTiBmcm9tIFwiLi9qc29uXCI7XHJcbi8qKlxyXG4gKiBGcmVlemVzIGFuIE9iamVjdCAgdGhhdCBpcywgcHJldmVudHMgbmV3IHByb3BlcnRpZXMgZnJvbSBiZWluZyBhZGRlZCB0byBpdCxcclxuICogcHJldmVudHMgZXhpc3RpbmcgcHJvcGVydGllcyBmcm9tIGJlaW5nIHJlbW92ZWQ7IGFuZCBwcmV2ZW50cyBhbnkgcHJvcGVydGllcyBmcm9tIGJlaW5nIGNoYW5nZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB0YXJnZXQgT2JqZWN0IHRvIGJlICBmcm96ZW4uXHJcbiAqIEBwYXJhbSBkZWVwIGRldGVybWluZXMgd2hldGhlciBuZXN0ZWQgb2JqZWN0cyBpcyB0byBiZSBmcm96ZW4uXHJcbiAqIElmIHRydWUgbmVzdGVkIG9iamVjdHMgd2lsbCBiZSBmcm96ZW4uXHJcbiAqXHJcbiAqIEByZXR1cm5zIEZyb3plbiBvYmplY3QuXHJcbiAqL1xyXG5jb25zdCBmcmVlemUgPSBmdW5jdGlvbiBmcmVlemUodGFyZ2V0OiBPYmplY3QsIGRlZXA/OiBib29sZWFuKTogT2JqZWN0IHtcclxuICAgIGxldCBwcm9wOiBhbnk7XHJcbiAgICBsZXQgcHJvcEtleTogc3RyaW5nO1xyXG4gICAgdGFyZ2V0ID0gT2JqZWN0LmZyZWV6ZSh0YXJnZXQpOyAvLyBGaXJzdCBmcmVlemUgdGhlIG9iamVjdC5cclxuICAgIGlmIChkZWVwKSB7XHJcbiAgICAgICAgZm9yIChwcm9wS2V5IGluIHRhcmdldCkge1xyXG4gICAgICAgICAgICBwcm9wID0gdGFyZ2V0W3Byb3BLZXldO1xyXG4gICAgICAgICAgICBpZiAoIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShwcm9wS2V5KSB8fCAhVHlwZS5pc09iamVjdChwcm9wKSB8fFxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmlzRnJvemVuKHByb3ApKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0YXJnZXRbcHJvcEtleV0gPSBmcmVlemUocHJvcCwgZGVlcCk7IC8vIFJlY3Vyc2l2ZWx5IGNhbGwgZGVlcEZyZWV6ZS5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59O1xyXG5cclxuLypcclxuKiBIZWxwZXIgdG8gY3JlYXRlIGEgcHJvcGVydHkgb24gYW4gb2JqZWN0LlxyXG4qXHJcbiogQHBhcmFtICB0YXJnZXQgVGhlIG9iamVjdCB3aGVyZSBwcm9wZXJ0eSB3aWxsIGJlIGNyZWF0ZWQuXHJcbiogQHBhcmFtICBuYW1lIE5hbWUgb2YgdGhlIHByb3BlcnR5LlxyXG4qIEBwYXJhbSAgdmFsdWUgVmFsdWUgZm9yIHRoZSBwcm9wZXJ0eS5cclxuKiBAcGFyYW0gIGlzUmVhZE9ubHkgdHJ1ZSB0byBwcmV2ZW50IG1vZGlmaWNhdGlvbiB0byB2YWx1ZS4gRGVmYXVsdCBpcyBmYWxzZS5cclxuKiBAcGFyYW0gIGlzUHJpdmF0ZSB0cnVlIHRvIHByZXZlbnQgcHJvcGVydHkgZnJvbSBiZWluZyBlbnVtZXJhdGVkLiBEZWZhdWx0IGlzIGZhbHNlLlxyXG4qIEBwYXJhbSAgaXNUcmFuc2llbnQgdHJ1ZSB0byBhbGxvdyBwcm9wZXJ0eSB0byBiZSBtb2RpZmllZC4gRGVmYXVsdCBpcyBmYWxzZS5cclxuKi9cclxuY29uc3QgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQ6IE9iamVjdCwgbmFtZTogc3RyaW5nLCB2YWx1ZTogYW55LFxyXG4gICAgaXNSZWFkT25seT86IGJvb2xlYW4sIGlzUHJpdmF0ZT86IGJvb2xlYW4sIGlzVHJhbnNpZW50PzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKENvcmUuaXNOdWxsKHRhcmdldCwgbmFtZSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHtcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6ICFpc1RyYW5zaWVudCwgd3JpdGFibGU6ICFpc1JlYWRPbmx5LFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhaXNQcml2YXRlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vKlxyXG4qIEhlbHBlciB0byBjcmVhdGUgY3VzdG9tIGFjY2Vzc29ycyBvbiBhbiBvYmplY3QuXHJcbipcclxuKiBAcGFyYW0gIHRhcmdldCBUaGUgb2JqZWN0IHdoZXJlIHByb3BlcnR5IHdpbGwgYmUgY3JlYXRlZC5cclxuKiBAcGFyYW0gIG5hbWUgTmFtZSBvZiB0aGUgcHJvcGVydHkuXHJcbiogQHBhcmFtICBnZXR0ZXIgQSBmdW5jdGlvbiB3aGljaCBzZXJ2ZXMgYXMgYSBnZXR0ZXIgZm9yIHRoZSBwcm9wZXJ0eS5EZWZhdWx0IGlzIHVuZGVmaW5lZC5cclxuKiBAcGFyYW0gIHNldHRlciBBIGZ1bmN0aW9uIHdoaWNoIHNlcnZlcyBhcyBhIHNldHRlciBmb3IgdGhlIHByb3BlcnR5LkRlZmF1bHQgaXMgdW5kZWZpbmVkLlxyXG4qIEBwYXJhbSAgaXNQcml2YXRlIHRydWUgdG8gcHJldmVudCBwcm9wZXJ0eSBmcm9tIGJlaW5nIGVudW1lcmF0ZWQuIERlZmF1bHQgaXMgZmFsc2UuXHJcbiogQHBhcmFtICBpc1RyYW5zaWVudCB0cnVlIHRvIGFsbG93IHByb3BlcnR5IHRvIGJlIG1vZGlmaWVkLiBEZWZhdWx0IGlzIGZhbHNlLlxyXG4qL1xyXG5jb25zdCBkZWZpbmVBY2Nlc3NvcnMgPSBmdW5jdGlvbiBkZWZpbmVBY2Nlc3NvcnModGFyZ2V0OiBPYmplY3QsIG5hbWU6IHN0cmluZywgZ2V0dGVyOiBGdW5jdGlvbixcclxuICAgIHNldHRlcjogRnVuY3Rpb24sIGlzUHJpdmF0ZT86IGJvb2xlYW4sIGlzVHJhbnNpZW50PzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKENvcmUuaXNOdWxsKHRhcmdldCwgbmFtZSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBkZXNjcmlwdG9yOiBPYmplY3QgPSB7XHJcbiAgICAgICAgZW51bWVyYWJsZTogIWlzUHJpdmF0ZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IENvcmUuaXNOdWxsKGlzVHJhbnNpZW50KSA/IHRydWUgOiBpc1RyYW5zaWVudCxcclxuICAgICAgICBnZXQ6IGdldHRlciA/IGdldHRlciA6IG51bGwsXHJcbiAgICAgICAgc2V0OiBzZXR0ZXIgPyBzZXR0ZXIgOiBudWxsXHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcik7XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2tzIHdoZXRoZXIgdGhlIG9iamVjdCBoYXMgc3BlY2lmaWVkIHByb3BlcnRpZXMgLlxyXG4gKlxyXG4gKiBAcGFyYW0gb2JqIE9iamVjdC5cclxuICogQHBhcmFtIHByb3BzIFByb3BlcnR5IHRvIGJlIGNoZWNrZWQgaWYgaXQgZXhpc3RzIG9uIG9iai5DYW4gYmUgc2luZ2xlIG9yIGFycmF5IG9mIHByb3BlcnRpZXMuXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRydWUgaWYgYWxsIHRoZSBwcm9wZXJ0aWVzIGFyZSBmb3VuZCBvbiB0aGUgb2JqZWN0LlxyXG4gKi9cclxuY29uc3QgaGFzUHJvcCA9IGZ1bmN0aW9uIGhhc1Byb3Aob2JqOiBPYmplY3QsIC4uLnByb3BzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKENvcmUuaXNOdWxsKG9iaiwgcHJvcHMpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGVuOiBudW1iZXIgPSBwcm9wcy5sZW5ndGg7XHJcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShwcm9wc1tpXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFsbG93cyB1cyB0byByZWFkL21vZGlmeSBwcm9wZXJ0aWVzIG9mIGFuIG9iamVjdC5cclxuICpcclxuICogSWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIHR3byBhcmd1bWVudHMsXHJcbiAqIGl0IHJlYWRzIHRoZSBwcm9wZXJ0eS4gSWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIHRocmVlXHJcbiAqIGFyZ3VtZW50cyBpdCB3cml0ZXMgdGhlIHByb3BlcnR5LlxyXG4gKlxyXG4gKlx0dmFyIG9iaiA9IHsgXCJuYW1lXCIgOiBcIkphaXNvblwiIH07XHJcbiAqXHR2YWx1ZShvYmosIFwibmFtZVwiKTsgLy9naXZlcyBcIkphaXNvblwiXHJcbiAqXHR2YWx1ZShvYmosIFwibmFtZVwiLCBcIkthbWFsXCIpOyAvL21vZGlmaWVzIHRoZSBwcm9wZXJ0eVxyXG4gKlxyXG4gKiBAcGFyYW0gc3JjIFRoZSBvYmplY3QgdG8gd29yayB3aXRoLlxyXG4gKiBAcGFyYW0gcHJvcCBUaGUgcHJvcGVydHkgdG8gYmUgcmVhZC9tb2RpZmllZC5cclxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgdG8gdGhlIHByb3BlcnR5LlxyXG4gKlxyXG4gKiBAcmV0dXJucyBUaGUgdmFsdWUgb2YgdGhlIHByb3BlcnR5IHdoZW4gY2FsbGVkIHdpdGggdHdvIGFyZ3VtZW50cy4gYHVuZGVmaW5lZGBcclxuICogaWYgY2FsbGVkIHdpdGggdGhyZWUgYXJndW1lbnRzLlxyXG4gKi9cclxuY29uc3QgdmFsdWUgPSBmdW5jdGlvbiB2YWx1ZShzcmM6IE9iamVjdCwgcHJvcDogc3RyaW5nLCBuZXdWYWx1ZT86IGFueSk6IE9iamVjdCB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoQ29yZS5pc051bGwoc3JjLCBwcm9wKSkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwcm9wczogc3RyaW5nW10gPSBwcm9wLmluZGV4T2YoXCIuXCIpID4gMCA/IHByb3Auc3BsaXQoXCIuXCIpIDogW3Byb3BdO1xyXG4gICAgY29uc3QgbGVuOiBudW1iZXIgPSBwcm9wcy5sZW5ndGg7XHJcbiAgICBjb25zdCBpc1NldHRlcjogYm9vbGVhbiA9IG5ld1ZhbHVlICE9PSB1bmRlZmluZWQ7XHJcbiAgICBsZXQgdGFyZ2V0OiBPYmplY3QgPSBzcmM7XHJcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBjb25zdCBwcm9wTmFtZTogc3RyaW5nID0gcHJvcHNbaV07XHJcbiAgICAgICAgY29uc3QgZW5kID0gaSA9PT0gbGVuIC0gMTtcclxuICAgICAgICBpZiAoIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcclxuICAgICAgICAgICAgaWYgKCFpc1NldHRlcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghZW5kKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcE5hbWVdID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVuZCAmJiBpc1NldHRlcikge1xyXG4gICAgICAgICAgICB0YXJnZXRbcHJvcE5hbWVdID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhcmdldCA9IHRhcmdldFtwcm9wTmFtZV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59O1xyXG5cclxuY29uc3QgdmFsdWVzID0gZnVuY3Rpb24gKHNyYzogT2JqZWN0KTogYW55W10ge1xyXG4gICAgY29uc3Qgb3V0OiBhbnlbXSA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gc3JjKSB7XHJcbiAgICAgICAgb3V0LnB1c2goc3JjW2tleV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDbG9uZXMgdGhlIGdpdmVuIE9iamVjdC5cclxuICpcclxuICogQHBhcmFtIG9iaiBPYmplY3QgdG8gYmUgY2xvbmVkLlxyXG4gKiBAcGFyYW0gZGVlcCBUcnVlIGlmIGRlZXAgY2xvbmluZyBpcyB0byBiZSBkb25lLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBSZXR1cm5zIHRoZSBjbG9uZWQgT2JqZWN0LlxyXG4gKi9cclxuY29uc3QgY2xvbmUgPSBmdW5jdGlvbiBjbG9uZShvYmo6IE9iamVjdCwgZGVlcD86IGJvb2xlYW4pOiBPYmplY3Qge1xyXG4gICAgaWYgKENvcmUuaXNOdWxsKG9iaikgfHwgIVR5cGUuaXNPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0YXJnZXQgPSBvYmouY29uc3RydWN0b3IgPyBvYmouY29uc3RydWN0b3IoKSA6IHt9O1xyXG4gICAgZm9yIChjb25zdCBpIGluIG9iaikge1xyXG4gICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGkpKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YXJnZXRbaV0gPSBkZWVwICYmIFR5cGUuaXNQT0pPKG9ialtpXSkgPyBjbG9uZShvYmpbaV0sIGRlZXApIDogb2JqW2ldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDbG9uZXMgdGhlIE9iamVjdCBieSBzZXJpYWxpemluZyBhbmQgZGVzZXJpYWxpemluZyBhcyBKU09OLlxyXG4gKlxyXG4gKiBAcGFyYW0gb2JqIE9iamVjdCB0byBiZSBjbG9uZWQuXHJcbiAqXHJcbiAqIEByZXR1cm5zIENsb25lZCBPYmplY3QuXHJcbiAqL1xyXG5jb25zdCBjbG9uZVggPSBmdW5jdGlvbiBjbG9uZVgob2JqOiBPYmplY3QpOiBPYmplY3QgfCBudWxsIHtcclxuICAgIGlmIChDb3JlLmlzTnVsbChvYmopIHx8ICFUeXBlLmlzT2JqZWN0KG9iaikpIHtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgLyogc2VyaWFsaXplIGFuZCBkZXNlcmlhbGl6ZSBhcyBKU09OIHRvIGNyZWF0ZSBhIG5ldyBvYmplY3QqL1xyXG4gICAgcmV0dXJuIEpTT04uZGVzZXJpYWxpemUoSlNPTi5zZXJpYWxpemUob2JqKSk7XHJcbn07XHJcblxyXG4vKipcclxuICogUGVyZm9ybXMgYSBkZWVwIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzLCB0byBkZXRlcm1pbmUgaWYgdGhleSBzaG91bGQgYmUgY29uc2lkZXJlZCBlcXVhbC5cclxuICpcclxuICogICAgICBsZXQgYSA9IHtuYW1lOiBcIm1vZVwiLCBsdWNreU51bWJlcnM6IFsxMywgMjcsIDM0XX07XHJcbiAqICAgICAgbGV0IGIgID0ge25hbWU6IFwibW9lXCIsIGx1Y2t5TnVtYmVyczogWzEzLCAyNywgMzRdfTtcclxuICogICAgICBpc0VxdWFsKGEsYik7IC8vdHJ1ZVxyXG4gKlxyXG4gKiBAcGFyYW0gYSBWYWx1ZXMgdG8gYmUgY29tcGFyZWQuXHJcbiAqIEBwYXJhbSBiIFZhbHVlcyB0byBiZSBjb21wYXJlZC5cclxuICogQHBhcmFtIGFTdGFja1xyXG4gKiBAcGFyYW0gYlN0YWNrXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHR3byBhcmd1bWVudHMgYXJlIGVxdWFsLlxyXG4gKi9cclxuY29uc3QgaXNFcXVhbCA9IGZ1bmN0aW9uIGlzRXF1YWwoYTogYW55LCBiOiBhbnksIGFTdGFjaz86IGFueVtdLCBiU3RhY2s/OiBhbnlbXSk6IGJvb2xlYW4gey8vIGJvcnJvd2VkIGZyb20gdW5kZXJzY29yZS5qc1xyXG4gICAgLy8gSWRlbnRpY2FsIG9iamVjdHMgYXJlIGVxdWFsLiBgMCA9PT0gLTBgLCBidXQgdGhleSBhcmVuJ3QgaWRlbnRpY2FsLlxyXG4gICAgLy8gU2VlIHRoZSBbSGFybW9ueSBgZWdhbGAgcHJvcG9zYWxdKGh0dHA6Ly93aWtpLmVjbWFzY3JpcHQub3JnL2Rva3UucGhwP2lkPWhhcm1vbnk6ZWdhbCkuXHJcbiAgICBpZiAoYSA9PT0gYikge1xyXG4gICAgICAgIHJldHVybiBhICE9PSAwIHx8IDEgLyBhID09PSAxIC8gYjtcclxuICAgIH1cclxuICAgIC8vIEEgc3RyaWN0IGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5IGJlY2F1c2UgYG51bGwgPT0gdW5kZWZpbmVkYC5cclxuICAgIGlmIChDb3JlLmlzTnVsbChhLCBiKSkge1xyXG4gICAgICAgIHJldHVybiBhID09PSBiO1xyXG4gICAgfVxyXG4gICAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS5cclxuICAgIGlmIChhICE9PSBhKSB7XHJcbiAgICAgICAgcmV0dXJuIGIgIT09IGI7XHJcbiAgICB9XHJcbiAgICAvLyBFeGhhdXN0IHByaW1pdGl2ZSBjaGVja3NcclxuICAgIGlmICghVHlwZS5pc0Z1bmN0aW9uKGEpICYmICFUeXBlLmlzT2JqZWN0KGEpICYmICFUeXBlLmlzT2JqZWN0KGIpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzRGVlcEVxdWFsKGEsIGIsIGFTdGFjaywgYlN0YWNrKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBTaW1pbGFyIHRvIHtAbGluayBpc0VxdWFsIH1cclxuICovXHJcbmNvbnN0IGlzRGVlcEVxdWFsID0gZnVuY3Rpb24gaXNEZWVwRXF1YWwoYTogYW55LCBiOiBhbnksIGFTdGFjaz86IGFueVtdLCBiU3RhY2s/OiBhbnlbXSk6IGJvb2xlYW4geyAgLy8gYm9ycm93ZWQgZnJvbSB1bmRlcnNjb3JlLmpzXHJcbiAgICAvLyBDb21wYXJlIGBbW0NsYXNzXV1gIG5hbWVzLlxyXG4gICAgY29uc3QgY2xhc3NOYW1lOiBzdHJpbmcgPSBhLnRvU3RyaW5nKCk7XHJcbiAgICBpZiAoY2xhc3NOYW1lICE9PSBiLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xyXG4gICAgICAgIC8vIFN0cmluZ3MsIG51bWJlcnMsIHJlZ3VsYXIgZXhwcmVzc2lvbnMsIGRhdGVzLCBhbmQgYm9vbGVhbnMgYXJlIGNvbXBhcmVkIGJ5IHZhbHVlLlxyXG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IFJlZ0V4cF1cIjpcclxuICAgICAgICAvLyBSZWdFeHBzIGFyZSBjb2VyY2VkIHRvIHN0cmluZ3MgZm9yIGNvbXBhcmlzb24gKE5vdGU6ICcnICsgL2EvaSA9PT0gJy9hL2knKVxyXG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IFN0cmluZ11cIjpcclxuICAgICAgICAgICAgLy8gUHJpbWl0aXZlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBvYmplY3Qgd3JhcHBlcnMgYXJlIGVxdWl2YWxlbnQ7IHRodXMsIGBcIjVcImAgaXNcclxuICAgICAgICAgICAgLy8gZXF1aXZhbGVudCB0byBgbmV3IFN0cmluZyhcIjVcIilgLlxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIiArIGEgPT09IFwiXCIgKyBiO1xyXG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IE51bWJlcl1cIjpcclxuICAgICAgICAgICAgLy8gYE5hTmBzIGFyZSBlcXVpdmFsZW50LCBidXQgbm9uLXJlZmxleGl2ZS5cclxuICAgICAgICAgICAgLy8gT2JqZWN0KE5hTikgaXMgZXF1aXZhbGVudCB0byBOYU5cclxuICAgICAgICAgICAgaWYgKCthICE9PSArYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICtiICE9PSArYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBBbiBgZWdhbGAgY29tcGFyaXNvbiBpcyBwZXJmb3JtZWQgZm9yIG90aGVyIG51bWVyaWMgdmFsdWVzLlxyXG4gICAgICAgICAgICByZXR1cm4gK2EgPT09IDAgPyAxIC8gK2EgPT09IDEgLyBiIDogK2EgPT09ICtiO1xyXG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IERhdGVdXCI6XHJcbiAgICAgICAgY2FzZSBcIltvYmplY3QgQm9vbGVhbl1cIjpcclxuICAgICAgICAgICAgLy8gQ29lcmNlIGRhdGVzIGFuZCBib29sZWFucyB0byBudW1lcmljIHByaW1pdGl2ZSB2YWx1ZXMuIERhdGVzIGFyZSBjb21wYXJlZCBieSB0aGVpclxyXG4gICAgICAgICAgICAvLyBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnMuIE5vdGUgdGhhdCBpbnZhbGlkIGRhdGVzIHdpdGggbWlsbGlzZWNvbmQgcmVwcmVzZW50YXRpb25zXHJcbiAgICAgICAgICAgIC8vIG9mIGBOYU5gIGFyZSBub3QgZXF1aXZhbGVudC5cclxuICAgICAgICAgICAgcmV0dXJuICthID09PSArYjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcmVBcnJheXM6IGJvb2xlYW4gPSBBcnJheS5pc0FycmF5KGEpIHx8IEFycmF5LmlzQXJyYXkoYik7IC8vIE5PVEU6ZGlmZmVyZW50IGZyb20gdW5kZXJzY29yZS5qc1xyXG4gICAgaWYgKCFhcmVBcnJheXMpIHtcclxuICAgICAgICBpZiAoIVR5cGUuaXNPYmplY3QoYSkgfHwgIVR5cGUuaXNPYmplY3QoYikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gT2JqZWN0cyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVpdmFsZW50LCBidXQgYE9iamVjdGBzIG9yIGBBcnJheWBzXHJcbiAgICAgICAgLy8gZnJvbSBkaWZmZXJlbnQgZnJhbWVzIGFyZS5cclxuICAgICAgICBjb25zdCBhQ3RvcjogRnVuY3Rpb24gPSBhLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgIGNvbnN0IGJDdG9yOiBGdW5jdGlvbiA9IGIuY29uc3RydWN0b3I7XHJcbiAgICAgICAgaWYgKGFDdG9yICE9PSBiQ3RvciAmJiAhKFR5cGUuaXNGdW5jdGlvbihhQ3RvcikgJiYgYUN0b3IgaW5zdGFuY2VvZiBhQ3RvciAmJlxyXG4gICAgICAgICAgICBUeXBlLmlzRnVuY3Rpb24oYkN0b3IpICYmIGJDdG9yIGluc3RhbmNlb2YgYkN0b3IpXHJcbiAgICAgICAgICAgICYmIChcImNvbnN0cnVjdG9yXCIgaW4gYSAmJiBcImNvbnN0cnVjdG9yXCIgaW4gYikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEFzc3VtZSBlcXVhbGl0eSBmb3IgY3ljbGljIHN0cnVjdHVyZXMuIFRoZSBhbGdvcml0aG0gZm9yIGRldGVjdGluZyBjeWNsaWNcclxuICAgIC8vIHN0cnVjdHVyZXMgaXMgYWRhcHRlZCBmcm9tIEVTIDUuMSBzZWN0aW9uIDE1LjEyLjMsIGFic3RyYWN0IG9wZXJhdGlvbiBgSk9gLlxyXG5cclxuICAgIC8vIEluaXRpYWxpemluZyBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cclxuICAgIC8vIEl0J3MgZG9uZSBoZXJlIHNpbmNlIHdlIG9ubHkgbmVlZCB0aGVtIGZvciBvYmplY3RzIGFuZCBhcnJheXMgY29tcGFyaXNvbi5cclxuICAgIGFTdGFjayA9IGFTdGFjayB8fCBbXTtcclxuICAgIGJTdGFjayA9IGJTdGFjayB8fCBbXTtcclxuICAgIGxldCBsZW5ndGg6IG51bWJlciA9IGFTdGFjay5sZW5ndGg7XHJcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcclxuICAgICAgICAvLyBMaW5lYXIgc2VhcmNoLiBQZXJmb3JtYW5jZSBpcyBpbnZlcnNlbHkgcHJvcG9ydGlvbmFsIHRvIHRoZSBudW1iZXIgb2ZcclxuICAgICAgICAvLyB1bmlxdWUgbmVzdGVkIHN0cnVjdHVyZXMuXHJcbiAgICAgICAgaWYgKGFTdGFja1tsZW5ndGhdID09PSBhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBiU3RhY2tbbGVuZ3RoXSA9PT0gYjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIHRoZSBmaXJzdCBvYmplY3QgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxyXG4gICAgYVN0YWNrLnB1c2goYSk7XHJcbiAgICBiU3RhY2sucHVzaChiKTtcclxuXHJcbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgYW5kIGFycmF5cy5cclxuICAgIGlmIChhcmVBcnJheXMpIHtcclxuICAgICAgICAvLyBDb21wYXJlIGFycmF5IGxlbmd0aHMgdG8gZGV0ZXJtaW5lIGlmIGEgZGVlcCBjb21wYXJpc29uIGlzIG5lY2Vzc2FyeS5cclxuICAgICAgICBsZW5ndGggPSBhLmxlbmd0aDtcclxuICAgICAgICBpZiAobGVuZ3RoICE9PSBiLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERlZXAgY29tcGFyZSB0aGUgY29udGVudHMsIGlnbm9yaW5nIG5vbi1udW1lcmljIHByb3BlcnRpZXMuXHJcbiAgICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNFcXVhbChhW2xlbmd0aF0sIGJbbGVuZ3RoXSwgYVN0YWNrLCBiU3RhY2spKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIERlZXAgY29tcGFyZSBvYmplY3RzLlxyXG4gICAgICAgIGNvbnN0IGtleXM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXMoYSk7XHJcbiAgICAgICAgbGV0IGtleTogc3RyaW5nO1xyXG4gICAgICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xyXG4gICAgICAgIC8vIEVuc3VyZSB0aGF0IGJvdGggb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIG51bWJlciBvZiBwcm9wZXJ0aWVzIGJlZm9yZSBjb21wYXJpbmcgZGVlcCBlcXVhbGl0eS5cclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoYikubGVuZ3RoICE9PSBsZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcclxuICAgICAgICAgICAgLy8gRGVlcCBjb21wYXJlIGVhY2ggbWVtYmVyXHJcbiAgICAgICAgICAgIGtleSA9IGtleXNbbGVuZ3RoXTtcclxuICAgICAgICAgICAgaWYgKCEoYiAhPSBudWxsICYmIGIuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBpc0VxdWFsKGFba2V5XSwgYltrZXldLCBhU3RhY2ssIGJTdGFjaykpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IG9iamVjdCBmcm9tIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cclxuICAgIGFTdGFjay5wb3AoKTtcclxuICAgIGJTdGFjay5wb3AoKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZnJlZXplLCBkZWZpbmVQcm9wZXJ0eSwgZGVmaW5lQWNjZXNzb3JzLCBoYXNQcm9wLCB2YWx1ZSwgdmFsdWVzLCBjbG9uZSwgY2xvbmVYLCBpc0VxdWFsLCBpc0RlZXBFcXVhbFxyXG59O1xyXG4iXX0=
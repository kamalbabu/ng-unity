import Core from "./core";
import Type from "./type";
import JSON from "./json";
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
const freeze = function freeze(target: Object, deep?: boolean): Object {
    let prop: any;
    let propKey: string;
    target = Object.freeze(target); // First freeze the object.
    if (deep) {
        for (propKey in target) {
            prop = target[propKey];
            if (!target.hasOwnProperty(propKey) || !Type.isObject(prop) ||
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
const defineProperty = function defineProperty(target: Object, name: string, value: any,
    isReadOnly?: boolean, isPrivate?: boolean, isTransient?: boolean): void {
    if (Core.isNull(target, name)) {
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
const defineAccessors = function defineAccessors(target: Object, name: string, getter: Function,
    setter: Function, isPrivate?: boolean, isTransient?: boolean): void {
    if (Core.isNull(target, name)) {
        return;
    }
    const descriptor: Object = {
        enumerable: !isPrivate,
        configurable: Core.isNull(isTransient) ? true : isTransient,
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
const hasProp = function hasProp(obj: Object, ...props: string[]): boolean {
    if (Core.isNull(obj, props)) {
        return false;
    }
    const len: number = props.length;
    for (let i: number = 0; i < len; i++) {
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
const value = function value(src: Object, prop: string, newValue?: any): Object | undefined {
    if (Core.isNull(src, prop)) {
        return undefined;
    }
    const props: string[] = prop.indexOf(".") > 0 ? prop.split(".") : [prop];
    const len: number = props.length;
    const isSetter: boolean = newValue !== undefined;
    let target: Object = src;
    for (let i: number = 0; i < len; i++) {
        const propName: string = props[i];
        const end = i === len - 1;
        if (!target.hasOwnProperty(propName)) {
            if (!isSetter) {
                return undefined;
            } else if (!end) {
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

const values = function (src: Object): any[] {
    const out: any[] = [];
    for (const key in src) {
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
const clone = function clone(obj: Object, deep?: boolean): Object {
    if (Core.isNull(obj) || !Type.isObject(obj)) {
        return obj;
    }
    const target = obj.constructor ? obj.constructor() : {};
    for (const i in obj) {
        if (!obj.hasOwnProperty(i)) {
            continue;
        }
        target[i] = deep && Type.isPOJO(obj[i]) ? clone(obj[i], deep) : obj[i];
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
const cloneX = function cloneX(obj: Object): Object | null {
    if (Core.isNull(obj) || !Type.isObject(obj)) {
        return obj;
    }
    /* serialize and deserialize as JSON to create a new object*/
    return JSON.deserialize(JSON.serialize(obj));
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
const isEqual = function isEqual(a: any, b: any, aStack?: any[], bStack?: any[]): boolean {// borrowed from underscore.js
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) {
        return a !== 0 || 1 / a === 1 / b;
    }
    // A strict comparison is necessary because `null == undefined`.
    if (Core.isNull(a, b)) {
        return a === b;
    }
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a) {
        return b !== b;
    }
    // Exhaust primitive checks
    if (!Type.isFunction(a) && !Type.isObject(a) && !Type.isObject(b)) {
        return false;
    }
    return isDeepEqual(a, b, aStack, bStack);
};

/**
 * Similar to {@link isEqual }
 */
const isDeepEqual = function isDeepEqual(a: any, b: any, aStack?: any[], bStack?: any[]): boolean {  // borrowed from underscore.js
    // Compare `[[Class]]` names.
    const className: string = a.toString();
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

    const areArrays: boolean = Array.isArray(a) || Array.isArray(b); // NOTE:different from underscore.js
    if (!areArrays) {
        if (!Type.isObject(a) || !Type.isObject(b)) {
            return false;
        }

        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        const aCtor: Function = a.constructor;
        const bCtor: Function = b.constructor;
        if (aCtor !== bCtor && !(Type.isFunction(aCtor) && aCtor instanceof aCtor &&
            Type.isFunction(bCtor) && bCtor instanceof bCtor)
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
    let length: number = aStack.length;
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
    } else {
        // Deep compare objects.
        const keys: string[] = Object.keys(a);
        let key: string;
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

export default {
    freeze, defineProperty, defineAccessors, hasProp, value, values, clone, cloneX, isEqual, isDeepEqual
};

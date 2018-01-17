import Core from "./core";
/**
 * Checks whether the argument is an Object.
 *
 * @param obj The value to be checked.
 *
 * @retuns Returns true if the argument is an Object.
 */
const isObject = function isObject(obj: any): boolean {
    return typeof (obj) === "object";
};

/**
 * Checks whether the argument is a function.
 *
 * @param fn The value to be checked.
 *
 * @returns Returns true if the variable is a Function.
 */
const isFunction = function isFunction(fn: any): boolean {
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
const isNumber = function isNumber(num: any, strict?: boolean): boolean {
    if (Core.isNotNull(num)) {
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
const isString = function isString(val: any): boolean {
    return typeof val === "string";
};

/**
 * Checks whether the argument is boolean.
 *
 * @param obj The value to be checked.
 *
 * @returns Returns true if the variable is boolean.
 */
const isBoolean = function isBoolean(obj: any): boolean {
    return typeof (obj) === "boolean";
};

/**
 * Checks whether the argument is an Array.
 *
 * @param  The value to be checked.
 *
 * @returns Returns true if all arguments are arrays.
 */
const isArray = function isArray(...args: any[]): boolean {
    if (args.length === 0) {
        return false;
    }
    const len: number = args.length;
    let out: boolean = false;
    for (let i: number = 0; i < len; i++) {
        const obj: any = args[i];
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
const isPOJO = function isPOJO(...args: any[]): boolean {
    if (args.length === 0) {
        return false;
    }
    const len: number = args.length;
    let out: boolean = false;
    for (let i: number = 0; i < len; i++) {
        const obj: any = args[i];
        out = isPOJOInternal(obj);
        if (!out) {
            break;
        }
    }
    return out;
};

const isPOJOInternal = function isPOJOInternal(obj: any): boolean {
    if (Core.isNotNull(obj)) {
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
const isPromise = function isPromise(obj: any): boolean {
    if (Core.isNotNull(obj)) {
        return obj && obj.hasOwnProperty("then") && isFunction(obj.then);
    }
    return false;
};

/*
 * @returns T & U an intersection type combines multiple types into one.
 */
const extend = function extend<T, U>(first: T, second: U): T & U {
    const result = <T & U> {};
    for (const id in first) {
        (<any> result)[id] = (<any> first)[id];
    }
    for (const id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any> result)[id] = (<any> second)[id];
        }
    }
    return result;
};

export default {
    isObject, isFunction, isNumber, isString, isBoolean, isArray, isPOJO, isPromise,
    extend
};

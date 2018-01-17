/**
 * Checks whether an arguments is null.
 *
 * @param The values to be checked.
 *
 * @returns true if any argument is null.
 */
const isNull = function isNull(...args: any[]): boolean {
    if (args.length === 0) {
        return true;
    }
    const len: number = args.length;
    for (let i: number = 0; i < len; i++) {
        const obj: any = args[i];
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
const isNotNull = function isNotNull(...args: any[]): boolean {
    return !isNull.apply(undefined, args); // forward args
};

/**
 * Checks whether any of the provided arguments are empty.
 *
 * @param Values to be checked.
 *
 * @returns true if any argument is empty.
 */
const isEmpty = function isEmpty(...args: any[]): boolean {
    if (isNull.apply(undefined, args)) {// forward args
        return true;
    }
    const len: number = args.length;
    for (let i: number = 0; i < len; i++) {
        if (emptyInternal(args[i])) {
            return true;
        }
    }
    return false;
};
/**
 * @private
 */
const emptyInternal = function emptyInternal(obj: any): boolean {
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
    } else {
        return obj.length === 0;
    }
};

const isEmptyObjInternal = function isEmptyObjInternal(obj: any): boolean {
    for (const name in obj) {
        if (obj.hasOwnProperty(name)) {
            return false;
        }
    }
    return true;
};

const hasEnumerablePropertiesInternal = function hasEnumerablePropertiesInternal(obj: any): boolean {
    return !(obj instanceof Date || typeof (obj) === "boolean" || typeof (obj) === "number");
};
/**
 * Gives the first non-null value in the arguments list.
 *
 * @param Values to be checked.
 *
 * @returns Returns the first non-null value in the arguments list.
 */
const coalesce = function coalesce(...args: any[]): any {
    if (args.length === 0) {
        return null;
    }
    const len: number = args.length;
    let arg: any = null;
    for (let i: number = 0; i < len; i++) {
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
const guid = function guid(): string {
    return (rndHexInternal() + rndHexInternal() + "-" + rndHexInternal() + "-" + rndHexInternal() + "-" + rndHexInternal() + "-" + rndHexInternal() + rndHexInternal() + rndHexInternal());
};

const rndHexInternal = function rndHexInternal(): string {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};

export default {
    isNull, isNotNull, isEmpty, coalesce, guid
};

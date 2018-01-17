import Type from "./type";

/**
 * Returns the boolean equivalent of various non boolean data.
 *
 *      value("Yes");// true
 *      value(0);// false
 *
 * @param val Input whose boolean equivalent is to be returned.
 * e.g. "Yes", true, 0 etc.
 *
 * @returns Boolean equivalent of the input.
 */
const value = function value(val: any): boolean {
    const TRUE_MAP: Object = {
        "YES": "NO", "Y": "N", "TRUE": "FALSE", "ON": "OFF", "1": "0"
    };
    if (!val) {
        return false;
    }
    if (Type.isBoolean(val)) {
        return val;
    }
    // Apparently, fastest way to convert a number to a string is "" + num
    const strVal: string = Type.isNumber(val) ? "" + val : val.toUpperCase();
    return strVal in TRUE_MAP;
};

export default {
    value
};

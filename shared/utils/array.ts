import Type from "./type";
import Number from "./number";
import Core from "./core";
/**
 * Checks whether an element is a part of array.
 *
 * @param array Input array.
 * @param item Item to be checked if it is an element of the array.
 *
 * @returns Returns true if the item is in the array.
*/
const contains = function contains<T>(array: T[], item: T): boolean {
    let i: number = array.length;
    while (i--) {
        if (array[i] === item) {
            return true;
        }
    }
    return false;
};

/**
* Returns an element at random from the array.
*
* @param Input array.
*
* @returns Random element from the array.
*/
const pickAny = function pickAny<T>(array: T[]): T | null {
    const len: number = array.length;
    if (len <= 1) {
        return (len === 0) ? null : array[0];
    }
    return array[Number.random(len)];
};

/**
* Returns elements that are present in both the arrays.
*
* @param 2 arrays.
*
* @returns array containing elements common to both the input arrays.
*/
const intersection = function intersection<T>(one: T[], two: T[]): T[] {
    // return items in 'one' that is also in 'two'
    const len: number = one.length;
    const out: T[] = [];
    for (let i: number = 0; i < len; i++) {
        const val: T = one[i];
        if (two.indexOf(val) > -1) {
            out.push(val);
        }
    }
    return out;
};

/**
* Returns elements that are present in all the  arrays.
*
* @param 1 to N arrays .Call signature is intersectionN(arr1, arr2, ..., arrN).
*
* @returns array containing elements common to all arrays.
*/
const intersectionN = function intersectionN(...args: any[]): any[] {
    if (args.length < 2) {
        return args.length === 0 ? [] : args[0];
    }
    let intersect: any[] = args[0];
    for (let i: number = 1; i < args.length; i++) {
        // returns items in 'intersect' that is also in the 'args[i]'
        intersect = intersection(intersect, args[i]);
    }
    return intersect;
};

/**
* Returns elements that are present in the first array but not in the second.
*
* @param 2 arrays.
*
* @returns array containing elements present in first array but not in second.
*/
const difference = function difference<T>(one: T[], two: T[]): T[] {
    // return items in 'one' that is not in 'two'
    const len: number = one.length;
    const out: T[] = [];
    for (let i: number = 0; i < len; i++) {
        const val: T = one[i];
        if (two.indexOf(val) === -1) {
            out.push(val);
        }
    }
    return out;
};

/*
 * Creates a merged or flattened array .
 *
 * @param 1 to N arrays. Call signature is merge(arr1, arr2, ..., arrN) .
 *
 * @returns array containing all the elements from each input array.
 */
const merge = function (...args: any[]): any[] {
    return args.reduce((accum: any[], arg: any[]) => {
        return accum.concat(arg);
    });
};

/**
* Combines the elements of multiple arrays.
*
* @param 1 to N arrays.Call signature is union(arr1, arr2, ..., arrN).
*
* @returns array containing distinct elements of all the input array .
*/
const union = function union(...args: any[]): any[] {
    if (args.length <= 1) {
        return args.length === 0 ? undefined : args[0];
    }
    const len: number = args.length;
    const obj: any = {};
    for (let i: number = 0; i < len; i++) {
        const arr: any = args[i];
        if (!Type.isArray(arr)) {
            continue;
        }
        const arrLen = arr.length;
        for (let j: number = arrLen - 1; j >= 0; --j) {
            obj[arr[j]] = arr[j];
        }
    }
    const res: any[] = [];
    for (const k in obj) {
        if (obj.hasOwnProperty(k)) {
            res.push(obj[k]);
        }
    }
    return res;
};

/**
* Returns an array containing all the values in the map.
*
*	parseMap({"name":"Jaison", "designation":"Architect"});// ["Jaison", "Architect"]
*
* @param map Input Map.
*
* @returns array containing values of the map.
*/
const fromMap = function fromMap(map: any): any[] {
    return Object.keys(map).map(function (key) {
        return map[key];
    });
};

/**
 * Construct a Map from the array of Objects.
 *
 *	let input = [{"name":"Pai", "branch":"Mech"}, {"name":"Meghna", "branch":"IT"}];
 *	toMap(input, "name", "branch");// {"Pai":"Mech", "Meghna":"IT"}
 *
 * @param array Array of Objects.
 * @param keyField Corresponding value of keyField in the array will be stored as key in the map.
 * @param valueField Corresponding value of valueField in the array will be stored as value in the map.
 *
 * @returns The Map.
 */
const toMap = function toMap(array: any, keyField: string, valueField: string): any {
    if (Core.isEmpty(array)) {
        return undefined;
    }
    const map: any = {};
    let key: any;
    for (const index in array) {
        const item: any = array[index];
        /***********************************
         * If keyField is not present in
         * object, do not insert in map.
         * If valueField has been passed, but
         * is not a property of the object,
         * insert key mapped to undefined.
         */
        if (!item.hasOwnProperty(keyField)) {
            continue;
        }
        key = item[keyField];
        map[key] = valueField ? item[valueField] : item;
    }
    return map;
};

export default {
    contains, pickAny, intersection, intersectionN, difference, merge, union, fromMap, toMap
};

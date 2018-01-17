"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var type_1 = require("./type");
var number_1 = require("./number");
var core_1 = require("./core");
/**
 * Checks whether an element is a part of array.
 *
 * @param array Input array.
 * @param item Item to be checked if it is an element of the array.
 *
 * @returns Returns true if the item is in the array.
*/
var contains = function contains(array, item) {
    var i = array.length;
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
var pickAny = function pickAny(array) {
    var len = array.length;
    if (len <= 1) {
        return (len === 0) ? null : array[0];
    }
    return array[number_1.default.random(len)];
};
/**
* Returns elements that are present in both the arrays.
*
* @param 2 arrays.
*
* @returns array containing elements common to both the input arrays.
*/
var intersection = function intersection(one, two) {
    // return items in 'one' that is also in 'two'
    var len = one.length;
    var out = [];
    for (var i = 0; i < len; i++) {
        var val = one[i];
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
var intersectionN = function intersectionN() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length < 2) {
        return args.length === 0 ? [] : args[0];
    }
    var intersect = args[0];
    for (var i = 1; i < args.length; i++) {
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
var difference = function difference(one, two) {
    // return items in 'one' that is not in 'two'
    var len = one.length;
    var out = [];
    for (var i = 0; i < len; i++) {
        var val = one[i];
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
var merge = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (accum, arg) {
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
var union = function union() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length <= 1) {
        return args.length === 0 ? undefined : args[0];
    }
    var len = args.length;
    var obj = {};
    for (var i = 0; i < len; i++) {
        var arr = args[i];
        if (!type_1.default.isArray(arr)) {
            continue;
        }
        var arrLen = arr.length;
        for (var j = arrLen - 1; j >= 0; --j) {
            obj[arr[j]] = arr[j];
        }
    }
    var res = [];
    for (var k in obj) {
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
var fromMap = function fromMap(map) {
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
var toMap = function toMap(array, keyField, valueField) {
    if (core_1.default.isEmpty(array)) {
        return undefined;
    }
    var map = {};
    var key;
    for (var index in array) {
        var item = array[index];
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
exports.default = {
    contains: contains, pickAny: pickAny, intersection: intersection, intersectionN: intersectionN, difference: difference, merge: merge, union: union, fromMap: fromMap, toMap: toMap
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcnJheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUEwQjtBQUMxQixtQ0FBOEI7QUFDOUIsK0JBQTBCO0FBQzFCOzs7Ozs7O0VBT0U7QUFDRixJQUFNLFFBQVEsR0FBRyxrQkFBcUIsS0FBVSxFQUFFLElBQU87SUFDckQsSUFBSSxDQUFDLEdBQVcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUM3QixPQUFPLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDVCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNqQixDQUFDLENBQUM7QUFFRjs7Ozs7O0VBTUU7QUFDRixJQUFNLE9BQU8sR0FBRyxpQkFBb0IsS0FBVTtJQUMxQyxJQUFNLEdBQUcsR0FBVyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ2pDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1gsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUM7QUFFRjs7Ozs7O0VBTUU7QUFDRixJQUFNLFlBQVksR0FBRyxzQkFBeUIsR0FBUSxFQUFFLEdBQVE7SUFDNUQsOENBQThDO0lBQzlDLElBQU0sR0FBRyxHQUFXLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFDL0IsSUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO0lBQ3BCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FB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QUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUVGOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsSUFBTSxLQUFLLEdBQUcsZUFBZSxLQUFVLEVBQUUsUUFBZ0IsRUFBRSxVQUFrQjtJQUN6RSxFQUFFLENBQUMsQ0FBQyxjQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFNLEdBQUcsR0FBUSxFQUFFLENBQUM7SUFDcEIsSUFBSSxHQUFRLENBQUM7SUFDYixHQUFHLENBQUMsQ0FBQyxJQUFNLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLElBQU0sSUFBSSxHQUFRLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQjs7Ozs7O1dBTUc7UUFDSCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLFFBQVEsQ0FBQztRQUNiLENBQUM7UUFDRCxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUNwRCxDQUFDO0lBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQztBQUNmLENBQUMsQ0FBQztBQUVGLGtCQUFlO0lBQ1gsUUFBUSxVQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsWUFBWSxjQUFBLEVBQUUsYUFBYSxlQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsS0FBSyxPQUFBO0NBQzNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHlwZSBmcm9tIFwiLi90eXBlXCI7XHJcbmltcG9ydCBOdW1iZXIgZnJvbSBcIi4vbnVtYmVyXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCIuL2NvcmVcIjtcclxuLyoqXHJcbiAqIENoZWNrcyB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgYSBwYXJ0IG9mIGFycmF5LlxyXG4gKlxyXG4gKiBAcGFyYW0gYXJyYXkgSW5wdXQgYXJyYXkuXHJcbiAqIEBwYXJhbSBpdGVtIEl0ZW0gdG8gYmUgY2hlY2tlZCBpZiBpdCBpcyBhbiBlbGVtZW50IG9mIHRoZSBhcnJheS5cclxuICpcclxuICogQHJldHVybnMgUmV0dXJucyB0cnVlIGlmIHRoZSBpdGVtIGlzIGluIHRoZSBhcnJheS5cclxuKi9cclxuY29uc3QgY29udGFpbnMgPSBmdW5jdGlvbiBjb250YWluczxUPihhcnJheTogVFtdLCBpdGVtOiBUKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgaTogbnVtYmVyID0gYXJyYXkubGVuZ3RoO1xyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgIGlmIChhcnJheVtpXSA9PT0gaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG4vKipcclxuKiBSZXR1cm5zIGFuIGVsZW1lbnQgYXQgcmFuZG9tIGZyb20gdGhlIGFycmF5LlxyXG4qXHJcbiogQHBhcmFtIElucHV0IGFycmF5LlxyXG4qXHJcbiogQHJldHVybnMgUmFuZG9tIGVsZW1lbnQgZnJvbSB0aGUgYXJyYXkuXHJcbiovXHJcbmNvbnN0IHBpY2tBbnkgPSBmdW5jdGlvbiBwaWNrQW55PFQ+KGFycmF5OiBUW10pOiBUIHwgbnVsbCB7XHJcbiAgICBjb25zdCBsZW46IG51bWJlciA9IGFycmF5Lmxlbmd0aDtcclxuICAgIGlmIChsZW4gPD0gMSkge1xyXG4gICAgICAgIHJldHVybiAobGVuID09PSAwKSA/IG51bGwgOiBhcnJheVswXTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheVtOdW1iZXIucmFuZG9tKGxlbildO1xyXG59O1xyXG5cclxuLyoqXHJcbiogUmV0dXJucyBlbGVtZW50cyB0aGF0IGFyZSBwcmVzZW50IGluIGJvdGggdGhlIGFycmF5cy5cclxuKlxyXG4qIEBwYXJhbSAyIGFycmF5cy5cclxuKlxyXG4qIEByZXR1cm5zIGFycmF5IGNvbnRhaW5pbmcgZWxlbWVudHMgY29tbW9uIHRvIGJvdGggdGhlIGlucHV0IGFycmF5cy5cclxuKi9cclxuY29uc3QgaW50ZXJzZWN0aW9uID0gZnVuY3Rpb24gaW50ZXJzZWN0aW9uPFQ+KG9uZTogVFtdLCB0d286IFRbXSk6IFRbXSB7XHJcbiAgICAvLyByZXR1cm4gaXRlbXMgaW4gJ29uZScgdGhhdCBpcyBhbHNvIGluICd0d28nXHJcbiAgICBjb25zdCBsZW46IG51bWJlciA9IG9uZS5sZW5ndGg7XHJcbiAgICBjb25zdCBvdXQ6IFRbXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdmFsOiBUID0gb25lW2ldO1xyXG4gICAgICAgIGlmICh0d28uaW5kZXhPZih2YWwpID4gLTEpIHtcclxuICAgICAgICAgICAgb3V0LnB1c2godmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0O1xyXG59O1xyXG5cclxuLyoqXHJcbiogUmV0dXJucyBlbGVtZW50cyB0aGF0IGFyZSBwcmVzZW50IGluIGFsbCB0aGUgIGFycmF5cy5cclxuKlxyXG4qIEBwYXJhbSAxIHRvIE4gYXJyYXlzIC5DYWxsIHNpZ25hdHVyZSBpcyBpbnRlcnNlY3Rpb25OKGFycjEsIGFycjIsIC4uLiwgYXJyTikuXHJcbipcclxuKiBAcmV0dXJucyBhcnJheSBjb250YWluaW5nIGVsZW1lbnRzIGNvbW1vbiB0byBhbGwgYXJyYXlzLlxyXG4qL1xyXG5jb25zdCBpbnRlcnNlY3Rpb25OID0gZnVuY3Rpb24gaW50ZXJzZWN0aW9uTiguLi5hcmdzOiBhbnlbXSk6IGFueVtdIHtcclxuICAgIGlmIChhcmdzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICByZXR1cm4gYXJncy5sZW5ndGggPT09IDAgPyBbXSA6IGFyZ3NbMF07XHJcbiAgICB9XHJcbiAgICBsZXQgaW50ZXJzZWN0OiBhbnlbXSA9IGFyZ3NbMF07XHJcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAxOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vIHJldHVybnMgaXRlbXMgaW4gJ2ludGVyc2VjdCcgdGhhdCBpcyBhbHNvIGluIHRoZSAnYXJnc1tpXSdcclxuICAgICAgICBpbnRlcnNlY3QgPSBpbnRlcnNlY3Rpb24oaW50ZXJzZWN0LCBhcmdzW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpbnRlcnNlY3Q7XHJcbn07XHJcblxyXG4vKipcclxuKiBSZXR1cm5zIGVsZW1lbnRzIHRoYXQgYXJlIHByZXNlbnQgaW4gdGhlIGZpcnN0IGFycmF5IGJ1dCBub3QgaW4gdGhlIHNlY29uZC5cclxuKlxyXG4qIEBwYXJhbSAyIGFycmF5cy5cclxuKlxyXG4qIEByZXR1cm5zIGFycmF5IGNvbnRhaW5pbmcgZWxlbWVudHMgcHJlc2VudCBpbiBmaXJzdCBhcnJheSBidXQgbm90IGluIHNlY29uZC5cclxuKi9cclxuY29uc3QgZGlmZmVyZW5jZSA9IGZ1bmN0aW9uIGRpZmZlcmVuY2U8VD4ob25lOiBUW10sIHR3bzogVFtdKTogVFtdIHtcclxuICAgIC8vIHJldHVybiBpdGVtcyBpbiAnb25lJyB0aGF0IGlzIG5vdCBpbiAndHdvJ1xyXG4gICAgY29uc3QgbGVuOiBudW1iZXIgPSBvbmUubGVuZ3RoO1xyXG4gICAgY29uc3Qgb3V0OiBUW10gPSBbXTtcclxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHZhbDogVCA9IG9uZVtpXTtcclxuICAgICAgICBpZiAodHdvLmluZGV4T2YodmFsKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgb3V0LnB1c2godmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0O1xyXG59O1xyXG5cclxuLypcclxuICogQ3JlYXRlcyBhIG1lcmdlZCBvciBmbGF0dGVuZWQgYXJyYXkgLlxyXG4gKlxyXG4gKiBAcGFyYW0gMSB0byBOIGFycmF5cy4gQ2FsbCBzaWduYXR1cmUgaXMgbWVyZ2UoYXJyMSwgYXJyMiwgLi4uLCBhcnJOKSAuXHJcbiAqXHJcbiAqIEByZXR1cm5zIGFycmF5IGNvbnRhaW5pbmcgYWxsIHRoZSBlbGVtZW50cyBmcm9tIGVhY2ggaW5wdXQgYXJyYXkuXHJcbiAqL1xyXG5jb25zdCBtZXJnZSA9IGZ1bmN0aW9uICguLi5hcmdzOiBhbnlbXSk6IGFueVtdIHtcclxuICAgIHJldHVybiBhcmdzLnJlZHVjZSgoYWNjdW06IGFueVtdLCBhcmc6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGFjY3VtLmNvbmNhdChhcmcpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vKipcclxuKiBDb21iaW5lcyB0aGUgZWxlbWVudHMgb2YgbXVsdGlwbGUgYXJyYXlzLlxyXG4qXHJcbiogQHBhcmFtIDEgdG8gTiBhcnJheXMuQ2FsbCBzaWduYXR1cmUgaXMgdW5pb24oYXJyMSwgYXJyMiwgLi4uLCBhcnJOKS5cclxuKlxyXG4qIEByZXR1cm5zIGFycmF5IGNvbnRhaW5pbmcgZGlzdGluY3QgZWxlbWVudHMgb2YgYWxsIHRoZSBpbnB1dCBhcnJheSAuXHJcbiovXHJcbmNvbnN0IHVuaW9uID0gZnVuY3Rpb24gdW5pb24oLi4uYXJnczogYW55W10pOiBhbnlbXSB7XHJcbiAgICBpZiAoYXJncy5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgIHJldHVybiBhcmdzLmxlbmd0aCA9PT0gMCA/IHVuZGVmaW5lZCA6IGFyZ3NbMF07XHJcbiAgICB9XHJcbiAgICBjb25zdCBsZW46IG51bWJlciA9IGFyZ3MubGVuZ3RoO1xyXG4gICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGFycjogYW55ID0gYXJnc1tpXTtcclxuICAgICAgICBpZiAoIVR5cGUuaXNBcnJheShhcnIpKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhcnJMZW4gPSBhcnIubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGo6IG51bWJlciA9IGFyckxlbiAtIDE7IGogPj0gMDsgLS1qKSB7XHJcbiAgICAgICAgICAgIG9ialthcnJbal1dID0gYXJyW2pdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHJlczogYW55W10gPSBbXTtcclxuICAgIGZvciAoY29uc3QgayBpbiBvYmopIHtcclxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspKSB7XHJcbiAgICAgICAgICAgIHJlcy5wdXNoKG9ialtrXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcztcclxufTtcclxuXHJcbi8qKlxyXG4qIFJldHVybnMgYW4gYXJyYXkgY29udGFpbmluZyBhbGwgdGhlIHZhbHVlcyBpbiB0aGUgbWFwLlxyXG4qXHJcbipcdHBhcnNlTWFwKHtcIm5hbWVcIjpcIkphaXNvblwiLCBcImRlc2lnbmF0aW9uXCI6XCJBcmNoaXRlY3RcIn0pOy8vIFtcIkphaXNvblwiLCBcIkFyY2hpdGVjdFwiXVxyXG4qXHJcbiogQHBhcmFtIG1hcCBJbnB1dCBNYXAuXHJcbipcclxuKiBAcmV0dXJucyBhcnJheSBjb250YWluaW5nIHZhbHVlcyBvZiB0aGUgbWFwLlxyXG4qL1xyXG5jb25zdCBmcm9tTWFwID0gZnVuY3Rpb24gZnJvbU1hcChtYXA6IGFueSk6IGFueVtdIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhtYXApLm1hcChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIG1hcFtrZXldO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vKipcclxuICogQ29uc3RydWN0IGEgTWFwIGZyb20gdGhlIGFycmF5IG9mIE9iamVjdHMuXHJcbiAqXHJcbiAqXHRsZXQgaW5wdXQgPSBbe1wibmFtZVwiOlwiUGFpXCIsIFwiYnJhbmNoXCI6XCJNZWNoXCJ9LCB7XCJuYW1lXCI6XCJNZWdobmFcIiwgXCJicmFuY2hcIjpcIklUXCJ9XTtcclxuICpcdHRvTWFwKGlucHV0LCBcIm5hbWVcIiwgXCJicmFuY2hcIik7Ly8ge1wiUGFpXCI6XCJNZWNoXCIsIFwiTWVnaG5hXCI6XCJJVFwifVxyXG4gKlxyXG4gKiBAcGFyYW0gYXJyYXkgQXJyYXkgb2YgT2JqZWN0cy5cclxuICogQHBhcmFtIGtleUZpZWxkIENvcnJlc3BvbmRpbmcgdmFsdWUgb2Yga2V5RmllbGQgaW4gdGhlIGFycmF5IHdpbGwgYmUgc3RvcmVkIGFzIGtleSBpbiB0aGUgbWFwLlxyXG4gKiBAcGFyYW0gdmFsdWVGaWVsZCBDb3JyZXNwb25kaW5nIHZhbHVlIG9mIHZhbHVlRmllbGQgaW4gdGhlIGFycmF5IHdpbGwgYmUgc3RvcmVkIGFzIHZhbHVlIGluIHRoZSBtYXAuXHJcbiAqXHJcbiAqIEByZXR1cm5zIFRoZSBNYXAuXHJcbiAqL1xyXG5jb25zdCB0b01hcCA9IGZ1bmN0aW9uIHRvTWFwKGFycmF5OiBhbnksIGtleUZpZWxkOiBzdHJpbmcsIHZhbHVlRmllbGQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICBpZiAoQ29yZS5pc0VtcHR5KGFycmF5KSkge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXA6IGFueSA9IHt9O1xyXG4gICAgbGV0IGtleTogYW55O1xyXG4gICAgZm9yIChjb25zdCBpbmRleCBpbiBhcnJheSkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW06IGFueSA9IGFycmF5W2luZGV4XTtcclxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICAgICAgICAgKiBJZiBrZXlGaWVsZCBpcyBub3QgcHJlc2VudCBpblxyXG4gICAgICAgICAqIG9iamVjdCwgZG8gbm90IGluc2VydCBpbiBtYXAuXHJcbiAgICAgICAgICogSWYgdmFsdWVGaWVsZCBoYXMgYmVlbiBwYXNzZWQsIGJ1dFxyXG4gICAgICAgICAqIGlzIG5vdCBhIHByb3BlcnR5IG9mIHRoZSBvYmplY3QsXHJcbiAgICAgICAgICogaW5zZXJ0IGtleSBtYXBwZWQgdG8gdW5kZWZpbmVkLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGlmICghaXRlbS5oYXNPd25Qcm9wZXJ0eShrZXlGaWVsZCkpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGtleSA9IGl0ZW1ba2V5RmllbGRdO1xyXG4gICAgICAgIG1hcFtrZXldID0gdmFsdWVGaWVsZCA/IGl0ZW1bdmFsdWVGaWVsZF0gOiBpdGVtO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hcDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGNvbnRhaW5zLCBwaWNrQW55LCBpbnRlcnNlY3Rpb24sIGludGVyc2VjdGlvbk4sIGRpZmZlcmVuY2UsIG1lcmdlLCB1bmlvbiwgZnJvbU1hcCwgdG9NYXBcclxufTtcclxuIl19
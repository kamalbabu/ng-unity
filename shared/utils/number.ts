import Core from "./core";
import Type from "./type";

/**
 * Returns the absolute value of a number
 *
 * @param val Number
 *
 *      getAbsoluteValue(-20) // 20
 *
 * @returns The absolute value of number.
 */
const getAbsoluteValue = function getAbsoluteValue(val: number): number {
    return Math.abs(val);
};

/**
 * Converts a string to an integer of base 10.
 *
 * @param val String to be parsed.
 *
 *      parse("1234567890") // 1234567890
 *
 * @returns An integer number.
 */
const parse = function parse(val: string): number {
    return parseInt(val, 10);
};

/**
 * Converts a string representation of a hexadecimal number to its equivalent
 * base 10 number.
 *
 * @param val String to be parsed.
 *
 *      parseHex("1234567890ABCDEF")// 1311768467294899700
 *
 * @returns An integer number.
 */
const parseHex = function parseHex(val: string): number {
    return parseInt(val, 16);
};

/**
 * Converts a string representation of a binary number to its equivalent
 * base 10 number.
 *
 * @param val String to be parsed.
 *
 *      parseBin("1001") // 9
 *
 * @returns An integer number.
 */
const parseBin = function parseBin(val: string): number {
    return parseInt(val, 2);
};

/**
 * Converts a string representation of an octal number to its equivalent
 * base 10 number.
 *
 * @param val String to be parsed.
 *
 *      parseBin("1234567") // 342391
 *
 * @returns An integer number.
 */
const parseOct = function parseOct(val: string): number {
    return parseInt(val, 8);
};

/**
 * Converts a string to a float.
 *
 * @param val string that represents the value to be parsed.
 *
 * @returns  floating point number parsed from the given string.
 */
const parseFloatNumbers = function parseFloatNumbers(val: string): number {
    return parseFloat(val);
};

/**
 * Extracts numeric values from a string.
 *
 *	extract("sf2sw4r33fdg4")// 24334
 *
 * @param val String containing digits to be extracted like "as34ft2g5".
 *
 * @returns number containing the extracted digits.
 */
const extract = function extract(val: string): number | null {
    const nums: RegExpMatchArray | null = val.match(/[0-9]+/g);
    if (nums) {
        return Core.isNull(nums) ? null : parse(nums.join(""));
    } else {
        return null;
    }
};

/**
 * Converts to String.
 *
 * @param value Value to be converted to string.
 *
 * @returns String representation of value.
 */
const stringify = function stringify(value: any): string {
    if (Type.isNumber(value, true)) {
        return value.toString();
    }
    return value;
};

/**
 * Generate a random number within a range.
 *
 * @param len Upper bound for the rnadom number.
 *
 * @returns a random number within the range 0-len.
 */
const random = function random(len: number): number {
    return Math.floor((Math.random() * len));
};

/**
 * Rounds off a number to fixed decimal places.
 *
 * @param value Value to be round off.
 * @param decimals Number of decimal points , default 2.
 * @param roundUp Optional .
 *
 * @returns number round to the specified decimal places.
 */
const toFixed = function toFixed(value: number, decimals?: number, roundUp?: boolean): string {
    if (!Type.isNumber(decimals)) {
        decimals = 2;
    }
    roundUp = Core.coalesce(roundUp, true);
    let result = +(value + "e" + decimals);
    if (roundUp) {
        result = Math.round(result);
    }
    result = +(result + "e" + -<number> decimals);
    return result.toFixed(decimals);
};

/**
 * Formats a value as percentage according to a  pattern .
 *
 *      formatNumberAsPercentage(435.435456,"###.##") // "435.44%".
 *
 * @param value  Value to be formatted.
 * @param pattern  Pattern to be used e.g. ###.##.
 *
 * @returns  Formated Number as percentage .
 */
const formatNumberAsPercentage = function formatNumberAsPercentage(value: any, pattern: string): string {
    return formatNumber(value, pattern) + "%";
};

/**
 * Formats a value according to a pattern .
 *
 *      formatNumber(23.4656,"##.##") // "23.47".
 *
 * @param value  Value to be formatted
 * @param pattern  Pattern to be used e.g.:###.## .
 *
 * @returns  Formated Number .
 */
const formatNumber = function formatNumber(value: any, pattern: string): string | undefined {
    // eg. Pattern - ###,###.##
    let formattedNumber: string | undefined;
    if (Core.isEmpty(value) || Core.isEmpty(pattern)) {
        return value;
    }
    const temp: string = Type.isString(value) ? value : "" + value;
    if (pattern.length > 0 && temp.length > 0) {
        const patternSplitByDecimal: string[] = pattern.split(".");
        let formattedInteger: string;
        let patternDecimalLength: number = 0;
        let formattedDecimalPart: string | null = "";
        if (patternSplitByDecimal.length > 1) {
            patternDecimalLength = patternSplitByDecimal[1].length;
        }
        value = roundNumber(temp, patternDecimalLength);
        const numberSplitbyDecimal: string[] = temp.split(".");
        formattedInteger = formatInteger(patternSplitByDecimal, numberSplitbyDecimal[0]);
        if (numberSplitbyDecimal.length > 1) {
            formattedDecimalPart = formatDecimal(patternDecimalLength, numberSplitbyDecimal[1]);
        }
        formattedNumber = formattedInteger + formattedDecimalPart;
    }
    return formattedNumber;
};

const roundNumber = function roundNumber(value: any, patternDecimalLength: number): string {
    const roundingFactor: number = Math.pow(10, patternDecimalLength);
    return (Math.round(value * roundingFactor) / roundingFactor) + "";
};

const formatInteger = function formatInteger(patternSplitByDecimal: string[], integerPart: any): string {
    let digitsTraversed: number = 0;
    const seperatedInteger: number[] = [];
    const patternSplitByComma: string[] = patternSplitByDecimal[0].split(",");
    patternSplitByComma.reverse().forEach(function (element, index, array) {
        const sectionLength: number = element.length;
        const start: number = (integerPart.length - (sectionLength + digitsTraversed)) < 0 ? 0 : (integerPart.length - (sectionLength + digitsTraversed));
        const end: number = (integerPart.length - digitsTraversed) < 0 ? 0 : (integerPart.length - digitsTraversed);
        digitsTraversed += sectionLength;
        if (end > 0) {
            seperatedInteger.push(integerPart.slice(start, end));
        }
    });
    if (digitsTraversed < integerPart.length) {
        seperatedInteger[seperatedInteger.length - 1] = integerPart.slice(0, (integerPart.length - digitsTraversed)).concat(seperatedInteger[seperatedInteger.length - 1]);
    }
    return seperatedInteger.reverse().join(",");
};

const formatDecimal = function formatDecimal(patternDecimalLength: number, decimalPart: string): string | null {
    let formattedDecimalPart: string | undefined;
    if (Core.isNotNull(decimalPart)) {
        if (patternDecimalLength > 0) {
            formattedDecimalPart = decimalPart.substring(0, patternDecimalLength);
        }
    }
    if (formattedDecimalPart) {
        return (Core.isNotNull(formattedDecimalPart) ? "." + formattedDecimalPart : "");
    } else {
        return null;
    }
};

export default {
    getAbsoluteValue, parse, parseHex, parseBin, parseOct, parseFloatNumbers, extract, stringify, random, toFixed, formatNumberAsPercentage, formatNumber
};

import Number from "./number";
import Type from "./type";
import Core from "./core";

const REGEX = {
    LTRIM: /^[\s\uFEFF\xA0]+/g,
    RTRIM: /[\s\uFEFF\xA0]+$/g,
    FORMAT: /\{(\d+)\}/g,
    SPECIAL_CHARS: /([\:\-\_]+(.))/g,
    UPPER_CASE: /[A-Z]/g,
    TRIM_LINES: /^[\r\n]+|\.|[\r\n]+$/g
};

/**
 * Removes spaces from left of a string.
 *
 *	ltrim(" hello ") // "hello ".
 *
 *@param val String to be trimmed from left.
 *
 *@returns String trimmed from left.
 */
const ltrim = function ltrim(val: string): string {
    return val.replace(REGEX.LTRIM, "");
};

/**
* Removes spaces from right of a string.
*
*	rtrim(" hello ") // " hello".
*
*@param val String to be trimmed from right.
*
*@returns String trimmed from right.
*/
const rtrim = function rtrim(val: string): string {
    return val.replace(REGEX.RTRIM, "");
};

/**
 * Pads a word  with characters to the left
 * so that word is of a particular length.
 *
 *	padLeft("Hai","@",5) // "@@Hai".
 *
 * @param str input word to be padded.
 * @param padChar character that will be padded.
 * @param maxLen maximum length of the result.
 *
 * @returns Word of length  maxLen with character padded to left .
 */
const padLeft = function padLeft(str: string, padChar: string, maxLen: number): string {

    str = String(str);
    while (str.length < maxLen) {
        str = padChar + str;
    }

    return str;
};

/**
 * Pads a word  with characters to the right
 * so that word is of a particular length .
 *
 *	padRight("Hai","@",5) // "Hai@@".
 *
 * @param str input word to be padded.
 * @param padChar character that will be padded.
 * @param maxLen maximum length of the result.
 *
 * @returns Word of length  maxLen with character padded to right .
 */
const padRight = function padRight(str: string, padChar: string, maxLen: number): string {

    str = String(str);
    while (str.length < maxLen) {
        str += padChar;
    }

    return str;
};

/**
 * Converts {i} expressions in a phrase  to values specified as arguments.
 *
 *	format("Hello agent {0}, how are you {1}?", 47, "today") //
 *          "Hello agent 47, how are you today?".
 *
 *@param target Phrase to be formatted.
 *@param args Arguments to replace {} expressions in target.
 *
 *@returns Formatted Phrase.
 */
const format = function format(target: string, ...args: any[]): string {
    if (!Type.isString(target)) {
        // Error.throws("Invalid arguments!");
        throw new Error("Invalid arguments!");
    }
    if (args.length < 1) {
        return target;
    }
    const vals: any[] = args.length > 1 ? args : Type.isArray(args[0]) ? args[0] : [args[0]];

    return target.replace(REGEX.FORMAT, function (match: string, m: string) {

        const idx: number = Number.parse(m);
        if (idx < 0 || idx >= vals.length) {
            // Error.throws("Invalid arguments!");
            throw new Error("Invalid arguments!");

        }
        return vals[idx];
    });
};

/**
 * Converts snake case input to camel case.
 *
 * @param word word or phras  in which elements are separated with _ and no
 * spaces(snake_case) like hello_world ,Hello_world.
 *
 * @returns camelcased representation ie representation in which elements at
 * middle of the phrase begins with a capital letter, with no spaces or hyphens
 * like helloWorld.
 *
 *	snakeToCamel("hello_world")// "helloWorld".
 */
const snakeToCamel = function snakeToCamel(word: string): string {
    word = word.toLowerCase();
    return word.replace(REGEX.SPECIAL_CHARS, function (_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
    });
};

/**
 * Converts camel case input to snake case.
 *
 * @param word word or phrase in which elements at middle of the phrase begins with a
 * capital letter, with no spaces or hyphens like helloWorld.
 *
 * @returns snake cased representation of the word.
 *
 *	camelToSnake("helloWorld") // "hello_world".
 */
const camelToSnake = function camelToSnake(word: string, separator: any): string {
    return word.replace(REGEX.UPPER_CASE, function (letter, offset) {
        return offset ? separator + letter.toLowerCase() : letter;
    });
};

/**
 * Converts camel case input to title case.
 *
 *      camelToTitle("helloWorld")// "Hello World".
 *
 * @param camel cased word or phrase.
 *
 * @returns title cased representation of the word or phrase.
 */
const camelToTitle = function camelToTitle(word: string): string | null {
    if (Core.isNull(word)) {
        return null;
    }
    let title: string = "";
    let firstCharacter: string | null;
    const splits: string[] = word.split(REGEX.UPPER_CASE);
    const SEPARATOR: string = " ";
    const regExpMatches: RegExpMatchArray | null = word.match(REGEX.UPPER_CASE);
    const length: number = splits.length;
    if (regExpMatches) {
        for (let i: number = 1; i < length; i++) {
            splits[i] = regExpMatches[i - 1] + splits[i];
            title += SEPARATOR + splits[i];
        }
        firstCharacter = splits[0].charAt(0);
        splits[0] = splits[0].replace(firstCharacter, firstCharacter.toUpperCase());
        title = splits[0] + title;
        return title;
    }
    return null;
};

/**
 * Converts snake case input to pascal case.
 *
 * @param snake cased word or phrase.
 *
 * @returns pascal cased representation of the word or phrase.
 *
 *	snakeToPascal("hello_world") // "HelloWorld".
 */
const snakeToPascal = function snakeToPascal(word: string, separator: string): string {
    const result: string = snakeToCamel(word);
    return camelToPascal(result);
};
/**
 * Converts camel case input to pascal case.
 *
 * @param camel cased word or phrase.
 *
 * @returns pascal cased representation of the word or phrase.
 *
 *	camelToPascal("helloWorld")// "HelloWorld".
 */
const camelToPascal = function camelToPascal(word: string): string {
    const firstCharacter: string = word.charAt(0);
    return word.replace(firstCharacter, firstCharacter.toUpperCase());
};

/**
 * Converts pascal case input to camel case.
 *
 * @param pascal cased word or phrase.
 *
 * @returns camel cased representation of the word or phrase.
 *
 *	pascalToCamel("HelloWorld") // "helloWorld".
 */
const pascalToCamel = function pascalToCamel(word: string): string {
    const firstCharacter: string = word.charAt(0);
    return word.replace(firstCharacter, firstCharacter.toLowerCase());
};

/**
 * Converts title case input to camel case.
 *
 * @param title cased word or phrase.
 *
 * @returns camel cased representation of the word or phrase.
 *
 *	titleToCamel("Hello World")// "helloWorld".
 */
const titleToCamel = function titleToCamel(title: string): string | null {
    if (Core.isNull(title)) {
        return null;
    }
    const SEPARATOR: string = " ";
    const splits: string[] = title.split(SEPARATOR);
    const length: number = splits.length;
    let firstCharacter: string;
    let word: string = splits[0];
    let split: string;
    for (let i: number = 1; i < length; i++) {
        split = splits[i];
        firstCharacter = split.charAt ? split.charAt(0) : split;
        word += split.replace(firstCharacter, firstCharacter.toUpperCase());
    }
    firstCharacter = word.charAt(0);
    word = word.replace(firstCharacter, firstCharacter.toLowerCase());
    return word;
};

/**
 * The method determines whether a string ends with the characters of another string,
 *  returning true or false as appropriate.
 *
 * @param target the string to be searched on
 * @param search the string to be searched for
 */
const endsWith = function endsWith(target: string, search: string): boolean {
    if (Core.isNull(target, search)) {
        return false;
    }
    const lastPos: number = target.lastIndexOf(search);
    return lastPos !== -1 && lastPos === (target.length - search.length);
};

/**
 * The method determines whether a string begins with the characters of another
 * string, returning true or false as appropriate.
 *
 * @param target the string to be searched on
 * @param search the string to be searched for
 */
const startsWith = function startsWith(target: string, search: string): boolean {
    if (Core.isNull(target, search)) {
        return false;
    }
    return target.substring(0, search.length) === search;
};
/**
 * The method trims the extra leading and trailing new lines from the entered string
 *
 * @param string to be trimmed
 */
const trimNewLines = function trimNewLines(val: string): string {
    return val.replace(REGEX.TRIM_LINES, "");
};

export default {
    ltrim, rtrim, padLeft, padRight, format, snakeToCamel, camelToSnake,
    camelToTitle, snakeToPascal, camelToPascal, pascalToCamel, titleToCamel,
    endsWith, startsWith, trimNewLines
};

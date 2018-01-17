"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var number_1 = require("./number");
var type_1 = require("./type");
var core_1 = require("./core");
var REGEX = {
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
var ltrim = function ltrim(val) {
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
var rtrim = function rtrim(val) {
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
var padLeft = function padLeft(str, padChar, maxLen) {
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
var padRight = function padRight(str, padChar, maxLen) {
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
var format = function format(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (!type_1.default.isString(target)) {
        // Error.throws("Invalid arguments!");
        throw new Error("Invalid arguments!");
    }
    if (args.length < 1) {
        return target;
    }
    var vals = args.length > 1 ? args : type_1.default.isArray(args[0]) ? args[0] : [args[0]];
    return target.replace(REGEX.FORMAT, function (match, m) {
        var idx = number_1.default.parse(m);
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
var snakeToCamel = function snakeToCamel(word) {
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
var camelToSnake = function camelToSnake(word, separator) {
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
var camelToTitle = function camelToTitle(word) {
    if (core_1.default.isNull(word)) {
        return null;
    }
    var title = "";
    var firstCharacter;
    var splits = word.split(REGEX.UPPER_CASE);
    var SEPARATOR = " ";
    var regExpMatches = word.match(REGEX.UPPER_CASE);
    var length = splits.length;
    if (regExpMatches) {
        for (var i = 1; i < length; i++) {
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
var snakeToPascal = function snakeToPascal(word, separator) {
    var result = snakeToCamel(word);
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
var camelToPascal = function camelToPascal(word) {
    var firstCharacter = word.charAt(0);
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
var pascalToCamel = function pascalToCamel(word) {
    var firstCharacter = word.charAt(0);
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
var titleToCamel = function titleToCamel(title) {
    if (core_1.default.isNull(title)) {
        return null;
    }
    var SEPARATOR = " ";
    var splits = title.split(SEPARATOR);
    var length = splits.length;
    var firstCharacter;
    var word = splits[0];
    var split;
    for (var i = 1; i < length; i++) {
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
var endsWith = function endsWith(target, search) {
    if (core_1.default.isNull(target, search)) {
        return false;
    }
    var lastPos = target.lastIndexOf(search);
    return lastPos !== -1 && lastPos === (target.length - search.length);
};
/**
 * The method determines whether a string begins with the characters of another
 * string, returning true or false as appropriate.
 *
 * @param target the string to be searched on
 * @param search the string to be searched for
 */
var startsWith = function startsWith(target, search) {
    if (core_1.default.isNull(target, search)) {
        return false;
    }
    return target.substring(0, search.length) === search;
};
/**
 * The method trims the extra leading and trailing new lines from the entered string
 *
 * @param string to be trimmed
 */
var trimNewLines = function trimNewLines(val) {
    return val.replace(REGEX.TRIM_LINES, "");
};
exports.default = {
    ltrim: ltrim, rtrim: rtrim, padLeft: padLeft, padRight: padRight, format: format, snakeToCamel: snakeToCamel, camelToSnake: camelToSnake,
    camelToTitle: camelToTitle, snakeToPascal: snakeToPascal, camelToPascal: camelToPascal, pascalToCamel: pascalToCamel, titleToCamel: titleToCamel,
    endsWith: endsWith, startsWith: startsWith, trimNewLines: trimNewLines
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQThCO0FBQzlCLCtCQUEwQjtBQUMxQiwrQkFBMEI7QUFFMUIsSUFBTSxLQUFLLEdBQUc7SUFDVixLQUFLLEVBQUUsbUJBQW1CO0lBQzFCLEtBQUssRUFBRSxtQkFBbUI7SUFDMUIsTUFBTSxFQUFFLFlBQVk7SUFDcEIsYUFBYSxFQUFFLGlCQUFpQjtJQUNoQyxVQUFVLEVBQUUsUUFBUTtJQUNwQixVQUFVLEVBQUUsdUJBQXVCO0NBQ3RDLENBQUM7QUFFRjs7Ozs7Ozs7R0FRRztBQUNILElBQU0sS0FBSyxHQUFHLGVBQWUsR0FBVztJQUNwQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3hDLENBQUMsQ0FBQztBQUVGOzs7Ozs7OztFQVFFO0FBQ0YsSUFBTSxLQUFLLEdBQUcsZUFBZSxHQUFXO0lBQ3BDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxJQUFNLE9BQU8sR0FBRyxpQkFBaUIsR0FBVyxFQUFFLE9BQWUsRUFBRSxNQUFjO0lBRXpFLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEIsT0FBTyxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRSxDQUFDO1FBQ3pCLEdBQUcsR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxNQUFNLENBQUMsR0FBRyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxJQUFNLFFBQVEsR0FBRyxrQkFBa0IsR0FBVyxFQUFFLE9BQWUsRUFBRSxNQUFjO0lBRTNFLEdBQUcsR0FB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QUFLLE1BQU0sQ0FBQztBQUN6RCxDQUFDLENBQUM7QUFDRjs7OztHQUlHO0FBQ0gsSUFBTSxZQUFZLEdBQUcsc0JBQXNCLEdBQVc7SUFDbEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUM7QUFFRixrQkFBZTtJQUNYLEtBQUssT0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLFlBQVksY0FBQSxFQUFFLFlBQVksY0FBQTtJQUNuRSxZQUFZLGNBQUEsRUFBRSxhQUFhLGVBQUEsRUFBRSxhQUFhLGVBQUEsRUFBRSxhQUFhLGVBQUEsRUFBRSxZQUFZLGNBQUE7SUFDdkUsUUFBUSxVQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsWUFBWSxjQUFBO0NBQ3JDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTnVtYmVyIGZyb20gXCIuL251bWJlclwiO1xyXG5pbXBvcnQgVHlwZSBmcm9tIFwiLi90eXBlXCI7XHJcbmltcG9ydCBDb3JlIGZyb20gXCIuL2NvcmVcIjtcclxuXHJcbmNvbnN0IFJFR0VYID0ge1xyXG4gICAgTFRSSU06IC9eW1xcc1xcdUZFRkZcXHhBMF0rL2csXHJcbiAgICBSVFJJTTogL1tcXHNcXHVGRUZGXFx4QTBdKyQvZyxcclxuICAgIEZPUk1BVDogL1xceyhcXGQrKVxcfS9nLFxyXG4gICAgU1BFQ0lBTF9DSEFSUzogLyhbXFw6XFwtXFxfXSsoLikpL2csXHJcbiAgICBVUFBFUl9DQVNFOiAvW0EtWl0vZyxcclxuICAgIFRSSU1fTElORVM6IC9eW1xcclxcbl0rfFxcLnxbXFxyXFxuXSskL2dcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIHNwYWNlcyBmcm9tIGxlZnQgb2YgYSBzdHJpbmcuXHJcbiAqXHJcbiAqXHRsdHJpbShcIiBoZWxsbyBcIikgLy8gXCJoZWxsbyBcIi5cclxuICpcclxuICpAcGFyYW0gdmFsIFN0cmluZyB0byBiZSB0cmltbWVkIGZyb20gbGVmdC5cclxuICpcclxuICpAcmV0dXJucyBTdHJpbmcgdHJpbW1lZCBmcm9tIGxlZnQuXHJcbiAqL1xyXG5jb25zdCBsdHJpbSA9IGZ1bmN0aW9uIGx0cmltKHZhbDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB2YWwucmVwbGFjZShSRUdFWC5MVFJJTSwgXCJcIik7XHJcbn07XHJcblxyXG4vKipcclxuKiBSZW1vdmVzIHNwYWNlcyBmcm9tIHJpZ2h0IG9mIGEgc3RyaW5nLlxyXG4qXHJcbipcdHJ0cmltKFwiIGhlbGxvIFwiKSAvLyBcIiBoZWxsb1wiLlxyXG4qXHJcbipAcGFyYW0gdmFsIFN0cmluZyB0byBiZSB0cmltbWVkIGZyb20gcmlnaHQuXHJcbipcclxuKkByZXR1cm5zIFN0cmluZyB0cmltbWVkIGZyb20gcmlnaHQuXHJcbiovXHJcbmNvbnN0IHJ0cmltID0gZnVuY3Rpb24gcnRyaW0odmFsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHZhbC5yZXBsYWNlKFJFR0VYLlJUUklNLCBcIlwiKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBQYWRzIGEgd29yZCAgd2l0aCBjaGFyYWN0ZXJzIHRvIHRoZSBsZWZ0XHJcbiAqIHNvIHRoYXQgd29yZCBpcyBvZiBhIHBhcnRpY3VsYXIgbGVuZ3RoLlxyXG4gKlxyXG4gKlx0cGFkTGVmdChcIkhhaVwiLFwiQFwiLDUpIC8vIFwiQEBIYWlcIi5cclxuICpcclxuICogQHBhcmFtIHN0ciBpbnB1dCB3b3JkIHRvIGJlIHBhZGRlZC5cclxuICogQHBhcmFtIHBhZENoYXIgY2hhcmFjdGVyIHRoYXQgd2lsbCBiZSBwYWRkZWQuXHJcbiAqIEBwYXJhbSBtYXhMZW4gbWF4aW11bSBsZW5ndGggb2YgdGhlIHJlc3VsdC5cclxuICpcclxuICogQHJldHVybnMgV29yZCBvZiBsZW5ndGggIG1heExlbiB3aXRoIGNoYXJhY3RlciBwYWRkZWQgdG8gbGVmdCAuXHJcbiAqL1xyXG5jb25zdCBwYWRMZWZ0ID0gZnVuY3Rpb24gcGFkTGVmdChzdHI6IHN0cmluZywgcGFkQ2hhcjogc3RyaW5nLCBtYXhMZW46IG51bWJlcik6IHN0cmluZyB7XHJcblxyXG4gICAgc3RyID0gU3RyaW5nKHN0cik7XHJcbiAgICB3aGlsZSAoc3RyLmxlbmd0aCA8IG1heExlbikge1xyXG4gICAgICAgIHN0ciA9IHBhZENoYXIgKyBzdHI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHN0cjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBQYWRzIGEgd29yZCAgd2l0aCBjaGFyYWN0ZXJzIHRvIHRoZSByaWdodFxyXG4gKiBzbyB0aGF0IHdvcmQgaXMgb2YgYSBwYXJ0aWN1bGFyIGxlbmd0aCAuXHJcbiAqXHJcbiAqXHRwYWRSaWdodChcIkhhaVwiLFwiQFwiLDUpIC8vIFwiSGFpQEBcIi5cclxuICpcclxuICogQHBhcmFtIHN0ciBpbnB1dCB3b3JkIHRvIGJlIHBhZGRlZC5cclxuICogQHBhcmFtIHBhZENoYXIgY2hhcmFjdGVyIHRoYXQgd2lsbCBiZSBwYWRkZWQuXHJcbiAqIEBwYXJhbSBtYXhMZW4gbWF4aW11bSBsZW5ndGggb2YgdGhlIHJlc3VsdC5cclxuICpcclxuICogQHJldHVybnMgV29yZCBvZiBsZW5ndGggIG1heExlbiB3aXRoIGNoYXJhY3RlciBwYWRkZWQgdG8gcmlnaHQgLlxyXG4gKi9cclxuY29uc3QgcGFkUmlnaHQgPSBmdW5jdGlvbiBwYWRSaWdodChzdHI6IHN0cmluZywgcGFkQ2hhcjogc3RyaW5nLCBtYXhMZW46IG51bWJlcik6IHN0cmluZyB7XHJcblxyXG4gICAgc3RyID0gU3RyaW5nKHN0cik7XHJcbiAgICB3aGlsZSAoc3RyLmxlbmd0aCA8IG1heExlbikge1xyXG4gICAgICAgIHN0ciArPSBwYWRDaGFyO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdHI7XHJcbn07XHJcblxyXG4vKipcclxuICogQ29udmVydHMge2l9IGV4cHJlc3Npb25zIGluIGEgcGhyYXNlICB0byB2YWx1ZXMgc3BlY2lmaWVkIGFzIGFyZ3VtZW50cy5cclxuICpcclxuICpcdGZvcm1hdChcIkhlbGxvIGFnZW50IHswfSwgaG93IGFyZSB5b3UgezF9P1wiLCA0NywgXCJ0b2RheVwiKSAvL1xyXG4gKiAgICAgICAgICBcIkhlbGxvIGFnZW50IDQ3LCBob3cgYXJlIHlvdSB0b2RheT9cIi5cclxuICpcclxuICpAcGFyYW0gdGFyZ2V0IFBocmFzZSB0byBiZSBmb3JtYXR0ZWQuXHJcbiAqQHBhcmFtIGFyZ3MgQXJndW1lbnRzIHRvIHJlcGxhY2Uge30gZXhwcmVzc2lvbnMgaW4gdGFyZ2V0LlxyXG4gKlxyXG4gKkByZXR1cm5zIEZvcm1hdHRlZCBQaHJhc2UuXHJcbiAqL1xyXG5jb25zdCBmb3JtYXQgPSBmdW5jdGlvbiBmb3JtYXQodGFyZ2V0OiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKTogc3RyaW5nIHtcclxuICAgIGlmICghVHlwZS5pc1N0cmluZyh0YXJnZXQpKSB7XHJcbiAgICAgICAgLy8gRXJyb3IudGhyb3dzKFwiSW52YWxpZCBhcmd1bWVudHMhXCIpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYXJndW1lbnRzIVwiKTtcclxuICAgIH1cclxuICAgIGlmIChhcmdzLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgY29uc3QgdmFsczogYW55W10gPSBhcmdzLmxlbmd0aCA+IDEgPyBhcmdzIDogVHlwZS5pc0FycmF5KGFyZ3NbMF0pID8gYXJnc1swXSA6IFthcmdzWzBdXTtcclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0LnJlcGxhY2UoUkVHRVguRk9STUFULCBmdW5jdGlvbiAobWF0Y2g6IHN0cmluZywgbTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGlkeDogbnVtYmVyID0gTnVtYmVyLnBhcnNlKG0pO1xyXG4gICAgICAgIGlmIChpZHggPCAwIHx8IGlkeCA+PSB2YWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAvLyBFcnJvci50aHJvd3MoXCJJbnZhbGlkIGFyZ3VtZW50cyFcIik7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYXJndW1lbnRzIVwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxzW2lkeF07XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBzbmFrZSBjYXNlIGlucHV0IHRvIGNhbWVsIGNhc2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB3b3JkIHdvcmQgb3IgcGhyYXMgIGluIHdoaWNoIGVsZW1lbnRzIGFyZSBzZXBhcmF0ZWQgd2l0aCBfIGFuZCBub1xyXG4gKiBzcGFjZXMoc25ha2VfY2FzZSkgbGlrZSBoZWxsb193b3JsZCAsSGVsbG9fd29ybGQuXHJcbiAqXHJcbiAqIEByZXR1cm5zIGNhbWVsY2FzZWQgcmVwcmVzZW50YXRpb24gaWUgcmVwcmVzZW50YXRpb24gaW4gd2hpY2ggZWxlbWVudHMgYXRcclxuICogbWlkZGxlIG9mIHRoZSBwaHJhc2UgYmVnaW5zIHdpdGggYSBjYXBpdGFsIGxldHRlciwgd2l0aCBubyBzcGFjZXMgb3IgaHlwaGVuc1xyXG4gKiBsaWtlIGhlbGxvV29ybGQuXHJcbiAqXHJcbiAqXHRzbmFrZVRvQ2FtZWwoXCJoZWxsb193b3JsZFwiKS8vIFwiaGVsbG9Xb3JsZFwiLlxyXG4gKi9cclxuY29uc3Qgc25ha2VUb0NhbWVsID0gZnVuY3Rpb24gc25ha2VUb0NhbWVsKHdvcmQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICB3b3JkID0gd29yZC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIHdvcmQucmVwbGFjZShSRUdFWC5TUEVDSUFMX0NIQVJTLCBmdW5jdGlvbiAoXywgc2VwYXJhdG9yLCBsZXR0ZXIsIG9mZnNldCkge1xyXG4gICAgICAgIHJldHVybiBvZmZzZXQgPyBsZXR0ZXIudG9VcHBlckNhc2UoKSA6IGxldHRlcjtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNhbWVsIGNhc2UgaW5wdXQgdG8gc25ha2UgY2FzZS5cclxuICpcclxuICogQHBhcmFtIHdvcmQgd29yZCBvciBwaHJhc2UgaW4gd2hpY2ggZWxlbWVudHMgYXQgbWlkZGxlIG9mIHRoZSBwaHJhc2UgYmVnaW5zIHdpdGggYVxyXG4gKiBjYXBpdGFsIGxldHRlciwgd2l0aCBubyBzcGFjZXMgb3IgaHlwaGVucyBsaWtlIGhlbGxvV29ybGQuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHNuYWtlIGNhc2VkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB3b3JkLlxyXG4gKlxyXG4gKlx0Y2FtZWxUb1NuYWtlKFwiaGVsbG9Xb3JsZFwiKSAvLyBcImhlbGxvX3dvcmxkXCIuXHJcbiAqL1xyXG5jb25zdCBjYW1lbFRvU25ha2UgPSBmdW5jdGlvbiBjYW1lbFRvU25ha2Uod29yZDogc3RyaW5nLCBzZXBhcmF0b3I6IGFueSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gd29yZC5yZXBsYWNlKFJFR0VYLlVQUEVSX0NBU0UsIGZ1bmN0aW9uIChsZXR0ZXIsIG9mZnNldCkge1xyXG4gICAgICAgIHJldHVybiBvZmZzZXQgPyBzZXBhcmF0b3IgKyBsZXR0ZXIudG9Mb3dlckNhc2UoKSA6IGxldHRlcjtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIGNhbWVsIGNhc2UgaW5wdXQgdG8gdGl0bGUgY2FzZS5cclxuICpcclxuICogICAgICBjYW1lbFRvVGl0bGUoXCJoZWxsb1dvcmxkXCIpLy8gXCJIZWxsbyBXb3JsZFwiLlxyXG4gKlxyXG4gKiBAcGFyYW0gY2FtZWwgY2FzZWQgd29yZCBvciBwaHJhc2UuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHRpdGxlIGNhc2VkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB3b3JkIG9yIHBocmFzZS5cclxuICovXHJcbmNvbnN0IGNhbWVsVG9UaXRsZSA9IGZ1bmN0aW9uIGNhbWVsVG9UaXRsZSh3b3JkOiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIGlmIChDb3JlLmlzTnVsbCh3b3JkKSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgbGV0IHRpdGxlOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgbGV0IGZpcnN0Q2hhcmFjdGVyOiBzdHJpbmcgfCBudWxsO1xyXG4gICAgY29uc3Qgc3BsaXRzOiBzdHJpbmdbXSA9IHdvcmQuc3BsaXQoUkVHRVguVVBQRVJfQ0FTRSk7XHJcbiAgICBjb25zdCBTRVBBUkFUT1I6IHN0cmluZyA9IFwiIFwiO1xyXG4gICAgY29uc3QgcmVnRXhwTWF0Y2hlczogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwgPSB3b3JkLm1hdGNoKFJFR0VYLlVQUEVSX0NBU0UpO1xyXG4gICAgY29uc3QgbGVuZ3RoOiBudW1iZXIgPSBzcGxpdHMubGVuZ3RoO1xyXG4gICAgaWYgKHJlZ0V4cE1hdGNoZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc3BsaXRzW2ldID0gcmVnRXhwTWF0Y2hlc1tpIC0gMV0gKyBzcGxpdHNbaV07XHJcbiAgICAgICAgICAgIHRpdGxlICs9IFNFUEFSQVRPUiArIHNwbGl0c1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmlyc3RDaGFyYWN0ZXIgPSBzcGxpdHNbMF0uY2hhckF0KDApO1xyXG4gICAgICAgIHNwbGl0c1swXSA9IHNwbGl0c1swXS5yZXBsYWNlKGZpcnN0Q2hhcmFjdGVyLCBmaXJzdENoYXJhY3Rlci50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICB0aXRsZSA9IHNwbGl0c1swXSArIHRpdGxlO1xyXG4gICAgICAgIHJldHVybiB0aXRsZTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENvbnZlcnRzIHNuYWtlIGNhc2UgaW5wdXQgdG8gcGFzY2FsIGNhc2UuXHJcbiAqXHJcbiAqIEBwYXJhbSBzbmFrZSBjYXNlZCB3b3JkIG9yIHBocmFzZS5cclxuICpcclxuICogQHJldHVybnMgcGFzY2FsIGNhc2VkIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB3b3JkIG9yIHBocmFzZS5cclxuICpcclxuICpcdHNuYWtlVG9QYXNjYWwoXCJoZWxsb193b3JsZFwiKSAvLyBcIkhlbGxvV29ybGRcIi5cclxuICovXHJcbmNvbnN0IHNuYWtlVG9QYXNjYWwgPSBmdW5jdGlvbiBzbmFrZVRvUGFzY2FsKHdvcmQ6IHN0cmluZywgc2VwYXJhdG9yOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgcmVzdWx0OiBzdHJpbmcgPSBzbmFrZVRvQ2FtZWwod29yZCk7XHJcbiAgICByZXR1cm4gY2FtZWxUb1Bhc2NhbChyZXN1bHQpO1xyXG59O1xyXG4vKipcclxuICogQ29udmVydHMgY2FtZWwgY2FzZSBpbnB1dCB0byBwYXNjYWwgY2FzZS5cclxuICpcclxuICogQHBhcmFtIGNhbWVsIGNhc2VkIHdvcmQgb3IgcGhyYXNlLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBwYXNjYWwgY2FzZWQgcmVwcmVzZW50YXRpb24gb2YgdGhlIHdvcmQgb3IgcGhyYXNlLlxyXG4gKlxyXG4gKlx0Y2FtZWxUb1Bhc2NhbChcImhlbGxvV29ybGRcIikvLyBcIkhlbGxvV29ybGRcIi5cclxuICovXHJcbmNvbnN0IGNhbWVsVG9QYXNjYWwgPSBmdW5jdGlvbiBjYW1lbFRvUGFzY2FsKHdvcmQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBmaXJzdENoYXJhY3Rlcjogc3RyaW5nID0gd29yZC5jaGFyQXQoMCk7XHJcbiAgICByZXR1cm4gd29yZC5yZXBsYWNlKGZpcnN0Q2hhcmFjdGVyLCBmaXJzdENoYXJhY3Rlci50b1VwcGVyQ2FzZSgpKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBwYXNjYWwgY2FzZSBpbnB1dCB0byBjYW1lbCBjYXNlLlxyXG4gKlxyXG4gKiBAcGFyYW0gcGFzY2FsIGNhc2VkIHdvcmQgb3IgcGhyYXNlLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBjYW1lbCBjYXNlZCByZXByZXNlbnRhdGlvbiBvZiB0aGUgd29yZCBvciBwaHJhc2UuXHJcbiAqXHJcbiAqXHRwYXNjYWxUb0NhbWVsKFwiSGVsbG9Xb3JsZFwiKSAvLyBcImhlbGxvV29ybGRcIi5cclxuICovXHJcbmNvbnN0IHBhc2NhbFRvQ2FtZWwgPSBmdW5jdGlvbiBwYXNjYWxUb0NhbWVsKHdvcmQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBmaXJzdENoYXJhY3Rlcjogc3RyaW5nID0gd29yZC5jaGFyQXQoMCk7XHJcbiAgICByZXR1cm4gd29yZC5yZXBsYWNlKGZpcnN0Q2hhcmFjdGVyLCBmaXJzdENoYXJhY3Rlci50b0xvd2VyQ2FzZSgpKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB0aXRsZSBjYXNlIGlucHV0IHRvIGNhbWVsIGNhc2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB0aXRsZSBjYXNlZCB3b3JkIG9yIHBocmFzZS5cclxuICpcclxuICogQHJldHVybnMgY2FtZWwgY2FzZWQgcmVwcmVzZW50YXRpb24gb2YgdGhlIHdvcmQgb3IgcGhyYXNlLlxyXG4gKlxyXG4gKlx0dGl0bGVUb0NhbWVsKFwiSGVsbG8gV29ybGRcIikvLyBcImhlbGxvV29ybGRcIi5cclxuICovXHJcbmNvbnN0IHRpdGxlVG9DYW1lbCA9IGZ1bmN0aW9uIHRpdGxlVG9DYW1lbCh0aXRsZTogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgICBpZiAoQ29yZS5pc051bGwodGl0bGUpKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBjb25zdCBTRVBBUkFUT1I6IHN0cmluZyA9IFwiIFwiO1xyXG4gICAgY29uc3Qgc3BsaXRzOiBzdHJpbmdbXSA9IHRpdGxlLnNwbGl0KFNFUEFSQVRPUik7XHJcbiAgICBjb25zdCBsZW5ndGg6IG51bWJlciA9IHNwbGl0cy5sZW5ndGg7XHJcbiAgICBsZXQgZmlyc3RDaGFyYWN0ZXI6IHN0cmluZztcclxuICAgIGxldCB3b3JkOiBzdHJpbmcgPSBzcGxpdHNbMF07XHJcbiAgICBsZXQgc3BsaXQ6IHN0cmluZztcclxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDE7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHNwbGl0ID0gc3BsaXRzW2ldO1xyXG4gICAgICAgIGZpcnN0Q2hhcmFjdGVyID0gc3BsaXQuY2hhckF0ID8gc3BsaXQuY2hhckF0KDApIDogc3BsaXQ7XHJcbiAgICAgICAgd29yZCArPSBzcGxpdC5yZXBsYWNlKGZpcnN0Q2hhcmFjdGVyLCBmaXJzdENoYXJhY3Rlci50b1VwcGVyQ2FzZSgpKTtcclxuICAgIH1cclxuICAgIGZpcnN0Q2hhcmFjdGVyID0gd29yZC5jaGFyQXQoMCk7XHJcbiAgICB3b3JkID0gd29yZC5yZXBsYWNlKGZpcnN0Q2hhcmFjdGVyLCBmaXJzdENoYXJhY3Rlci50b0xvd2VyQ2FzZSgpKTtcclxuICAgIHJldHVybiB3b3JkO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBtZXRob2QgZGV0ZXJtaW5lcyB3aGV0aGVyIGEgc3RyaW5nIGVuZHMgd2l0aCB0aGUgY2hhcmFjdGVycyBvZiBhbm90aGVyIHN0cmluZyxcclxuICogIHJldHVybmluZyB0cnVlIG9yIGZhbHNlIGFzIGFwcHJvcHJpYXRlLlxyXG4gKlxyXG4gKiBAcGFyYW0gdGFyZ2V0IHRoZSBzdHJpbmcgdG8gYmUgc2VhcmNoZWQgb25cclxuICogQHBhcmFtIHNlYXJjaCB0aGUgc3RyaW5nIHRvIGJlIHNlYXJjaGVkIGZvclxyXG4gKi9cclxuY29uc3QgZW5kc1dpdGggPSBmdW5jdGlvbiBlbmRzV2l0aCh0YXJnZXQ6IHN0cmluZywgc2VhcmNoOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmIChDb3JlLmlzTnVsbCh0YXJnZXQsIHNlYXJjaCkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsYXN0UG9zOiBudW1iZXIgPSB0YXJnZXQubGFzdEluZGV4T2Yoc2VhcmNoKTtcclxuICAgIHJldHVybiBsYXN0UG9zICE9PSAtMSAmJiBsYXN0UG9zID09PSAodGFyZ2V0Lmxlbmd0aCAtIHNlYXJjaC5sZW5ndGgpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBtZXRob2QgZGV0ZXJtaW5lcyB3aGV0aGVyIGEgc3RyaW5nIGJlZ2lucyB3aXRoIHRoZSBjaGFyYWN0ZXJzIG9mIGFub3RoZXJcclxuICogc3RyaW5nLCByZXR1cm5pbmcgdHJ1ZSBvciBmYWxzZSBhcyBhcHByb3ByaWF0ZS5cclxuICpcclxuICogQHBhcmFtIHRhcmdldCB0aGUgc3RyaW5nIHRvIGJlIHNlYXJjaGVkIG9uXHJcbiAqIEBwYXJhbSBzZWFyY2ggdGhlIHN0cmluZyB0byBiZSBzZWFyY2hlZCBmb3JcclxuICovXHJcbmNvbnN0IHN0YXJ0c1dpdGggPSBmdW5jdGlvbiBzdGFydHNXaXRoKHRhcmdldDogc3RyaW5nLCBzZWFyY2g6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKENvcmUuaXNOdWxsKHRhcmdldCwgc2VhcmNoKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXQuc3Vic3RyaW5nKDAsIHNlYXJjaC5sZW5ndGgpID09PSBzZWFyY2g7XHJcbn07XHJcbi8qKlxyXG4gKiBUaGUgbWV0aG9kIHRyaW1zIHRoZSBleHRyYSBsZWFkaW5nIGFuZCB0cmFpbGluZyBuZXcgbGluZXMgZnJvbSB0aGUgZW50ZXJlZCBzdHJpbmdcclxuICpcclxuICogQHBhcmFtIHN0cmluZyB0byBiZSB0cmltbWVkXHJcbiAqL1xyXG5jb25zdCB0cmltTmV3TGluZXMgPSBmdW5jdGlvbiB0cmltTmV3TGluZXModmFsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHZhbC5yZXBsYWNlKFJFR0VYLlRSSU1fTElORVMsIFwiXCIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbHRyaW0sIHJ0cmltLCBwYWRMZWZ0LCBwYWRSaWdodCwgZm9ybWF0LCBzbmFrZVRvQ2FtZWwsIGNhbWVsVG9TbmFrZSxcclxuICAgIGNhbWVsVG9UaXRsZSwgc25ha2VUb1Bhc2NhbCwgY2FtZWxUb1Bhc2NhbCwgcGFzY2FsVG9DYW1lbCwgdGl0bGVUb0NhbWVsLFxyXG4gICAgZW5kc1dpdGgsIHN0YXJ0c1dpdGgsIHRyaW1OZXdMaW5lc1xyXG59O1xyXG4iXX0=
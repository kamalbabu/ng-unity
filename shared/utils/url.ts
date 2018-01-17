import Type from "./type";

/**
 * Parses a URL and returns an object created from the query string.
 *
 *	var url = "https://www.xyz.com?name=Neo&age=23";
 *	parseQueryString(url); // Object {name: "Neo", age: "23"}
 *
 * @param url URL to be parsed.
 *
 * @returns Object created from the query string.
 */

const parseQueryString = function parseQueryString(url: string): Object {
    const qStart: number = url.indexOf("?");
    const query: string = qStart < 0 ? url : url.substring(qStart + 1);
    const pairs: string[] = ((query || "").replace(/^\?/, "").split(/&/));
    const len: number = pairs.length;
    const result: Object = {};
    for (let i: number = 0; i < len; i++) {
        const pair: string = decode(pairs[i]);
        const name: string = pair.substring(0, pair.indexOf("="));
        const value: string = pair.substring(pair.indexOf("=") + 1);
        if (result[name] === undefined) {
            result[name] = value;
            continue;
        }
        // name can appear more than once in query string..
        // here we will create an array
        if (!Type.isObject(result[name])) {// convert to array
            result[name] = [result[name]];
        }
        result[name].push(value);
    }
    return result;
};

/**
 * Encodes a URI.
 *
 * @param value URI to be encoded.
 *
 * @returns Encoded URI.
 */
const encode = function encode(value: string): string {
    return encodeURIComponent(value);
};

/**
 * Decodes a URI.
 *
 * @param value URI to be decoded. Replaces +, @, : and $.
 *
 * @returns URI.
 */
const decode = function decode(value: string): string {
    return decodeURIComponent(value.replace(/\+/g, "%20")
        .replace(/@/g, "%40").replace(/:/g, "%3A").replace(/\$/g, "%24"));
};

export default {
    parseQueryString, encode, decode
};

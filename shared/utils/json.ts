const EMPTY_STRING: string = "";
const EMPTY_OBJ: null = null;

/**
 * Restores the original object from its serialized string version.
 *
 * @param param The string to be deserialized.
 *
 * @returns The object if successful, otherwise throws an error.
 */
const deserialize = function deserialize(param: string): Object | null {
    if (!param) {
        return EMPTY_OBJ;
    }
    param = param.replace(/\n/g, "\\n")
        .replace(/\r/g, "\\r")
        .replace(/\t/g, "\\t")
        .replace(/\f/g, "\\f");
    return JSON.parse(param);
};

/**
 * Converts the given object to a string representation that can be stored
 * locally or transmitted along the network and can later be used to reconstruct
 * the original object.
 *
 * @param param The object to be serialized.
 *
 * @returns The string representation of the object.
 */
const serialize = function serialize(param: any): string {
    if (!param) {
        return EMPTY_STRING;
    }
    return JSON.stringify(param);
};

/**
 * Attempts to restore the original object from its serialized version.
 *
 * @param param The string to be deserialized.
 *
 * @returns The object if successful, otherwise returns undefined.
 */
const tryDeserialize = function tryDeserialize(param: string): any {
    let result: any;
    try {
        result = deserialize(param);
    } catch (e) {
        result = undefined;
    }
    return result;
};

export default {
    deserialize, serialize, tryDeserialize
};

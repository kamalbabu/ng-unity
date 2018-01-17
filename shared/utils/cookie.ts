import Core from "./core";

/**
 * Sets a cookie.
 *
 * @param name Name of the cookie.
 * @param value Value of the cookie.
 * @param slidingExpiryIntervalSecs max-age (in seconds) of the cookie.
 */
const set = function set(name: string, value: any, slidingExpiryIntervalSecs: number): void {
    /*let domain = path ? ("; domain=" + path) : "";*/
    window.document.cookie = name + "=" + encodeURIComponent(value) +
        "; max-age=" + slidingExpiryIntervalSecs; /* +
                     "; path=/" + domain_string;*/
};

/**
 * Retrieves the value of a cookie.
 *
 * @param Name of the cookie.
 *
 * @returns The value of the cookie if it exists. Otherwise returns an empty string.
 */
const get = function get(name: string): string {
    const cookies: string = window.document.cookie;
    if (cookies.length !== 0) {
        const cookieValue: RegExpMatchArray | null = cookies.match("[;]{0,1}[\s]*" + name + "=([^;]*)");
        if (cookieValue) {
            if (Core.isNotNull(cookieValue)) {
                return decodeURIComponent(cookieValue[1]);
            }
            return "";
        }
        return "";
    }
    return "";
};

/**
 * Erases a cookie.
 *
 * @param Name of the cookie.
 */
const erase = function erase(cookieName: string): void {
    const cookies: string[] = window.document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie: string = cookies[i];
        const eqPos: number = cookie.indexOf("=");
        const value: string = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        const name: string = value.trim();
        if (!Core.isEmpty(cookieName) && cookieName !== name) {
            continue;
        }
        window.document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
};

export default {
    get, set, erase
};

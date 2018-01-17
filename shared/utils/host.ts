class UserAgentSignature {
    public static readonly MSIE: string = "MSIE";
    public static readonly TRIDENT: string = "Trident/";
    public static readonly EDGE: string = "Edge/";
    public static readonly FIREFOX: string = "Firefox/";
}

/**
 * Checks whether the user's browser is Internet Explorer.
 *
 * @returns True if the user's browser is Internet Explorer.
 */
const isIE = function isIE(): boolean {
    const ua: string = navigator.userAgent;

    // Test values; Uncomment to check result …

    // IE 10
    // ua = "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)";

    // IE 11
    // ua = "Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko";

    // Edge 12 (Spartan)
    // ua = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0";

    // Edge 13
    // ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586";
    return ua.indexOf(UserAgentSignature.MSIE) > -1 || ua.indexOf(UserAgentSignature.TRIDENT) > -1 || ua.indexOf(UserAgentSignature.EDGE) > -1;
};

/**
 * Checks whether the user's browser is Firefox.
 *
 * @returns True if the user's browser is Firefox.
 */
const isFireFox = function isFireFox(): boolean {
    // userAgent in FF2.0.0.13 WinXP returns: Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US;
    //                                            rv:1.8.1.13) Gecko/20080311 Firefox/2.0.0.13
    // userAgent in FF35 Win7 returns: Mozilla/5.0 (Windows NT 6.1; WOW64; rv:35.0)
    //                                              Gecko/20100101 Firefox/35.0
    const ua: string = navigator.userAgent;
    return ua.indexOf(UserAgentSignature.FIREFOX) > -1;
};

/**
 * Checks whether the environment is Node.js.
 *
 * @returns True if the environment is Node.js.
 */
const isNode = function isNode(): boolean {
    return typeof window === "undefined";
};

export default {
    isIE, isFireFox, isNode
};

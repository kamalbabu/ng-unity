import ResourceHelper from "./resourceHelper";

const styleSheet: ResourceHelper = new ResourceHelper("link", "href", {"rel": "stylesheet", "type": "text/css"});

/**
 * Retrieves the styling information of an html element.
 *
 * @param elem  HTML Element.
 *
 * @returns The Styling information.
 */
const getComputedStyles = function getComputedStyles(elem: HTMLElement): CSSStyleDeclaration {
    return <CSSStyleDeclaration> elem["currentStyle"] || document.defaultView.getComputedStyle(elem, undefined) || elem.style; // IE || Chrome/FF || failover
};

/**
 * Copies Style from source Element to Target.
 *
 * @param srcElem The source from which style is copied.
 * @param targetElem Target Element.
 */
const copyComputedStyle = function copyComputedStyle(srcElem: HTMLElement, targetElem: HTMLElement): void | null {
    const srcComputedStyle: CSSStyleDeclaration = getComputedStyles(srcElem);
    if (!srcComputedStyle) {
        return null;
    }
    // copy style over to target
    for (const property in srcComputedStyle) {
        targetElem.style[property] = srcComputedStyle[property];
    }
};

export default {
    getComputedStyles, copyComputedStyle, styleSheet
};

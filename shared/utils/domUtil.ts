import Object from "./object";
/**
 * Creates an HTML Element.
 *
 *      create("link",{rel:"stylesheet",href:"a.css"});
 *      // `<link rel="stylesheet" href="a.css">`
 * @param tagName Name specifying the type of element to be created.
 * @param attrs Attributes for the element.
 *
 * @returns The created element.
 */
const create = function create(tagName: string, attrs: Object): Element {
    const elem: HTMLElement = document.createElement(tagName);
    for (const attr in attrs) {
        if (!attrs.hasOwnProperty(attr)) {
            continue;
        }
        elem[attr] = attrs[attr];
    }
    return elem;
};

/**
 *
 * @param input
 *
 * @returns
 */
const decodeHTML = function decodeHTML(input: string): string | null {
    const div: HTMLElement = window.document.createElement("div");
    div.innerHTML = input;
    return div.childNodes.length === 0 ? "" : div.childNodes[0].nodeValue;
};

/**
 * Sets a property of the Object.
 *
 * @param obj The source object.
 * @param name Name of the property.
 * @param value The value of property.
 */
const set = function set(obj: Object, name: string, val: any): void {
    const target: Object = obj;
    if (val === undefined) {
        delete target[name];
        return;
    }
    if (target.hasOwnProperty(name)) {
        target[name] = val;
    } else {
        Object.defineProperty(target, name, val, false, false, true);
    }
};

/**
 * Retrieves the property value of an object.
 *
 * @param obj The source Object.
 * @param name Name of the property.
 *
 * @returns The value of the property.
 */
const get = function get(obj: Object, name: string): any {
    const target: Object = obj;
    let val: any = null;
    if (target.hasOwnProperty(name)) {
        val = target[name];
    }
    return val;
};

export default {
    create, decodeHTML, set, get
};

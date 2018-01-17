import Type from "./type";
import Core from "./core";

const URL_TOKEN: string = "@href";

type eventListener = [string, EventListener];

class ResourceHelper {

    private readonly resourceSelector: string = "head " + this.tagName + "[" + this.urlAttr + "='" + URL_TOKEN + "']";

    constructor(private tagName: string, private urlAttr: string,
        private attrs: Object) {
    }

    /**
     * Checks whether a resource is atttached to an element in dom.
     *
     * @param href Name of the resource.
     *
     * @returns True if attached.
     */
    public isAttached(href: string): boolean {
        const resource: NodeList = document.querySelectorAll(this.resourceSelector.replace(URL_TOKEN, href));
        return resource.length > 0;
    }
    /**
     * Attaches the specified Resources .
     *
     * @param href Resources to be attached.
     *
     */
    public attach(href: string[], options?: any): NodeList[] {
        /* We can attach multiple resources at a time*/
        const urls: any[] = !Type.isArray(href) ? [href] : href;
        let out: any[] = [];
        let url: string;
        for (let i: number = 0; i < urls.length; i++) {
            url = urls[i];
            if (!out) {
                out = [];
            }
            const resource: NodeList = document.querySelectorAll(this.resourceSelector.replace(URL_TOKEN, url));
            if (resource.length > 0) {// it already exists
                out.push(resource);
            } else {// create it
                const res: HTMLElement = document.createElement(this.tagName);
                for (const attr in this.attrs) {
                    if (!this.attrs.hasOwnProperty(attr)) {// attr === "onload"
                        continue;
                    }
                    res[attr] = this.attrs[attr];
                }
                if (Core.isNotNull(options)) {
                    for (const attr in options) {
                        if (!options.hasOwnProperty(attr) || attr === "parent") {// attr === "onload"
                            continue;
                        }
                        res[attr] = options[attr];
                    }
                }
                document.querySelector(options && options.parent ? options.parent : "head").appendChild(res);
                res[this.urlAttr] = url;
            }
        }
        return out && out.length === 1 && !Type.isArray(href) ? out[0] : out;
    }

    /**
     * Detaches resources from DOM.
     *
     * @param href Name of resources to be detached.
     * @param eventListeners Event Listeners attached to the element.
     *
     * @returns The Detached Elements.
     */
    public detach(href: string, ...eventListeners: eventListener[]): Node[] {
        const out: any[] = [];
        const urls = !Type.isArray(href) ? [href] : href;
        for (let i: number = 0; i < urls.length; i++) {
            const url: string = urls[i];
            const resource: NodeList = document.querySelectorAll(this.resourceSelector.replace(URL_TOKEN, url));
            if (resource.length === 0) {
                continue;
            }
            const len = eventListeners.length;
            for (let j: number = 0; j < len; j++) {
                resource[0].removeEventListener(eventListeners[j][0], eventListeners[j][1]);
            }
            const parentNode: Node | null = resource[0].parentNode;
            if (parentNode) {
                const a: Node | null = parentNode.removeChild(resource[0]);
                out.push(a);
            }
        }
        return out && out.length === 1 && !Type.isArray(href) ? out[0] : out;
    }
}

export default ResourceHelper;

import Host from "./host";

/**
 * Returns the viewport dimension.
 *
 * @returns A ClientRect object containing viewport width and height.
 * If the context is Node.js then returns undefined.
 */
const getClientRect = function getClientRect(): ClientRect | undefined {
    if (Host.isNode()) {
        return undefined;
    } else {
        const boundingRect: ClientRect = document.body.getBoundingClientRect();
        return {
            width: Math.max(window.innerWidth, document.documentElement.clientWidth,
                document.body.clientWidth, window.screen.width),
            height: Math.max(window.innerHeight, document.documentElement.clientHeight,
                document.body.clientHeight, window.screen.height),
            bottom: boundingRect.bottom,
            left: boundingRect.left,
            right: boundingRect.right,
            top: boundingRect.top
        };
    }
};

export default {
    getClientRect
};

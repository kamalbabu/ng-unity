"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var type_1 = require("./type");
var core_1 = require("./core");
var URL_TOKEN = "@href";
var ResourceHelper = (function () {
    function ResourceHelper(tagName, urlAttr, attrs) {
        this.tagName = tagName;
        this.urlAttr = urlAttr;
        this.attrs = attrs;
        this.resourceSelector = "head " + this.tagName + "[" + this.urlAttr + "='" + URL_TOKEN + "']";
    }
    /**
     * Checks whether a resource is atttached to an element in dom.
     *
     * @param href Name of the resource.
     *
     * @returns True if attached.
     */
    ResourceHelper.prototype.isAttached = function (href) {
        var resource = document.querySelectorAll(this.resourceSelector.replace(URL_TOKEN, href));
        return resource.length > 0;
    };
    /**
     * Attaches the specified Resources .
     *
     * @param href Resources to be attached.
     *
     */
    ResourceHelper.prototype.attach = function (href, options) {
        /* We can attach multiple resources at a time*/
        var urls = !type_1.default.isArray(href) ? [href] : href;
        var out = [];
        var url;
        for (var i = 0; i < urls.length; i++) {
            url = urls[i];
            if (!out) {
                out = [];
            }
            var resource = document.querySelectorAll(this.resourceSelector.replace(URL_TOKEN, url));
            if (resource.length > 0) {
                out.push(resource);
            }
            else {
                var res = document.createElement(this.tagName);
                for (var attr in this.attrs) {
                    if (!this.attrs.hasOwnProperty(attr)) {
                        continue;
                    }
                    res[attr] = this.attrs[attr];
                }
                if (core_1.default.isNotNull(options)) {
                    for (var attr in options) {
                        if (!options.hasOwnProperty(attr) || attr === "parent") {
                            continue;
                        }
                        res[attr] = options[attr];
                    }
                }
                document.querySelector(options && options.parent ? options.parent : "head").appendChild(res);
                res[this.urlAttr] = url;
            }
        }
        return out && out.length === 1 && !type_1.default.isArray(href) ? out[0] : out;
    };
    /**
     * Detaches resources from DOM.
     *
     * @param href Name of resources to be detached.
     * @param eventListeners Event Listeners attached to the element.
     *
     * @returns The Detached Elements.
     */
    ResourceHelper.prototype.detach = function (href) {
        var eventListeners = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            eventListeners[_i - 1] = arguments[_i];
        }
        var out = [];
        var urls = !type_1.default.isArray(href) ? [href] : href;
        for (var i = 0; i < urls.length; i++) {
            var url = urls[i];
            var resource = document.querySelectorAll(this.resourceSelector.replace(URL_TOKEN, url));
            if (resource.length === 0) {
                continue;
            }
            var len = eventListeners.length;
            for (var j = 0; j < len; j++) {
                resource[0].removeEventListener(eventListeners[j][0], eventListeners[j][1]);
            }
            var parentNode = resource[0].parentNode;
            if (parentNode) {
                var a = parentNode.removeChild(resource[0]);
                out.push(a);
            }
        }
        return out && out.length === 1 && !type_1.default.isArray(href) ? out[0] : out;
    };
    return ResourceHelper;
}());
exports.default = ResourceHelper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VIZWxwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXNvdXJjZUhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUEwQjtBQUMxQiwrQkFBMEI7QUFFMUIsSUFBTSxTQUFTLEdBQVcsT0FBTyxDQUFDO0FBSWxDO0lBSUksd0JBQW9CLE9BQWUsRUFBVSxPQUFlLEVBQ2hELEtBQWE7UUFETCxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNoRCxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBSFIscUJBQWdCLEdBQVcsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFJbEgsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLG1DQUFVLEdBQWpCLFVBQWtCLElBQVk7UUFDMUIsSUFBTSxRQUFRLEdBQWEsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRDs7Ozs7T0FLRztJQUNJLCtCQUFNLEdBQWIsVUFBYyxJQUFjLEVBQUUsT0FBYTtRQUN2QywrQ0FBK0M7UUFDL0MsSUFBTSxJQUFJLEdBQVUsQ0FBQyxjQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3hELElBQUksR0FBRyxHQUFVLEVBQUUsQ0FBQztRQUNwQixJQUFJLEdBQVcsQ0FBQztRQUNoQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxF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RSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsUUFBUSxDQUFDO1lBQ2IsQ0FBQztZQUNELElBQU0sR0FBRyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7WUFDbEMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDbkMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRixDQUFDO1lBQ0QsSUFBTSxVQUFVLEdBQWdCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFDdkQsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDYixJQUFNLENBQUMsR0FBZ0IsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0QsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQixDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDekUsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQTFGRCxJQTBGQztBQUVELGtCQUFlLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUeXBlIGZyb20gXCIuL3R5cGVcIjtcbmltcG9ydCBDb3JlIGZyb20gXCIuL2NvcmVcIjtcblxuY29uc3QgVVJMX1RPS0VOOiBzdHJpbmcgPSBcIkBocmVmXCI7XG5cbnR5cGUgZXZlbnRMaXN0ZW5lciA9IFtzdHJpbmcsIEV2ZW50TGlzdGVuZXJdO1xuXG5jbGFzcyBSZXNvdXJjZUhlbHBlciB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHJlc291cmNlU2VsZWN0b3I6IHN0cmluZyA9IFwiaGVhZCBcIiArIHRoaXMudGFnTmFtZSArIFwiW1wiICsgdGhpcy51cmxBdHRyICsgXCI9J1wiICsgVVJMX1RPS0VOICsgXCInXVwiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWdOYW1lOiBzdHJpbmcsIHByaXZhdGUgdXJsQXR0cjogc3RyaW5nLFxuICAgICAgICBwcml2YXRlIGF0dHJzOiBPYmplY3QpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3Mgd2hldGhlciBhIHJlc291cmNlIGlzIGF0dHRhY2hlZCB0byBhbiBlbGVtZW50IGluIGRvbS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBocmVmIE5hbWUgb2YgdGhlIHJlc291cmNlLlxuICAgICAqXG4gICAgICogQHJldHVybnMgVHJ1ZSBpZiBhdHRhY2hlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNBdHRhY2hlZChocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgcmVzb3VyY2U6IE5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnJlc291cmNlU2VsZWN0b3IucmVwbGFjZShVUkxfVE9LRU4sIGhyZWYpKTtcbiAgICAgICAgcmV0dXJuIHJlc291cmNlLmxlbmd0aCA+IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIHRoZSBzcGVjaWZpZWQgUmVzb3VyY2VzIC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBocmVmIFJlc291cmNlcyB0byBiZSBhdHRhY2hlZC5cbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBhdHRhY2goaHJlZjogc3RyaW5nW10sIG9wdGlvbnM/OiBhbnkpOiBOb2RlTGlzdFtdIHtcbiAgICAgICAgLyogV2UgY2FuIGF0dGFjaCBtdWx0aXBsZSByZXNvdXJjZXMgYXQgYSB0aW1lKi9cbiAgICAgICAgY29uc3QgdXJsczogYW55W10gPSAhVHlwZS5pc0FycmF5KGhyZWYpID8gW2hyZWZdIDogaHJlZjtcbiAgICAgICAgbGV0IG91dDogYW55W10gPSBbXTtcbiAgICAgICAgbGV0IHVybDogc3RyaW5nO1xuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdXJscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdXJsID0gdXJsc1tpXTtcbiAgICAgICAgICAgIGlmICghb3V0KSB7XG4gICAgICAgICAgICAgICAgb3V0ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZTogTm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMucmVzb3VyY2VTZWxlY3Rvci5yZXBsYWNlKFVSTF9UT0tFTiwgdXJsKSk7XG4gICAgICAgICAgICBpZiAocmVzb3VyY2UubGVuZ3RoID4gMCkgey8vIGl0IGFscmVhZHkgZXhpc3RzXG4gICAgICAgICAgICAgICAgb3V0LnB1c2gocmVzb3VyY2UpO1xuICAgICAgICAgICAgfSBlbHNlIHsvLyBjcmVhdGUgaXRcbiAgICAgICAgICAgICAgICBjb25zdCByZXM6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLnRhZ05hbWUpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXR0ciBpbiB0aGlzLmF0dHJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5hdHRycy5oYXNPd25Qcm9wZXJ0eShhdHRyKSkgey8vIGF0dHIgPT09IFwib25sb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc1thdHRyXSA9IHRoaXMuYXR0cnNbYXR0cl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChDb3JlLmlzTm90TnVsbChvcHRpb25zKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGF0dHIgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLmhhc093blByb3BlcnR5KGF0dHIpIHx8IGF0dHIgPT09IFwicGFyZW50XCIpIHsvLyBhdHRyID09PSBcIm9ubG9hZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNbYXR0cl0gPSBvcHRpb25zW2F0dHJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucyAmJiBvcHRpb25zLnBhcmVudCA/IG9wdGlvbnMucGFyZW50IDogXCJoZWFkXCIpLmFwcGVuZENoaWxkKHJlcyk7XG4gICAgICAgICAgICAgICAgcmVzW3RoaXMudXJsQXR0cl0gPSB1cmw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dCAmJiBvdXQubGVuZ3RoID09PSAxICYmICFUeXBlLmlzQXJyYXkoaHJlZikgPyBvdXRbMF0gOiBvdXQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0YWNoZXMgcmVzb3VyY2VzIGZyb20gRE9NLlxuICAgICAqXG4gICAgICogQHBhcmFtIGhyZWYgTmFtZSBvZiByZXNvdXJjZXMgdG8gYmUgZGV0YWNoZWQuXG4gICAgICogQHBhcmFtIGV2ZW50TGlzdGVuZXJzIEV2ZW50IExpc3RlbmVycyBhdHRhY2hlZCB0byB0aGUgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFRoZSBEZXRhY2hlZCBFbGVtZW50cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGV0YWNoKGhyZWY6IHN0cmluZywgLi4uZXZlbnRMaXN0ZW5lcnM6IGV2ZW50TGlzdGVuZXJbXSk6IE5vZGVbXSB7XG4gICAgICAgIGNvbnN0IG91dDogYW55W10gPSBbXTtcbiAgICAgICAgY29uc3QgdXJscyA9ICFUeXBlLmlzQXJyYXkoaHJlZikgPyBbaHJlZl0gOiBocmVmO1xuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdXJscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdXJsOiBzdHJpbmcgPSB1cmxzW2ldO1xuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2U6IE5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnJlc291cmNlU2VsZWN0b3IucmVwbGFjZShVUkxfVE9LRU4sIHVybCkpO1xuICAgICAgICAgICAgaWYgKHJlc291cmNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbGVuID0gZXZlbnRMaXN0ZW5lcnMubGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2VbMF0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudExpc3RlbmVyc1tqXVswXSwgZXZlbnRMaXN0ZW5lcnNbal1bMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyZW50Tm9kZTogTm9kZSB8IG51bGwgPSByZXNvdXJjZVswXS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhOiBOb2RlIHwgbnVsbCA9IHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmVzb3VyY2VbMF0pO1xuICAgICAgICAgICAgICAgIG91dC5wdXNoKGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXQgJiYgb3V0Lmxlbmd0aCA9PT0gMSAmJiAhVHlwZS5pc0FycmF5KGhyZWYpID8gb3V0WzBdIDogb3V0O1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VIZWxwZXI7XG4iXX0=
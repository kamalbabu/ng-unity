"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("./core");
var type_1 = require("./type");
/**
 * Creates a Blob object.
 *
 * @param binary Content to be put inside the blob.
 * @param mimeType  MIME type of the content that will be put in the blob.
 *
 * @returns Created blob object.
 */
var createBlob = function createBlob(binary, mimeType) {
    return new Blob([binary], { type: mimeType });
};
/**
 * Creates a string containing an URL representing an object.
 *
 * @param file A File object or a Blob object to create a object URL for.
 *
 * @returns The Object URL.
 */
var createURL = function createURL(file) {
    return (window.URL).createObjectURL(file);
};
/**
 *  Removes an existing object URL.
 *
 *  @param url The object URL to be removed.
 */
var removeURL = function removeURL(url) {
    (window.URL).revokeObjectURL(url);
};
/**
 * Creates a link for downloading a particular file.
 *
 * @param file File to be downloaded.
 * @param fileName Name of the file to be shown while downloading.
 * @param mimeType  MIME type of the content .
 * @param innerHTML html to be displayed within the link.
 *
 * @returns HTML code for downloading the file.
 */
var createDownloadLink = function createDownloadLink(file, fileName, mimeType, innerHTML) {
    // Set the download, href & dataset.downloadurl properties!
    var link = document.createElement("a");
    if (fileName) {
        link.download = fileName; // or whatever you want to name it
    }
    link.href = type_1.default.isString(file) ? file : createURL(file);
    if (innerHTML) {
        link.innerHTML = core_1.default.isEmpty(innerHTML) ? "Download" : innerHTML;
    }
    else {
        link.innerHTML = "Download";
    }
    link.dataset["downloadurl"] = [mimeType, link.download, link.href].join(":");
    link.draggable = true;
    return link;
};
/**
 *Create html "a" tag providing link to a particular file.
 *
 *      let r = new File(["Hello All"], "a.txt");
 *      createViewLink(r); //`<a target=​"_blank" href=​"blob:​null/​26e88b85-c36c-46ed-a496-60996269e280">​View​</a>​`
 *
 * @param file File to which the link is made.
 * @param innerHTML html to be displayed within the link
 *
 * @returns HTML code containing "a" tag.
 */
var createViewLink = function createViewLink(file, innerHTML) {
    var link = document.createElement("a");
    link.target = "_blank";
    link.href = type_1.default.isString(file) ? file : createURL(file);
    if (innerHTML) {
        link.innerHTML = core_1.default.isEmpty(innerHTML) ? "View" : innerHTML;
    }
    else {
        link.innerHTML = "View";
    }
    return link;
};
/**
 * Removes white spaces and illegal characters like :,*,<>,?,|,\,/ from a string.
 *
 * @param name String to be formatted.
 *
 * @returns String without whitespaces and illegal characters.
 */
var sanitizeAsFileName = function sanitizeAsFileName(name) {
    // The regex strips out white space and illegal characters (windows only) from the suggested name
    return name.replace(/[\\/:"*?<>|\s]+/g, "");
};
exports.default = {
    createBlob: createBlob, createURL: createURL, removeURL: removeURL, createDownloadLink: createDownloadLink, createViewLink: createViewLink, sanitizeAsFileName: sanitizeAsFileName
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBMEI7QUFDMUIsK0JBQTBCO0FBRTFCOzs7Ozs7O0dBT0c7QUFDSCxJQUFNLFVBQVUsR0FBRyxvQkFBb0IsTUFBVyxFQUFFLFFBQWdCO0lBQ2hFLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUFDO0FBRUY7Ozs7OztHQU1HO0FBQ0gsSUFBTSxTQUFTLEdBQUcsbUJBQW1CLElBQWlCO0lBQ2xELE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUMsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNILElBQU0sU0FBUyxHQUFHLG1CQUFtQixHQUFXO0lBQzVDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7O0dBU0c7QUFDSCxJQUFNLGtCQUFrQixHQUFHLDRCQUE0QixJQUFTLEVBQUUsUUFBZ0IsRUFBRSxRQUFnQixFQUFFLFNBQWtCO0lBQ3BILDJEQUEyRDtJQUMzRCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLGtDQUFrQztJQUNoRSxDQUFDO0lBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQ3RFLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3RSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGOzs7Ozs7Ozs7O0dBVUc7QUFDSCxJQUFNLGNBQWMsR0FBRyx3QkFBd0IsSUFBUyxFQUFFLFNBQWtCO0lBQ3hFLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7SUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekQsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBQ2xFLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0lBQzVCLENBQUM7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGOzs7Ozs7R0FNRztBQUNILElBQU0sa0JBQWtCLEdBQUcsNEJBQTRCLElBQVk7SUFDL0QsaUdBQWlHO0lBQ2pHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2hELENBQUMsQ0FBQztBQUVGLGtCQUFlO0lBQ1gsVUFBVSxZQUFBLEVBQUUsU0FBUyxXQUFBLEVBQUUsU0FBUyxXQUFBLEVBQUUsa0JBQWtCLG9CQUFBLEVBQUUsY0FBYyxnQkFBQSxFQUFFLGtCQUFrQixvQkFBQTtDQUMzRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvcmUgZnJvbSBcIi4vY29yZVwiO1xuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBCbG9iIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gYmluYXJ5IENvbnRlbnQgdG8gYmUgcHV0IGluc2lkZSB0aGUgYmxvYi5cbiAqIEBwYXJhbSBtaW1lVHlwZSAgTUlNRSB0eXBlIG9mIHRoZSBjb250ZW50IHRoYXQgd2lsbCBiZSBwdXQgaW4gdGhlIGJsb2IuXG4gKlxuICogQHJldHVybnMgQ3JlYXRlZCBibG9iIG9iamVjdC5cbiAqL1xuY29uc3QgY3JlYXRlQmxvYiA9IGZ1bmN0aW9uIGNyZWF0ZUJsb2IoYmluYXJ5OiBhbnksIG1pbWVUeXBlOiBzdHJpbmcpOiBCbG9iIHtcbiAgICByZXR1cm4gbmV3IEJsb2IoW2JpbmFyeV0sIHt0eXBlOiBtaW1lVHlwZX0pO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RyaW5nIGNvbnRhaW5pbmcgYW4gVVJMIHJlcHJlc2VudGluZyBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIGZpbGUgQSBGaWxlIG9iamVjdCBvciBhIEJsb2Igb2JqZWN0IHRvIGNyZWF0ZSBhIG9iamVjdCBVUkwgZm9yLlxuICpcbiAqIEByZXR1cm5zIFRoZSBPYmplY3QgVVJMLlxuICovXG5jb25zdCBjcmVhdGVVUkwgPSBmdW5jdGlvbiBjcmVhdGVVUkwoZmlsZTogRmlsZSB8IEJsb2IpOiBzdHJpbmcge1xuICAgIHJldHVybiAod2luZG93LlVSTCkuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xufTtcblxuLyoqXG4gKiAgUmVtb3ZlcyBhbiBleGlzdGluZyBvYmplY3QgVVJMLlxuICpcbiAqICBAcGFyYW0gdXJsIFRoZSBvYmplY3QgVVJMIHRvIGJlIHJlbW92ZWQuXG4gKi9cbmNvbnN0IHJlbW92ZVVSTCA9IGZ1bmN0aW9uIHJlbW92ZVVSTCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgICh3aW5kb3cuVVJMKS5yZXZva2VPYmplY3RVUkwodXJsKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGxpbmsgZm9yIGRvd25sb2FkaW5nIGEgcGFydGljdWxhciBmaWxlLlxuICpcbiAqIEBwYXJhbSBmaWxlIEZpbGUgdG8gYmUgZG93bmxvYWRlZC5cbiAqIEBwYXJhbSBmaWxlTmFtZSBOYW1lIG9mIHRoZSBmaWxlIHRvIGJlIHNob3duIHdoaWxlIGRvd25sb2FkaW5nLlxuICogQHBhcmFtIG1pbWVUeXBlICBNSU1FIHR5cGUgb2YgdGhlIGNvbnRlbnQgLlxuICogQHBhcmFtIGlubmVySFRNTCBodG1sIHRvIGJlIGRpc3BsYXllZCB3aXRoaW4gdGhlIGxpbmsuXG4gKlxuICogQHJldHVybnMgSFRNTCBjb2RlIGZvciBkb3dubG9hZGluZyB0aGUgZmlsZS5cbiAqL1xuY29uc3QgY3JlYXRlRG93bmxvYWRMaW5rID0gZnVuY3Rpb24gY3JlYXRlRG93bmxvYWRMaW5rKGZpbGU6IGFueSwgZmlsZU5hbWU6IHN0cmluZywgbWltZVR5cGU6IHN0cmluZywgaW5uZXJIVE1MPzogc3RyaW5nKTogT2JqZWN0IHtcbiAgICAvLyBTZXQgdGhlIGRvd25sb2FkLCBocmVmICYgZGF0YXNldC5kb3dubG9hZHVybCBwcm9wZXJ0aWVzIVxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBpZiAoZmlsZU5hbWUpIHtcbiAgICAgICAgbGluay5kb3dubG9hZCA9IGZpbGVOYW1lOyAvLyBvciB3aGF0ZXZlciB5b3Ugd2FudCB0byBuYW1lIGl0XG4gICAgfVxuICAgIGxpbmsuaHJlZiA9IFR5cGUuaXNTdHJpbmcoZmlsZSkgPyBmaWxlIDogY3JlYXRlVVJMKGZpbGUpO1xuICAgIGlmIChpbm5lckhUTUwpIHtcbiAgICAgICAgbGluay5pbm5lckhUTUwgPSBDb3JlLmlzRW1wdHkoaW5uZXJIVE1MKSA/IFwiRG93bmxvYWRcIiA6IGlubmVySFRNTDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsaW5rLmlubmVySFRNTCA9IFwiRG93bmxvYWRcIjtcbiAgICB9XG4gICAgbGluay5kYXRhc2V0W1wiZG93bmxvYWR1cmxcIl0gPSBbbWltZVR5cGUsIGxpbmsuZG93bmxvYWQsIGxpbmsuaHJlZl0uam9pbihcIjpcIik7XG4gICAgbGluay5kcmFnZ2FibGUgPSB0cnVlO1xuICAgIHJldHVybiBsaW5rO1xufTtcblxuLyoqXG4gKkNyZWF0ZSBodG1sIFwiYVwiIHRhZyBwcm92aWRpbmcgbGluayB0byBhIHBhcnRpY3VsYXIgZmlsZS5cbiAqXG4gKiAgICAgIGxldCByID0gbmV3IEZpbGUoW1wiSGVsbG8gQWxsXCJdLCBcImEudHh0XCIpO1xuICogICAgICBjcmVhdGVWaWV3TGluayhyKTsgLy9gPGEgdGFyZ2V0PeKAi1wiX2JsYW5rXCIgaHJlZj3igItcImJsb2I64oCLbnVsbC/igIsyNmU4OGI4NS1jMzZjLTQ2ZWQtYTQ5Ni02MDk5NjI2OWUyODBcIj7igItWaWV34oCLPC9hPuKAi2BcbiAqXG4gKiBAcGFyYW0gZmlsZSBGaWxlIHRvIHdoaWNoIHRoZSBsaW5rIGlzIG1hZGUuXG4gKiBAcGFyYW0gaW5uZXJIVE1MIGh0bWwgdG8gYmUgZGlzcGxheWVkIHdpdGhpbiB0aGUgbGlua1xuICpcbiAqIEByZXR1cm5zIEhUTUwgY29kZSBjb250YWluaW5nIFwiYVwiIHRhZy5cbiAqL1xuY29uc3QgY3JlYXRlVmlld0xpbmsgPSBmdW5jdGlvbiBjcmVhdGVWaWV3TGluayhmaWxlOiBhbnksIGlubmVySFRNTD86IHN0cmluZyk6IE9iamVjdCB7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICBsaW5rLmhyZWYgPSBUeXBlLmlzU3RyaW5nKGZpbGUpID8gZmlsZSA6IGNyZWF0ZVVSTChmaWxlKTtcbiAgICBpZiAoaW5uZXJIVE1MKSB7XG4gICAgICAgIGxpbmsuaW5uZXJIVE1MID0gQ29yZS5pc0VtcHR5KGlubmVySFRNTCkgPyBcIlZpZXdcIiA6IGlubmVySFRNTDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsaW5rLmlubmVySFRNTCA9IFwiVmlld1wiO1xuICAgIH1cbiAgICByZXR1cm4gbGluaztcbn07XG5cbi8qKlxuICogUmVtb3ZlcyB3aGl0ZSBzcGFjZXMgYW5kIGlsbGVnYWwgY2hhcmFjdGVycyBsaWtlIDosKiw8Piw/LHwsXFwsLyBmcm9tIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSBuYW1lIFN0cmluZyB0byBiZSBmb3JtYXR0ZWQuXG4gKlxuICogQHJldHVybnMgU3RyaW5nIHdpdGhvdXQgd2hpdGVzcGFjZXMgYW5kIGlsbGVnYWwgY2hhcmFjdGVycy5cbiAqL1xuY29uc3Qgc2FuaXRpemVBc0ZpbGVOYW1lID0gZnVuY3Rpb24gc2FuaXRpemVBc0ZpbGVOYW1lKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgLy8gVGhlIHJlZ2V4IHN0cmlwcyBvdXQgd2hpdGUgc3BhY2UgYW5kIGlsbGVnYWwgY2hhcmFjdGVycyAod2luZG93cyBvbmx5KSBmcm9tIHRoZSBzdWdnZXN0ZWQgbmFtZVxuICAgIHJldHVybiBuYW1lLnJlcGxhY2UoL1tcXFxcLzpcIio/PD58XFxzXSsvZywgXCJcIik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY3JlYXRlQmxvYiwgY3JlYXRlVVJMLCByZW1vdmVVUkwsIGNyZWF0ZURvd25sb2FkTGluaywgY3JlYXRlVmlld0xpbmssIHNhbml0aXplQXNGaWxlTmFtZVxufTtcbiJdfQ==
import Core from "./core";
import Type from "./type";

/**
 * Creates a Blob object.
 *
 * @param binary Content to be put inside the blob.
 * @param mimeType  MIME type of the content that will be put in the blob.
 *
 * @returns Created blob object.
 */
const createBlob = function createBlob(binary: any, mimeType: string): Blob {
    return new Blob([binary], {type: mimeType});
};

/**
 * Creates a string containing an URL representing an object.
 *
 * @param file A File object or a Blob object to create a object URL for.
 *
 * @returns The Object URL.
 */
const createURL = function createURL(file: File | Blob): string {
    return (window.URL).createObjectURL(file);
};

/**
 *  Removes an existing object URL.
 *
 *  @param url The object URL to be removed.
 */
const removeURL = function removeURL(url: string): void {
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
const createDownloadLink = function createDownloadLink(file: any, fileName: string, mimeType: string, innerHTML?: string): Object {
    // Set the download, href & dataset.downloadurl properties!
    const link = document.createElement("a");
    if (fileName) {
        link.download = fileName; // or whatever you want to name it
    }
    link.href = Type.isString(file) ? file : createURL(file);
    if (innerHTML) {
        link.innerHTML = Core.isEmpty(innerHTML) ? "Download" : innerHTML;
    } else {
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
const createViewLink = function createViewLink(file: any, innerHTML?: string): Object {
    const link = document.createElement("a");
    link.target = "_blank";
    link.href = Type.isString(file) ? file : createURL(file);
    if (innerHTML) {
        link.innerHTML = Core.isEmpty(innerHTML) ? "View" : innerHTML;
    } else {
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
const sanitizeAsFileName = function sanitizeAsFileName(name: string): string {
    // The regex strips out white space and illegal characters (windows only) from the suggested name
    return name.replace(/[\\/:"*?<>|\s]+/g, "");
};

export default {
    createBlob, createURL, removeURL, createDownloadLink, createViewLink, sanitizeAsFileName
};

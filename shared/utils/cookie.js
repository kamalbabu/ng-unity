"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("./core");
/**
 * Sets a cookie.
 *
 * @param name Name of the cookie.
 * @param value Value of the cookie.
 * @param slidingExpiryIntervalSecs max-age (in seconds) of the cookie.
 */
var set = function set(name, value, slidingExpiryIntervalSecs) {
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
var get = function get(name) {
    var cookies = window.document.cookie;
    if (cookies.length !== 0) {
        var cookieValue = cookies.match("[;]{0,1}[\s]*" + name + "=([^;]*)");
        if (cookieValue) {
            if (core_1.default.isNotNull(cookieValue)) {
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
var erase = function erase(cookieName) {
    var cookies = window.document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var value = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        var name_1 = value.trim();
        if (!core_1.default.isEmpty(cookieName) && cookieName !== name_1) {
            continue;
        }
        window.document.cookie = name_1 + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
};
exports.default = {
    get: get, set: set, erase: erase
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29va2llLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQTBCO0FBRTFCOzs7Ozs7R0FNRztBQUNILElBQU0sR0FBRyxHQUFHLGFBQWEsSUFBWSxFQUFFLEtBQVUsRUFBRSx5QkFBaUM7SUFDaEYsa0RBQWtEO0lBQ2xELE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDO1FBQzNELFlBQVksR0FBRyx5QkFBeUIsQ0FBQyxDQUFDOzhDQUNBO0FBQ2xELENBQUMsQ0FBQztBQUVGOzs7Ozs7R0FNRztBQUNILElBQU0sR0FBRyxHQUFHLGFBQWEsSUFBWTtJQUNqQyxJQUFNLE9BQU8sR0FBVyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUMvQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBTSxXQUFXLEdBQTRCLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQztRQUNoRyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2QsRUFBRSxDQUFDLENBQUMsY0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxDQUFDO1lBQ0QsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFDRCxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNELE1BQU0sQ0FBQyxFQUFFLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRjs7OztHQUlHO0FBQ0gsSUFBTSxLQUFLLEdBQUcsZUFBZSxVQUFrQjtJQUMzQyxJQUFNLE9BQU8sR0FBYSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDdEMsSUFBTSxNQUFNLEdBQVcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQU0sS0FBSyxHQUFXLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBTSxLQUFLLEdBQVcsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUNwRSxJQUFNLE1BQUksR0FBVyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFVBQVUsS0FBSyxNQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25ELFFBQVEsQ0FBQztRQUNiLENBQUM7UUFDRCxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFJLEdBQUcseUNBQXlDLENBQUM7SUFDOUUsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLGtCQUFlO0lBQ1gsR0FBRyxLQUFBLEVBQUUsR0FBRyxLQUFBLEVBQUUsS0FBSyxPQUFBO0NBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29yZSBmcm9tIFwiLi9jb3JlXCI7XHJcblxyXG4vKipcclxuICogU2V0cyBhIGNvb2tpZS5cclxuICpcclxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgY29va2llLlxyXG4gKiBAcGFyYW0gdmFsdWUgVmFsdWUgb2YgdGhlIGNvb2tpZS5cclxuICogQHBhcmFtIHNsaWRpbmdFeHBpcnlJbnRlcnZhbFNlY3MgbWF4LWFnZSAoaW4gc2Vjb25kcykgb2YgdGhlIGNvb2tpZS5cclxuICovXHJcbmNvbnN0IHNldCA9IGZ1bmN0aW9uIHNldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnksIHNsaWRpbmdFeHBpcnlJbnRlcnZhbFNlY3M6IG51bWJlcik6IHZvaWQge1xyXG4gICAgLypsZXQgZG9tYWluID0gcGF0aCA/IChcIjsgZG9tYWluPVwiICsgcGF0aCkgOiBcIlwiOyovXHJcbiAgICB3aW5kb3cuZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSArXHJcbiAgICAgICAgXCI7IG1heC1hZ2U9XCIgKyBzbGlkaW5nRXhwaXJ5SW50ZXJ2YWxTZWNzOyAvKiArXHJcbiAgICAgICAgICAgICAgICAgICAgIFwiOyBwYXRoPS9cIiArIGRvbWFpbl9zdHJpbmc7Ki9cclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXRyaWV2ZXMgdGhlIHZhbHVlIG9mIGEgY29va2llLlxyXG4gKlxyXG4gKiBAcGFyYW0gTmFtZSBvZiB0aGUgY29va2llLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBUaGUgdmFsdWUgb2YgdGhlIGNvb2tpZSBpZiBpdCBleGlzdHMuIE90aGVyd2lzZSByZXR1cm5zIGFuIGVtcHR5IHN0cmluZy5cclxuICovXHJcbmNvbnN0IGdldCA9IGZ1bmN0aW9uIGdldChuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgY29va2llczogc3RyaW5nID0gd2luZG93LmRvY3VtZW50LmNvb2tpZTtcclxuICAgIGlmIChjb29raWVzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZVZhbHVlOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCA9IGNvb2tpZXMubWF0Y2goXCJbO117MCwxfVtcXHNdKlwiICsgbmFtZSArIFwiPShbXjtdKilcIik7XHJcbiAgICAgICAgaWYgKGNvb2tpZVZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChDb3JlLmlzTm90TnVsbChjb29raWVWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoY29va2llVmFsdWVbMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBcIlwiO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEVyYXNlcyBhIGNvb2tpZS5cclxuICpcclxuICogQHBhcmFtIE5hbWUgb2YgdGhlIGNvb2tpZS5cclxuICovXHJcbmNvbnN0IGVyYXNlID0gZnVuY3Rpb24gZXJhc2UoY29va2llTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBjb29raWVzOiBzdHJpbmdbXSA9IHdpbmRvdy5kb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29va2llOiBzdHJpbmcgPSBjb29raWVzW2ldO1xyXG4gICAgICAgIGNvbnN0IGVxUG9zOiBudW1iZXIgPSBjb29raWUuaW5kZXhPZihcIj1cIik7XHJcbiAgICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IGVxUG9zID4gLTEgPyBjb29raWUuc3Vic3RyKDAsIGVxUG9zKSA6IGNvb2tpZTtcclxuICAgICAgICBjb25zdCBuYW1lOiBzdHJpbmcgPSB2YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaWYgKCFDb3JlLmlzRW1wdHkoY29va2llTmFtZSkgJiYgY29va2llTmFtZSAhPT0gbmFtZSkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj07ZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVFwiO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZ2V0LCBzZXQsIGVyYXNlXHJcbn07XHJcbiJdfQ==
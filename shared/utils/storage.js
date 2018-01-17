"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var json_1 = require("./json");
var core_1 = require("./core");
var type_1 = require("./type");
var StorageStrategy = (function () {
    function StorageStrategy(storage) {
        this.storage = storage;
    }
    StorageStrategy.getLocalInstance = function () {
        if (core_1.default.isNull(this.local)) {
            this.local = new StorageStrategy(window.localStorage);
        }
        return this.local;
    };
    StorageStrategy.getSessionInstance = function () {
        if (core_1.default.isNull(this.session)) {
            this.session = new StorageStrategy(window.sessionStorage);
        }
        return this.session;
    };
    /**
     * Returns the number of elements in storage.
     *
     * @returns Returns the number of elements in storage.
     */
    StorageStrategy.prototype.size = function () {
        return this.storage.length;
    };
    /**
     * Clears all elements in storage.
     *
     * {@link size}
     *
     * {@linkplain size}
     *
     * {@linkcode size}
     *
     * @see [[size]]
     *
     */
    StorageStrategy.prototype.clearAll = function () {
        this.storage.clear();
    };
    /**
     * Gets an element from storage.
     *
     * @param key The name of the element.
     *
     * @returns The value of the element.
     */
    StorageStrategy.prototype.get = function (key) {
        var val = this.storage.getItem(key);
        return core_1.default.isNull(val) ? undefined : val;
    };
    /**
     * Sets the value of an element in storage if it doesn't exist.
     *
     * Updates the value of an element in storage if it exists.
     *
     * @param key The name of the element.
     */
    StorageStrategy.prototype.set = function (key, value) {
        this.storage.setItem(key, value);
    };
    /**
     * Removes the value of an element in storage.
     */
    StorageStrategy.prototype.remove = function (key) {
        this.storage.removeItem(key);
    };
    /**
     * Similar to {@link get} but deserializes the value into an object.
     *
     * @returns The deserialized object.
     */
    StorageStrategy.prototype.getPOJO = function (key) {
        var val = this.get(key);
        return core_1.default.isEmpty(val) ? {} : json_1.default.deserialize(val);
    };
    /**
     * Similar to {@link set} but serializes the object before storing.
     */
    StorageStrategy.prototype.setPOJO = function (key, value) {
        if (core_1.default.isEmpty(value)) {
            value = {};
        }
        if (!type_1.default.isPOJO(value)) {
            return; // TODO:throw an error
        }
        this.set(key, json_1.default.serialize(value));
    };
    return StorageStrategy;
}());
exports.default = StorageStrategy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBMEI7QUFDMUIsK0JBQTBCO0FBQzFCLCtCQUEwQjtBQUUxQjtJQW1CSSx5QkFBNEIsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUM1QyxDQUFDO0lBZmEsZ0NBQWdCLEdBQTlCO1FBQ0ksRUFBRSxDQUFDLENBQUMsY0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFELENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRWEsa0NBQWtCLEdBQWhDO1FBQ0ksRUFBRSxDQUFDLENBQUMsY0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBS0Q7Ozs7T0FJRztJQUNJLDhCQUFJLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7Ozs7Ozs7OztPQVdHO0lBQ0ksa0NBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLDZCQUFHLEdBQVYsVUFBVyxHQUFXO1FBQ2xCLElBQU0sR0FBRyxHQUFrQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsY0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQVksR0FBRyxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSw2QkFBRyxHQUFWLFVBQVcsR0FBVyxFQUFFLEtBQWE7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7T0FFRztJQUNJLGdDQUFNLEdBQWIsVUFBYyxHQUFXO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksaUNBQU8sR0FBZCxVQUFlLEdBQVc7UUFDdEIsSUFBTSxHQUFHLEdBQXVCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLGNBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLGNBQUksQ0FBQyxXQUFXLENBQVUsR0FBRyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVEOztPQUVHO0lBQ0ksaUNBQU8sR0FBZCxVQUFlLEdBQVcsRUFBRSxLQUFhO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLGNBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixNQUFNLENBQUMsQ0FBQyxzQkFBc0I7UUFDbEMsQ0FBQztRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGNBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBbkdELElBbUdDO0FBRUQsa0JBQWUsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpTT04gZnJvbSBcIi4vanNvblwiO1xyXG5pbXBvcnQgQ29yZSBmcm9tIFwiLi9jb3JlXCI7XHJcbmltcG9ydCBUeXBlIGZyb20gXCIuL3R5cGVcIjtcclxuXHJcbmNsYXNzIFN0b3JhZ2VTdHJhdGVneSB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbG9jYWw6IFN0b3JhZ2VTdHJhdGVneTtcclxuICAgIHByaXZhdGUgc3RhdGljIHNlc3Npb246IFN0b3JhZ2VTdHJhdGVneTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldExvY2FsSW5zdGFuY2UoKTogU3RvcmFnZVN0cmF0ZWd5IHtcclxuICAgICAgICBpZiAoQ29yZS5pc051bGwodGhpcy5sb2NhbCkpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbCA9IG5ldyBTdG9yYWdlU3RyYXRlZ3kod2luZG93LmxvY2FsU3RvcmFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U2Vzc2lvbkluc3RhbmNlKCk6IFN0b3JhZ2VTdHJhdGVneSB7XHJcbiAgICAgICAgaWYgKENvcmUuaXNOdWxsKHRoaXMuc2Vzc2lvbikpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXNzaW9uID0gbmV3IFN0b3JhZ2VTdHJhdGVneSh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5zZXNzaW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlOiBTdG9yYWdlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gc3RvcmFnZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgaW4gc3RvcmFnZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsZWFycyBhbGwgZWxlbWVudHMgaW4gc3RvcmFnZS5cclxuICAgICAqXHJcbiAgICAgKiB7QGxpbmsgc2l6ZX1cclxuICAgICAqXHJcbiAgICAgKiB7QGxpbmtwbGFpbiBzaXplfVxyXG4gICAgICpcclxuICAgICAqIHtAbGlua2NvZGUgc2l6ZX1cclxuICAgICAqXHJcbiAgICAgKiBAc2VlIFtbc2l6ZV1dXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY2xlYXJBbGwoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLmNsZWFyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIGFuIGVsZW1lbnQgZnJvbSBzdG9yYWdlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBrZXkgVGhlIG5hbWUgb2YgdGhlIGVsZW1lbnQuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgVGhlIHZhbHVlIG9mIHRoZSBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBjb25zdCB2YWw6IHN0cmluZyB8IG51bGwgPSB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIHJldHVybiBDb3JlLmlzTnVsbCh2YWwpID8gdW5kZWZpbmVkIDogPHN0cmluZz4gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgdmFsdWUgb2YgYW4gZWxlbWVudCBpbiBzdG9yYWdlIGlmIGl0IGRvZXNuJ3QgZXhpc3QuXHJcbiAgICAgKlxyXG4gICAgICogVXBkYXRlcyB0aGUgdmFsdWUgb2YgYW4gZWxlbWVudCBpbiBzdG9yYWdlIGlmIGl0IGV4aXN0cy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ga2V5IFRoZSBuYW1lIG9mIHRoZSBlbGVtZW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmVzIHRoZSB2YWx1ZSBvZiBhbiBlbGVtZW50IGluIHN0b3JhZ2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2ltaWxhciB0byB7QGxpbmsgZ2V0fSBidXQgZGVzZXJpYWxpemVzIHRoZSB2YWx1ZSBpbnRvIGFuIG9iamVjdC5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgZGVzZXJpYWxpemVkIG9iamVjdC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFBPSk8oa2V5OiBzdHJpbmcpOiBPYmplY3QgfCBudWxsIHtcclxuICAgICAgICBjb25zdCB2YWw6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRoaXMuZ2V0KGtleSk7XHJcbiAgICAgICAgcmV0dXJuIENvcmUuaXNFbXB0eSh2YWwpID8ge30gOiBKU09OLmRlc2VyaWFsaXplKDxzdHJpbmc+IHZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTaW1pbGFyIHRvIHtAbGluayBzZXR9IGJ1dCBzZXJpYWxpemVzIHRoZSBvYmplY3QgYmVmb3JlIHN0b3JpbmcuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRQT0pPKGtleTogc3RyaW5nLCB2YWx1ZTogT2JqZWN0KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKENvcmUuaXNFbXB0eSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFUeXBlLmlzUE9KTyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBUT0RPOnRocm93IGFuIGVycm9yXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0KGtleSwgSlNPTi5zZXJpYWxpemUodmFsdWUpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZVN0cmF0ZWd5O1xyXG4iXX0=
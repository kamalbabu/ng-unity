import JSON from "./json";
import Core from "./core";
import Type from "./type";

class StorageStrategy {

    private static local: StorageStrategy;
    private static session: StorageStrategy;

    public static getLocalInstance(): StorageStrategy {
        if (Core.isNull(this.local)) {
            this.local = new StorageStrategy(window.localStorage);
        }
        return this.local;
    }

    public static getSessionInstance(): StorageStrategy {
        if (Core.isNull(this.session)) {
            this.session = new StorageStrategy(window.sessionStorage);
        }
        return this.session;
    }

    private constructor(private storage: Storage) {
    }

    /**
     * Returns the number of elements in storage.
     *
     * @returns Returns the number of elements in storage.
     */
    public size(): number {
        return this.storage.length;
    }

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
    public clearAll(): void {
        this.storage.clear();
    }

    /**
     * Gets an element from storage.
     *
     * @param key The name of the element.
     *
     * @returns The value of the element.
     */
    public get(key: string): string | undefined {
        const val: string | null = this.storage.getItem(key);
        return Core.isNull(val) ? undefined : <string> val;
    }

    /**
     * Sets the value of an element in storage if it doesn't exist.
     *
     * Updates the value of an element in storage if it exists.
     *
     * @param key The name of the element.
     */
    public set(key: string, value: string): void {
        this.storage.setItem(key, value);
    }

    /**
     * Removes the value of an element in storage.
     */
    public remove(key: string): void {
        this.storage.removeItem(key);
    }

    /**
     * Similar to {@link get} but deserializes the value into an object.
     *
     * @returns The deserialized object.
     */
    public getPOJO(key: string): Object | null {
        const val: string | undefined = this.get(key);
        return Core.isEmpty(val) ? {} : JSON.deserialize(<string> val);
    }

    /**
     * Similar to {@link set} but serializes the object before storing.
     */
    public setPOJO(key: string, value: Object): void {
        if (Core.isEmpty(value)) {
            value = {};
        }
        if (!Type.isPOJO(value)) {
            return; // TODO:throw an error
        }
        this.set(key, JSON.serialize(value));
    }
}

export default StorageStrategy;

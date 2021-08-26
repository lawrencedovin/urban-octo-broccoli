const hash = (key, arrayLen) => {
    hash = Array.from(key).reduce(
        (accum, char) => accum + char.charCodeAt(), 0
    );
    return hash % arrayLen;
}

class HashMap {
    constructor() {
        this._items = [];
    }
    set(key, value) {
        const hashedKey = hash(key);
        this._items[hashedKey] = value;
    }
    get(key) {
        const hashedKey = hash(key);
        return this._items[hashedKey];
    }
}
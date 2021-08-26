const hash = (key, arrayLen) => {
    let hash = Array.from(key).reduce(
        (accum, char) => accum + char.charCodeAt(), 0
    );
    return hash % arrayLen;
}

class HashMap {
    constructor() {
        this._items = [];
    }
    set(key, value) {
        const hashedKey = hash(key, 10);
        this._items[hashedKey] = value;
    }
    get(key) {
        const hashedKey = hash(key, 10);
        return this._items[hashedKey];
    }
}

const map = new HashMap();
map.set('apple', 'red');
map.set('grape', 'purple');
// red
map.get('apple');
// purple
map.get('grape');

console.log(map);
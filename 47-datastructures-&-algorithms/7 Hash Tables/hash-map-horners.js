function hash(key, array_len) {
    // Prime number to use with Horner's method
    const H_PRIME = 37;
  
    let numKey = Array.from(key).reduce(
      (accum, char) => accum * H_PRIME + char.charCodeAt(),
      0
    );
  
    return numKey % array_len;
}
  
class HashMap {
    constructor() {
        this._items = [];
    }
    set(k, v) {
        const hashedKey = hash(k, 10);
        this._items[hashedKey] = v;
    }
    get(k) {
        const hashedKey = hash(k, 10);
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

// console.log(map);
map.set('act', 'blue');
map.set('cat', 'white');
console.log(map);


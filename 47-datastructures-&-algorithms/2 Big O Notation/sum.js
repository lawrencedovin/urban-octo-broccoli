/**
 * Adds numbers from 0 to n
 */

let addUpToFirst = (n) => {
    let total = 0;

    for(let i = 0; i <= n; i++) {
        total += i;
    }

    return total;
}
// O(n)

let addUpToSecond = (n) => {
    return n * (n + 1) / 2;
}
// O(3)
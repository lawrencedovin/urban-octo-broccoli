let makeVars = (n) => {
    const n1 = n + 1;
    const n2 = n + 2;
    const n3 = n + 3;

    return {n1, n2, n3}
}

const {n1, n2, n3} = makeVars(1);

console.log(`n = 1, n1 = ${n1}, n2 = ${n2}, n3 = ${n3}`);
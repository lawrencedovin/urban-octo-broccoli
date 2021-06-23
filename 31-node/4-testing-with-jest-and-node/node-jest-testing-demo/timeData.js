let numberStrings = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "fourty",
    50: "fifty"
}

let hours = {};

for (let i = 1; i <= 23; i++) {
    (i < 10) ? hours["0" + i] = numberStrings[i] : hours[i] = numberStrings[i];
}

for (let i = 1; i <= 23; i++) {
    let secondDigit = ((i + '').charAt(1));

    if (i < 10) hours["0" + i] = numberStrings[i];

    if (i > 10 && i <= 12 || secondDigit == '0') hours[i] = numberStrings[i];

    if (i > 12) hours[i] = `${numberStrings[i-12]}`;
}

let minutes = {};

for (let i = 1; i <= 59; i++) {
    let secondDigit = ((i + '').charAt(1));

    if (i < 10) minutes["0" + i] = numberStrings[i];

    if (i > 10 && i < 20 || secondDigit == '0') minutes[i] = numberStrings[i];

    else if (i >= 20) {
        if (i < 30) minutes[i] = `${numberStrings[20]} ${numberStrings[secondDigit]}`;
        if (i >= 30 && i < 40) minutes[i] = `${numberStrings[30]} ${numberStrings[secondDigit]}`;
        if (i >= 40 && i < 50) minutes[i] = `${numberStrings[40]} ${numberStrings[secondDigit]}`;
        if (i >= 50 && i < 60) minutes[i] = `${numberStrings[50]} ${numberStrings[secondDigit]}`;
    }
}

export {hours, minutes};
// module.exports = { hours, minutes };
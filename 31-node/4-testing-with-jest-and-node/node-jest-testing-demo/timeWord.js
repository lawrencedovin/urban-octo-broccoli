// import { hours, minutes } from "./timeData.js";
// let { hours, minutes } = require('./timeWord');

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


let time = '06:01';

function timeWord(time) {
    let timeArr = time.split(':');
    let clockHour = timeArr[0];
    let clockMinute = timeArr[1];
    let timeString = '';
    let clockMinuteFirstDigit = parseInt(clockMinute.split("")[0]);
    let clockMinuteSecondDigit = parseInt(clockMinute.split("")[1]);

    if(clockMinute == '00'){
        // 00:00 = midnight
        if(clockHour == '00'){
            timeString = 'midnight';
        }
        // 12:00 = noon
        else if(clockHour == '12') {
            timeString = 'noon';
        }
        // Any other hours other than 00 or 12 but clock minutes being 00
        // will be add o'clock, ie. 3:00 = three o'clock
        else {
            timeString = `${hours[clockHour]} o'clock`;
        }
    }
    // Checks if hours start with 12 or 00 but the clock minutes are not 00
    // 12:01 and 00:01 will be twelve oh one
    else if(clockMinute != '00' && clockHour == '12' || clockHour == '00') {
        // First checks if hour is 00 or 12 and minutes start with first digit being 0 but 
        // another digit greater than 0 but less than 10 ie. 12:01 = twelve oh 1
        if(clockMinuteFirstDigit == 0 && clockMinuteSecondDigit > 0) {
            timeString = `twelve oh ${minutes[clockMinute]}`;
        }
        // if minutes are more than 10 ie 12:10 = twelve ten
        else {
            timeString = `twelve ${minutes[clockMinute]}`;
        }
    }
    // Check is minutes are less than 10 ie 02:01 = two oh one
    else if(clockMinuteFirstDigit == 0 && clockMinuteSecondDigit > 0) {
        timeString = `${hours[clockHour]} oh ${minutes[clockMinute]}`
    }
    // If greater than or equal to 10 ie 02:10 = two ten
    else {
        timeString = `${hours[clockHour]} ${minutes[clockMinute]}`;
    }
    // Appends pm and am depending on time
    if(timeString !== 'midnight' && timeString !== 'noon') {
        (parseInt(clockHour) >= 12 ) ? timeString += ' pm' : timeString += ' am';
    }
    return timeString;
}

console.log(timeWord(time));

module.exports = { timeWord };
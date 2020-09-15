let nums = [3, 1, 10, 2, 4, 6, 8, 10];

let total = 0;
for (num of nums) {
  total += num;
}

console.log(total);

let min = nums[0];
for (let i = 1; i < nums.length; i++) {
  if (nums[i] < min) min = nums[i];
}

console.log(min);

const str = "lollapalooza";
const charFreq = {};

for (let char of str) {
  charFreq[char] ? charFreq[char] += 1 : charFreq[char] = 1;
  //obj[key] = value;
}

console.log(charFreq);
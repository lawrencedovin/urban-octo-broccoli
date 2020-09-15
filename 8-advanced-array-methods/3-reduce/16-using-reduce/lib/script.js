// sumEven
let evens = [2,4,6,8,10];

const sumEven = evens.reduce((total, nextValue) => total + nextValue);
console.log(sumEven);

// combine words
const words = ['hello', 'I', 'love', 'JULIEEEEE'];

const msg = words.reduce((total, nextValue) => {
  return `${total} ${nextValue}`;
});
console.log(msg);

// minMidTermScore
const midTermScores = [70, 88, 93, 94, 64, 62, 56];
const finalsScores = [92, 93, 76, 78, 59, 61];

const minMidTermScore = midTermScores.reduce((min, nextScore) => {
  return nextScore < min ? nextScore : min;
});
console.log(minMidTermScore);

// maxMidTermScore
const maxMidTermScore = midTermScores.reduce((max, nextScore) => {
  return nextScore > max ? nextScore : max;
});

// minFinalScore
const minFinalScore = finalsScores.reduce((min, nextScore) => {
  return nextScore < min ? nextScore : min;
});

// maxFinalScore
const maxFinalScore = finalsScores.reduce((max, nextScore) => {
  return nextScore > max ? nextScore : max;
});

//  minFinaleScore
const minFinaleScore = finalsScores.reduce((min, nextScore) => {
  return nextScore < min ? nextScore : min;
}, minMidTermScore);
const scores = [0,0,0,0,0,55,59,69,73,75,76,78,100];
console.log(scores.find((score) => {
  return score > 75;
}));

console.log(scores.findIndex((score) => {
  return score > 75;
}));

function partition(arr, pivot) {
  const pivotIdx = arr.findIndex((el) => {
    return el > pivot;
  });
  const left = arr.slice(0, pivotIdx);
  const right = arr.slice(pivotIdx);
  return [left, right];
}

console.log(partition(scores, 0));
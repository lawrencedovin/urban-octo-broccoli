const merge = (arr1, arr2) => {
   const mergedArr = [];
   let i = 0;
   let j = 0;
   // If 1 of these conditions are false then exits
   // 1 || 0 - 1+0 = true
   // 1 && 0 - 1*0 = false
   while(i < arr1.length && j < arr2.length) {
      if(arr1[i] < arr2[j]) {
         mergedArr.push(arr1[i]);
         i++;
      }
      else {
         mergedArr.push(arr2[j]);
         j++;
      }
   }
   // Continues to push if 1 of the arrays is already fully merged
   while(i < arr1.length) {
      results.push(arr1[i]);
      i++;
   }
   while(j < arr1.length) {
      results.push(arr2[j]);
      j++;
   }
}

const mergeSort = (arr) => {
   // BASE case
   if(arr.length <= 1) return arr;
   // NORMAL case
   const mid = Math.floor(arr.length/2);
   const left = mergeSort(arr.slice(0, mid));
   const right = mergeSort(arr.slice(mid));
   return merge(left, right);
}
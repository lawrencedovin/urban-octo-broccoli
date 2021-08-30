//  i        j
// [5,9,20] [1,3,6]
// [1]
// // arr1[i]>arr2[j] ? shift and add arr2[j] to mergedArr and j += 1 : add arr1[i] to mergedArr.
// // if all of arr j.length === empty / is done then push all remaining values from other array.

// i           j
// [5,9,20] [1,3,6]
// [1, 3]

// i             j
// [5,9,20] [1,3,6]
// [1, 3, 5]

//    i          j
// [5,9,20] [1,3,6]
// [1, 3, 5, 6]

//      i        j
// [5,9,20] [1,3,6]
// [1, 3, 5, 6, 9, 20]

// // end when both arr1.length and arr2.length is 0.

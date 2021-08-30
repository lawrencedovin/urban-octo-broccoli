// mergeSort([3,2,70,48])
//    mergeSort([3,2])
//       mergeSort([3])
//       // since arr is length of 1 you return it
//       [3]
//       // since arr is length of 1 you return it
//       mergeSort([2])
//       [2]
//       /////////////////
//       merge([3],[2])
//       [2,3]

// mergeSort([3,2,70,48])
// mergeSort([70,48])
//    mergeSort([70])
//    // since arr is length of 1 you return it
//    [70]
//    // since arr is length of 1 you return it
//    mergeSort([48])
//    [48]
//    /////////////////
//    merge([70],[48])
//    [48, 70]

// mergeSort([3,2,70,48])
//    merge([2,3],[48,70])
//       [2,3,48,70]
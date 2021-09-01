// [2,2,4,1] [4,4,16,1]
// {
//     2:2,
//     4:1,
//     1:1
// }
// {
//     4:2,
//     16:1,
//     1:1
// }

function makeFreqCounter(arr) {
    const freqCounter = {};
    for(el of arr) {
        freqCounter[el] = freqCounter[el] + 1 || 1;
    }
    return freqCounter;
}

function squares(nums1, nums2) {
    if(nums1.length !== nums2.length) return false;
    const nums1Freq = makeFreqCounter(nums1);
    const nums2Freq = makeFreqCounter(nums2);
    for(key in nums1Freq) {
        // Checks if the key exists at all in the 
        // corresponding array. If nums2Freq has 
        // a key of key squared.
        if(!nums2Freq[key ** 2]) return false;
        // Checks if the frequency value matches each other.
        if(nums1Freq[key] !== num2Freq[key ** 2]) return false;
    }
    return true;
}
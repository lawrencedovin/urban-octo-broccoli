function squares(nums1, nums2) {
    if(nums1.length !== nums2.length) return false;
    for(let i=0; i<nums1.length; i++) {
        let foundIndex = nums2.indexOf(nums1[i] ** 2);
        if(foundIndex === -1) return false;
        nums2.splice(foundIndex, 1);
    }
    return true;
};
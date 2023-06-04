let nums1 = [1,2,3], nums2 = [2,4,6]
var notpresent = function(nums1, nums2) 
{
    nums1 = new Set(nums1)
    nums2 = new Set(nums2)
    for (let item of nums1)
    {
        if (nums2.has(item)) {
            nums1.delete(item)
            nums2.delete(item)
        }
    }
    return [Array.from(nums1),Array.from(nums2)]
};
console.log(notpresent(nums1,nums2))
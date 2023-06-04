let  nums = [-4,-1,0,3,10]
var sorting = function(nums) {
    for(let i=0;i<nums.length;i++)
    {
        nums[i]=nums[i]*nums[i]
    }
    
    nums.sort((a,b)=>{return a-b})
    return nums
};
console.log(sorting(nums))
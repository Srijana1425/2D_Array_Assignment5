let nums = [3,4,5,1,2]
var might = function(nums) 
{
    if(nums.length === 1) return nums[0];

    if(nums[0] < nums[nums.length - 1]) return nums[0]

    for(let i = nums.length -1; i >=0; i--)
    {
        if(nums[i] > nums[i-1])
        {
            continue;
        } 
        else 
        {
            return nums[i]
        }

    }
};
console.log(might(nums))
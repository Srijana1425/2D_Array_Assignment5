let nums = [4,3,2,7,8,2,3,1]
var twicenumber = function(nums) 
{
    let obj = {};
    let duplicateArray = [];
    for(let k of nums) 
    {
        if(obj[k]) 
        {
            duplicateArray.push(k);
        } else 
        {
            obj[k] = 1;
        }
    }
    return duplicateArray;
};
console.log(twicenumber(nums))
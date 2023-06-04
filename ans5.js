let arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
var DistanceValue = function(arr1, arr2, d) {
    let res = 0
    for(let i = 0; i < arr1.length; i++){
        curr = arr1[i]
        let j = arr2.filter(val => Math.abs(val - curr) <= d)
        if(j.length === 0){
            res += 1
        }
    }
    return res
};
console.log(DistanceValue(arr1, arr2, d))
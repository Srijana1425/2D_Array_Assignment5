let original = [1,2,3,4], m = 2, n = 2
var convertarray = function(original, m, n) {
    if(original.length!=(n*m)) return [];
    let arr = [];
    while(arr.length<m) arr.push(original.splice(0,n));
    return arr;
};
console.log(convertarray(original, m, n))
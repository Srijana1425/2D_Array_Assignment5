let n = 5
var Coins = function(n) {
    let coin = 0;
    let count = 1;

    while (coin < n) {
        coin += count + 1;
        count++;
    }
    return count - 1;
};
console.log(Coins(n))
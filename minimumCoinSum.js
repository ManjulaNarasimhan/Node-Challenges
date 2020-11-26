// the minimum number of coins which has sum sum

function MinimumCoinSum(arr, sum) {
    if (arr.length == 0) return 0;
    var result = [];
    sortedCoin = arr.sort((a, b) => b - a);
    var i = 0;
    while (sum > 0) {
        var coinValue = sortedCoin[i]
        let numberOfCoins = Math.floor(sum / coinValue);
        sum -= numberOfCoins * coinValue;
        if (numberOfCoins) {
            result.push({ numberOfCoins, coinValue });
        }
        i++;
    };
    console.log(result.reduce((sum, a) => sum + a.numberOfCoins, 0));
};

function MinimumCoinSum_Matrix(coins, sum) {
    let matrix = Array(coins.length).fill(0).map((a) => Array(coins.length).fill(0));
    console.log(matrix);
};

var coinsArr = [1, 10, 5, 2];
MinimumCoinSum(coinsArr, 43);
//MinimumCoinSum_Matrix(coinsArr, 43);
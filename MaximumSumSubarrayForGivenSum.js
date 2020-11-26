function MaximumSumSubarrayForGivenSum(arr, sum) {
    let sortedArray = arr.sort((a, b) => a - b);
    let i = 1;
    let total = sortedArray[0];
    while (i <= arr.length - 1) {
        total += sortedArray[i];
        console.log(`sum ${sum} -- total ${total}`);

        if (total === sum) { console.log(sum); }
        if (total > sum) {
            console.log(total - sortedArray[i]);
            return total - sortedArray[i];
        }

        i++;
    }
    console.log("OUT");
    return -1;
};

var num = [1, 2, 3, 6, 4, 5];
//MaximumSumSubarrayForGivenSum(num, 11);

/***
Input : arr[] = { 1, 2, 3, 4, 5 }
        sum = 11
Output : 10
Subarray having maximum sum is { 1, 2, 3, 4 }

Input : arr[] = { 2, 4, 6, 8, 10 }
        sum = 7
Output : 6
Subarray having maximum sum is { 2, 4 } or { 6 }
**/


function subsetSum(numbers, target, partial) {
    var s, n, remaining;

    partial = partial || [];

    // sum partial
    s = partial.reduce(function (a, b) {
        return a + b;
    }, 0);

    // check if the partial sum is equals to target
    if (s === target) {
        console.log("%s=%s", partial.join("+"), target)
    }

    if (s >= target) {
        return;  // if we reach the number why bother to continue
    }

    for (var i = 0; i < numbers.length; i++) {
        n = numbers[i];
        remaining = numbers.slice(i + 1);
        subsetSum(remaining, target, partial.concat([n]));
    }
}

//subsetSum([3, 9, 8, 4, 5, 7, 10], 15, []);

// output:
// 3+8+4=15
// 3+5+7=15
// 8+7=15
// 5+10=15

///////////////////////////////////////////////////
function MinimumSubArrayForSum_Notworking(arr, sum) {
    var newArr = [];
    console.log('before sorting = ' + arr);

    arr.sort(function (a, b) {
        return a - b;
    });
    console.log('after sorting = ' + arr);

    var l = 0;
    var arrSize = arr.length - 1;

    while (l < arrSize) {

        if (arr[l] + arr[arrSize] === sum) {
            var result = newArr.concat(arr[l], arr[arrSize]);
            console.log(result);
            break;
        } else if (arr[l] + arr[arrSize] > sum) {
            arrSize--;
        } else {
            l++;
        }
    }
};

const getMinElementsWhichSum = (arr, target) => {
    const subsets = getAllSubsetsOfArr(arr);
    const subsetsWhichSumToTarget = subsets.filter(subset => subset.reduce((a, b) => a + b, 0) === target);
    return subsetsWhichSumToTarget.reduce((a, b) => a.length < b.length ? a : b, { length: Infinity });
};
console.log(getMinElementsWhichSum([4, 1], 5));
//console.log(getMinElementsWhichSum([10, 0, -1, 20, 25, 30], 59));

// https://stackoverflow.com/questions/5752002/find-all-possible-subset-combos-in-an-array
function getAllSubsetsOfArr(array) {
    let res = new Array(1 << array.length).fill().map((e1, i) => array.filter((e2, j) => i & 1 << j));
    console.log(res);
    return res;
};

//var arr = [10, 0, 20, 20, 5, 2, 15];
//var sum = 45;

//MinimumSubArrayForSum(arr, sum);
//getMinElementsWhichSum(arr, sum);

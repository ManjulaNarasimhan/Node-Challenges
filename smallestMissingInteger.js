function smallestMissingInteger(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let res = 0;
    if (sortedArr[0] <= 0) {
        return 1;
    }
    let i = 0;

    while (i < arr.length) {
        let diff = arr[i + 1] - arr[i];
        if (diff > 1) {
            res = arr[i] + 1;
            break;
        }
        i++;
    }
    res = res == 0 ? (sortedArr[sortedArr.length - 1]) + 1 : res;
    console.log(sortedArr[sortedArr.length - 1]);
    console.log(res);
};

let num = [1, 2, 3];
smallestMissingInteger(num);
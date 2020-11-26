function MaxProductOfTriplet(arr) {
    let sortedArr = arr.sort((a, b) => b - a);
    console.log(sortedArr);
    let res = sortedArr.reduce((sum, val, index) => index < 3 ? sum * val : sum * 1, 1);
    //let res = arr[0] * arr[1] * arr[2];
    console.log(res);
};

let arr = [-3, 1, 2, -2, 5, 6];
MaxProductOfTriplet(arr);
function countTriangles(arr) {
    let i = 0;
    let count = 0;
    while (i < arr.length - 2) {
        if (arr[i] + arr[i + 1] >= arr[i + 2]
            || arr[i + 1] + arr[i + 2] >= arr[i]
            || arr[i + 2] + arr[i] >= arr[i + 1]) {
            count++;
        }

        i++;
    }
    console.log(count);
};

let arr = [10, 1, 2, 8, 5, 12];

countTriangles(arr);
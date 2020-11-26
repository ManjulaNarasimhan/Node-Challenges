
function cyclicRotation(arr, k) {
    let rightRotate = arr.splice(-k);
    // let leftRotate = arr.splice(k);leftRotate.push(...arr)
    arr.unshift(...rightRotate);
    console.log(rightRotate);
    console.log(arr);
};

var arr = [3, 8, 9, 7, 6];
cyclicRotation(arr, 3); 
function CheckPermutation(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var control = new Array(A.length);
    var left = 0;

    //console.log('control:', control);

    for (var i = 0; i < A.length; i++) {
        if (i === 0) {
            left = A[i];
        }

        left = left < A[i] ? A[i] : left;
    }

    if (left !== A.length) {
        return 0;
    }

    for (var i = 0; i < A.length; i++) {
        if (!control[A[i] - 1]) {
            control[A[i] - 1] = true;
            left--;
        }
    }

    //console.log('control, left:', control, left);

    return left === 0 ? 1 : 0;
};

console.log(CheckPermutation([4, 1, 3]))

/////////////////////////////////////////////

function solution(A) {
    let set = new Set(); // holds a unique set of values
    let max = 1; // largest number in set
    let min = 1; // smallest number in set
    let n = A.length

    for (let i = 0; i < n; i += 1) {
        let num = A[i];
        if (num > max) {
            max = num; // determine max
        } else if (num < min) {
            min = num; // determine min
        }
        set.add(num) // only permits unique values
    }

    let m = set.size // size of set
    let range = (max - min) + 1 // size of a sequential permutaion, give range

    // conditions required to solve puzzle
    return n === m && range === m ? 1 : 0
}
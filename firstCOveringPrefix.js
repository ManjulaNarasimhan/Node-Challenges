function firstCOveringPrefix(A) {
    // write your code in JavaScript (Node.js 4.0.0)

    var i = 0;
    var diff = [];
    var count = 0;

    for (i = 0; i < A.length; i++) {
        if (typeof diff[A[i]] == 'undefined') {
            diff[A[i]] = 1;
            count++;
        }
    }

    for (i = 0; i < A.length; i++) {
        if (diff[A[i]] === 1) {
            diff[A[i]] = 0;
            count--;

            if (count === 0) {
                console.log(i);
                return i;
            }
        }
    }
}


var arr = [2, 0, 1, 3, 1, 2];
firstCOveringPrefix(arr);
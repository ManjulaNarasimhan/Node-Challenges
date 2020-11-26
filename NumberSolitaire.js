function NumberSolitaire(A) {
    var i = 0;
    var j = 0;
    var result = [];

    result[0] = A[0];
    for (i = 1; i < A.length; i++) {
        result[i] = -Infinity;
    }
    console.log(result);

    for (i = 1; i < A.length; i++) {
        for (j = Math.max(0, i - 6); j < i; j++) {
            result[i] = Math.max(result[i], result[j] + A[i]);
        }
    }
    console.log(result[result.length - 1]);
    return result[result.length - 1];

};


var strArr = [1, -2, 0, 9, -1, -2];
NumberSolitaire(strArr);
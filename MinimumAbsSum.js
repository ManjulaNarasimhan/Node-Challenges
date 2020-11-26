function MinimumAbsSum(A) {
    if (1 == A.length) return Math.abs(A[0]);

    let sums = new Array(A.length + 1);
    let minAbsSum = Number.MAX_SAFE_INTEGER;

    sums[0] = 0;

    for (var i = 0; i < A.length; i++) {
        sums[i + 1] = A[i] + sums[i];
    }

    console.log(sums);
    sums.sort();

    for (var i = 1; i < sums.length; i++) {
        minAbsSum = Math.min(minAbsSum, Math.abs(sums[i] - sums[i - 1]));
    }

    return minAbsSum;
};
console.log(MinimumAbsSum([2, -4, 6, -3, 9]))
console.log(MinimumAbsSum([10, 10, 10, 10, 10, -50]))
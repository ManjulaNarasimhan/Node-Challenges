function peaks(A) {
    var n = A.length;
    var peaks = [];

    for (var i = 1; i < n - 1; i++) {
        if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
            peaks.push(i);
        }
    }

    var max = 0;

    for (var i = 1; i < n; i++) {
        if ((n % i) == 0) {
            var bi = 0;
            var block = n / i;
            for (var ind in peaks) {
                var p = peaks[ind]
                if (bi * block <= p && p < (bi + 1) * block) {
                    bi++;
                }
            }
            if (bi == i) {
                max = i;
            }
        }
    }

    return max;

};

console.log(peaks([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]));


///https://www.hackerearth.com/practice/data-structures/advanced-data-structures/segment-trees/tutorial/
// Query to find the maximum and minimum weight between two nodes in the given tree using LCA. GeeksForGeeks
//Segment Tree | Set 2 (Range Minimum Query)
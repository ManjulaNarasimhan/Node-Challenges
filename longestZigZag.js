function longestZigZag(seq) {
    let minima = seq[0];
    let maxima = seq[0];
    let maximaLen = 1;
    let minimaLen = 1;

    if (seq.length <= 2) {
        return seq.length;
    }

    for (var i = 1; i < seq.length; i++) {
        if (seq[i] < maxima) {
            if (minimaLen < maximaLen + 1) {
                minimaLen = maximaLen + 1;
                minima = seq[i];
            } else if (minimaLen == maximaLen + 1 && seq[i] < minima) {
                minima = seq[i];
            }
        }
        if (seq[i] > minima) {
            if (maximaLen < minimaLen + 1) {
                maximaLen = minimaLen + 1;
                maxima = seq[i];
            } else if (maximaLen == minimaLen + 1 && seq[i] > maxima) {
                maxima = seq[i];
            }
        }
    }
    var res = Math.max(maximaLen, minimaLen);
    console.log(res);
    return res;
};

var numArray = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8];
longestZigZag(numArray);

/**
Input: arr[] = {1, 5, 4}
Output: 3
The whole arrays is of the form  x1 < x2 > x3

Input: arr[] = {1, 4, 5}
Output: 2
All subsequences of length 2 are either of the form
x1 < x2; or x1 > x2

Input: arr[] = {10, 22, 9, 33, 49, 50, 31, 60}
Output: 6
The subsequences {10, 22, 9, 33, 31, 60} or
{10, 22, 9, 49, 31, 60} or {10, 22, 9, 50, 31, 60}
are longest Zig-Zag of length 6.

 */
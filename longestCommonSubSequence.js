
function longestSubSeq(arr) {
    var start = arr[0];
    var count = 0;
    for (var i = 1; i < arr.length; i++) {
        if (start > arr[i]) {
            count++;
            start = arr[i];
        }
    }
}

var seq = [3, 4, 2, 1, 10, 6, 5, 7, 9];
longestSubSeq(seq);

//////////////////////////////////
const longest = (xs, ys) => (xs.length > ys.length) ? xs : ys;

const lcs_xx = (xx, yy) => {
    if (!xx.length || !yy.length) { return ''; }

    const [x, ...xs] = xx;
    const [y, ...ys] = yy;
    //console.log(x, y)
    var res = (x === y) ? (x + lcs(xs, ys)) : longest(lcs(xx, ys), lcs(xs, yy));
    console.log(res);
    return res;
};

const lcs = (set1, set2) => {
    const lcsMatrix = Array(set1.length + 1).fill(null).map(() => Array(set2.length + 1).fill(null));

    for (let colIndex = 0; colIndex <= set1.length; colIndex++) {
        lcsMatrix[0][colIndex] = 0;
    }
    for (let rowIndex = 0; rowIndex <= set2.length; rowIndex++) {
        lcsMatrix[rowIndex][0] = 0;
    }
    let rowIndex = 1;
    while (rowIndex <= set2.length) {
        let colIndex = 1;
        while (colIndex <= set1.length) {
            if (set1[colIndex - 1] === set2[rowIndex - 1]) {
                lcsMatrix[rowIndex][colIndex] = lcsMatrix[rowIndex - 1][colIndex - 1] + 1;
            }
            else {
                lcsMatrix[rowIndex][colIndex] = Math.max(lcsMatrix[rowIndex - 1][colIndex], lcsMatrix[rowIndex][colIndex - 1])
            }

            colIndex++;
        }
        rowIndex++;
    }
    console.log(lcsMatrix);

    const longestSequence = [];
    let rowi = set2.length;
    let colj = set1.length;
    console.log(lcsMatrix.length);
    while (colj > 0 || rowi > 0) {
        console.log("=====" + colj, rowi);
        if (set1[colj - 1] === set2[rowi - 1]) {
            //  console.log(colj + "===" + rowi);
            longestSequence.unshift(set1[colj - 1]);
            colj -= 1;
            rowi -= 1;
        } else if (lcsMatrix[rowi][colj] === lcsMatrix[rowi][colj - 1]) {

            colj -= 1;
        } else {

            rowi -= 1;
        }
    }
    console.log(longestSequence);
    return longestSequence;
};

str1 = "abd";
str2 = "acb";

lcs(str1, str2);
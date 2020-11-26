
function getAllSubsetsOfArr(array) {
    let res = new Array(1 << array.length).fill().map((e1, i) => array.filter((e2, j) => i & 1 << j)); //all subset of arrays.
    let len = res.filter((a) => a.length > 1)
        .map((x) => x.reduce((x, v) => x + v));
    console.log(len);
    // return res;
};

getAllSubsetsOfArr([4, 1, 2]);
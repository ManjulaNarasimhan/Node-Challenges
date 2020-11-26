function equiLeader(arr) {
    let i = 1;
    let result = 0;

    while (i < arr.length) {
        let arr1 = arr.splice(i);
        let count1 = {};
        let count2 = {};
        let obj1 = arr1 ? arr1.forEach((element) => count1[element] = (count1[element] || 0) + 1) : 0;
        let res1 = arr1.reduce((a, b) => count1[a] > count1[b] ? a : b);
        let obj2 = arr ? arr.forEach((element) => count2[element] = (count2[element] || 0) + 1) : 0;
        let res2 = arr.reduce((a, b) => count1[a] > count1[b] ? a : b);
        if (res1 === res2) {
            result++;
        }
        arr.push(...arr1);
        i++;
    }
    return result;
};

function getAllSubsetsOfArr(array) {
    let res = new Array(1 << array.length).fill().map((e1, i) => array.filter((e2, j) => i & 1 << j));
    console.log(res);
    return res;
};

getAllSubsetsOfArr([4, 1, 2]);
//console.log(equiLeader([4, 1, 2]))
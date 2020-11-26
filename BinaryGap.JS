function BinaryGap(n) {
    var binaryNum = n.toString(2);
    let count1 = binaryNum.split(1).length - 1;
    if (count1 < 2) {
        console.log("no binary gap");
        return 0;
    }
    let binArr = binaryNum
        .split(1)
        .filter((a) => a != '')
        .map(e => e.length);
    console.log(binaryNum + "========" + binArr);
    console.log(Math.max(...binArr));
};

BinaryGap(80);
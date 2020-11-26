function stringsegments(str) {
    let i = 0;
    let j = 0;
    let n = str.length;
    let storeArray = [];
    let concatString = '';
    let startPos = 0;
    charLength = str.split('').filter((x) => x === 'a').length;
    while (j < charLength) {

        while (i < n) {
            console.log("START:::", i, len, startPos);

            var len = str.indexOf('a', startPos);
            concatString += str.slice(i, len + 1) + '|';
            if (i === 0) {
                startPos = len + 1;
            }
            i = len + 1;
        };
        storeArray.push(concatString);
        concatString = '';
        j++;
        i = 0;
    }
    console.log(storeArray);
};

function combine(str) {
    const result = [];
    for (let i = 1; i < Math.pow(str.length, str.length); i = i * 2)
        result.push([...str].filter((_, pos) => (i >> pos)).join(""));
    return new Set(result);
}

console.log(combine("babaa"))
//stringsegments("babaa");

//o/p -> ba|ba|a or bab|a|a - divide into segments each segment should have a. get maximum no:of segments.~
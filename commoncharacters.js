function commonCharacters(array) {
    var com = [];
    var index = 0;
    while (index < array.length) {

        var eleArr = array[index].split('');
        if (index !== 0) {
            eleArr = com;
        }
        var rollIndex = index + 1 < array.length ? index + 1 : 0;
        var common = eleArr
            .filter((e) => array[rollIndex].split('').includes(e));
        com = [];
        com = [... new Set(common)];
        if (index === array.length - 1) {

            console.log(com.join(''));
            return com;
        }
        index++;
    };
}

var strArr = ["geeksforgeeks", "gemkstones", "acknowledges", "aguelikes"];

commonCharacters(strArr);



function longestString(arr) {
    console.log(Math.max(...arr.map((e) => e.length)));
};

var str = ["aba", "acdlij", "ef", "ghi"];
longestString(str);

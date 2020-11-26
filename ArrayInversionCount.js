 function ArrayInversionCount(arr) {
    var i = 0;
    var j = 0;
    var count = 0;

    while (i < arr.length) {
        console.log(i + "iiiii" + arr[i]);
        if (arr[i] > 0) {
            while (j < arr.length) {
                console.log(j + "jjjjj" + arr[j]);
                if (arr[i] > arr[j]) {
                    count++;
                    console.log("COUNT::::", count);
                }
                j++;
            }
        }
        i++;
    }
    console.log(count);
    return count;
};


var arr = [3, 1, 2];

ArrayInversionCount(arr);
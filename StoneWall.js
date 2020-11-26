function StoneWall(H) {
    var len = H.length;
    let stack = [H[0]];

    result = 1;
    if (!len) {
        return 0;
    }

    for (var i = 1; i < len; i++) {
        var currentHeight = H[i];
        console.log("Current Height::", currentHeight + "   STACK::::" + stack);
        while (stack.length && stack[stack.length - 1] >= currentHeight) {
            console.log("INSIDE WHILE LOOP:::", stack.length, stack[stack.length - 1]);
            if (currentHeight == stack[stack.length - 1]) {

                result--;
                console.log("INSIDE IF", result);
            }
            stack.pop();
            console.log("IF STACK:::", stack);
        };
        console.log("Before Push STACK:::", stack[0]);
        stack.push(currentHeight);
        console.log("After Push STACK:::", stack[0]);
        result++;
    }
    console.log("RESULT:::", result);
    return result;
}
var str = [8, 8, 5, 7, 9, 8, 7, 4, 8];
console.log(StoneWall(str));
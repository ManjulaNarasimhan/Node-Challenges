function frogJump(startPos, endPos, dist) {
    console.log(Math.ceil((endPos - startPos) / dist));
};

//(10, 85, 30);
/////////////////////////////////////////////////////////
function OddOccurrence(A) {
    var agg = 0;

    for (var i = 0; i < A.length; i++) {

        console.log("AGG:::" + agg);
        agg ^= A[i];
        console.log("XOR OPERATION::" + agg ^ A[i]);
        console.log("AGG=======" + agg);
    }
    // console.log(agg);
    return agg;
}

// For example, for the input [2, 2, 3, 3, 4] the solution terminated unexpectedly
var arr1 = [9, 3, 9, 3, 9, 7, 9];
OddOccurrence(arr1);
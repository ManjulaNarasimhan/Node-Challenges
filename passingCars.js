function passingCars(A) {
    var result = 0;

    var aLen = A.length;
    var zeroFactor = 0;

    for (var i = 0; i < aLen; i++) {
        if (A[i] == 0) {
            zeroFactor += 1;
        }

        if (A[i] == 1) {
            result += zeroFactor * 1;

            if (result > 1000000000) {
                result = -1;
                break;
            }
        }
    }

    return result;
};

console.log(passingCars([0, 1, 0, 1, 1]));
function SplitArrayIntoHalfWithEqualSum(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let sum = A.reduce((a, b) => a + b, 0);
    console.log(sum);
    let diff = 0;
    let index = 0;

    for (let i = 0; i < A.length; i++) {
        let d = sum - A[i];
        console.log(d);
        if (diff < d) {
            diff = d;
            index = i;
        }
    }
    console.log(index);
    return index;
}

function findEquilibriumFaster_XXX(arr) {
    var totalSum, sumUp = 0;

    //execute once for each element, execute the callback, passing the previous callback's value and the current element
    totalSum = arr.reduce(function (prev, cur) { return prev + cur })
    console.log(totalSum);
    //execute once for each element
    for (var i = 0; i < arr.length; i++) {
        totalSum -= arr[i];
        console.log(totalSum);
        if (sumUp === totalSum) {
            console.log("TotalSum" + i);
            return i;
        }
        sumUp += arr[i];
    }
    return undefined;
}


function findEquilibriumFaster(A) {
    var sumRight = A.reduce((pv, cv, idx) => (idx > 0) ? (pv + cv) : (0), 0);
    var sumLeft = 0;
    var substractions = [];
    var maxI = A.length - 1;

    for (var i = 0; i < maxI; i += 1) {
        sumLeft += A[i];
        console.log("RIGHT::::", sumRight);
        console.log("LEFT:::", sumLeft);
        substractions.push(Math.abs(sumLeft - sumRight));
        if (i + 1 <= maxI) sumRight -= A[i + 1];
    }
    console.log("subtract===========" + substractions);
    let res = substractions.reduce((pv, cv, idx) => (idx > 0) ? ((pv < cv) ? pv : cv) : (cv), 0);
    console.log(res);
}

function smallestIndex(A) {
    // write your code in JavaScript (Node.js 4.0.0)

    var i = 0;
    var diff = [];
    var count = 0;

    for (i = 0; i < A.length; i++) {
        if (typeof diff[A[i]] == 'undefined') {
            diff[A[i]] = 1;
            count++;
        }
    }
    console.log(diff);
    for (i = 0; i < A.length; i++) {
        if (diff[A[i]] === 1) {
            diff[A[i]] = 0;
            count--;

            if (count === 0) {
                console.log(i);
                return i;
            }
        }
    }
}

let arr = [0, 1, 0, 0, 0];
//(arr);
//findEquilibriumFaster(arr);
//SplitArrayIntoHalfWithEqualSum(arr);

function pivotEfficient(numbers) {
    // Keep track of running sums as we iterate array
    var leftSum = 0;
    let rightSum = numbers.reduce((pv, cv, idx) => (idx > 0) ? (pv + cv) : (0), 0);


    for (var i = 0; i < numbers.length; i++) {
        rightSum -= numbers[i];

        if (leftSum === rightSum) {
            console.log(i);
            return i;
        }

        leftSum += numbers[i];
    }

    // No pivot found
    return -1;
}
pivotEfficient(arr);
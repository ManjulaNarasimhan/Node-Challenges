function countNonDivisible(A) {
    const createCounts = A => {
        const counts = Array(A.length * 2 + 1).fill(0)
        for (let i = 0; i < A.length; i++) {
            counts[A[i]] += 1
        }
        return counts
    }
    const counts = createCounts(A)
    const results = []
    for (let i = 0; i < A.length; i++) {
        let nonDivisiblesCount = A.length
        let j = 1
        while (j * j < A[i]) {
            if (A[i] % j === 0) {
                nonDivisiblesCount -= counts[j]
                nonDivisiblesCount -= counts[A[i] / j]
            }
            j++
        }
        if (j * j === A[i]) {
            nonDivisiblesCount -= counts[j]
        }
        results.push(nonDivisiblesCount)
    }
    return results
}


function countNonDivisible2(A) {
    var N = A.length;
    var count = [];
    var i;
    for (i = 0; i < 2 * N + 1; ++i) {
        count.push(0);
    }
    for (i = 0; i < N; ++i) {
        ++count[A[i]];
    }
    var divisors = [];
    for (i = 0; i < 2 * N + 1; ++i) {
        divisors.push(0);
    } //the actual code starts here, before it's just initialisation of variables.
    i = 1;
    var k;
    while (i <= 2 * N) {
        k = i;
        while (k <= 2 * N) {
            divisors[k] += count[i];
            k += i;
        }
        ++i;
    }

    var result = [];
    for (i = 0; i < N; ++i) {
        result.push(0);
    }
    for (i = 0; i < N; ++i) {
        result[i] = N - divisors[A[i]];
    }
    return result;
}

const A = [3, 1, 2, 3, 6]
console.log(A)
const s = countNonDivisible(A)
console.log(s);

console.log(countNonDivisible2(A));
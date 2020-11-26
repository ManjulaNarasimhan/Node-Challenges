const GenomicRangeQuery = (S, P, Q) => {
    const genMap = {
        A: 1,
        C: 2,
        G: 3,
        T: 4,
    }
    const sStr = 'ACGT'
    const res = []
    for (let i = 0; i < P.length; i++) {
        const start = P[i]
        const end = Q[i] + 1
        const slice = S.slice(start, end)
        let min
        for (let i = 0; i < 4; i++) {
            const char = sStr[i]
            if (slice.indexOf(char) > -1) {
                min = genMap[char]
                break
            }
        }
        res.push(min)
    }
    return res
}

let str = "CAGCCTA";
let p = [2, 5, 0];
let q = [4, 5, 6];
console.log(GenomicRangeQuery(str, p, q));
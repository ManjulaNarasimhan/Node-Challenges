
solution("ABBBBCCCDDD");

function getStringRepresentation(S) {
    let counter = 0;
    const arr = [];
    for (let i = 0; i < S.length; i++) {
        if (!S[i - 1] || S[i - 1] === S[i]) {
            counter++;
        } else {
            arr.push(`${counter === 1 ? "" : counter}${S[i - 1]}`);
            counter = 1;
        }
        if (!S[i + 1]) arr.push(`${counter === 1 ? "" : counter}${S[i]}`);
    }
    return arr.join("");
}

function solution(S, K) {
    let length = getStringRepresentation(S).length;
    for (let i = 0; i < S.length - K; i++) {
        const slice = `${S.slice(0, i)}${S.slice(i + K)}`;
        const compressedString = getStringRepresentation(slice);
        length = Math.min(compressedString.length, length);
    }
    return length;
}

console.log(solution("ABBBCCDDCCC", 5)); // 5
console.log(solution("AAAAAAAAAAABXXAAAAAAAAAA", 3)); // 3
console.log(solution("ABCDDDEFG", 2)); // 6

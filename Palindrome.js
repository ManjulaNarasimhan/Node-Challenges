function getPalindromeIndex(str) {
    let paliArr = [];
    if (isPali(str)) {
        paliArr.push(str);
    }
    str.split('')
        .map((a, index) => {
            let i = index + 1;
            let strPalindrome = a;
            while (i < str.length) {
                if (i >= index) {
                    strPalindrome += str[i];
                    if (isPali(strPalindrome)) {
                        paliArr.push(strPalindrome);
                    }
                }
                i++;
            };

        });

    console.log(paliArr, paliArr.length);
    console.log(Math.max(...paliArr.map((a) => a.length)));
};

function isPali(str) {
    return str == str.split('').reverse().join('');
};

getPalindromeIndex("abbaeae"); 
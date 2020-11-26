
function DominantMember(n) {
    let res = n.map((a) => arr.filter(e => a == e));
    console.log(Math.max(...res.map(el => el.length)));
};

var arr = [3, 67, 23, 67, 67, 1, 1, 1, 1, 2, 2, 2, 2, 67, 67];

DominantMember(arr);
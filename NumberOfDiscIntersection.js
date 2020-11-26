function NumberOfDiscIntersection(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var items = [];
    var intersections = 0;
    const LIMIT = 10000000;

    for (var i = 0; i < A.length; i++) {
        items.push({
            base: i,
            start: i - A[i],
            end: i + A[i]
        });
    }

    items.sort(function (a, b) {
        return a.start - b.start;
    });

    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        console.log(item.start + "STRAT:::END==OF" + i + "== " + item.end);
        var j = i + 1;
        console.log(j + "-----------------------" + intersections)
        while (items[j] && item.end >= items[j].start) {
            console.log("INSIDE::::::::::" + items[j].start + "STRAT:::END==OF" + j + "== " + items[j].end);
            if (++intersections > LIMIT) { return -1 }
            j++;
        }
    }
    console.log("END:::" + intersections);
    return intersections;
};

let arr = [1, 5, 2, 1, 4, 0]
NumberOfDiscIntersection(arr);


function MaxNonOverlappingSegments(A, B) {
    // write your code in JavaScript (Node.js 4.0.0)

    var i = 0;
    var count = 1;
    var last = 0;

    if (A.length === 0) {
        return 0;
    }

    last = B[0];

    for (i = 1; i < A.length; i++) {
        if (A[i] > last) {
            count++;
            last = B[i];
        }
    }

    return count;
}

/*
  A[0] = 1    B[0] = 5
    A[1] = 3    B[1] = 6
    A[2] = 7    B[2] = 8
    A[3] = 9    B[3] = 9
    A[4] = 9    B[4] = 10
*/
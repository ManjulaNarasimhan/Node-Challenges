//Hamiliton cycles
/**
Input : N = 6 ==> (6-1)! / 2 == 5.4.3.2.1/2 = 60
Output : Hamiltonian cycles = 60

Input : N = 4
Output : Hamiltonian cycles = 3

formula: (N-1)! / 2

*/

//another question:


function hamiltonian(vertexes, start) {
    let n = vertexes.length;
    let paths = [[start]];
    while (paths.length > 0) {
        let tempPath = [];
        for (let path of paths) {
            console.log(path);
            const nextSteps = vertexes.find(({ vertex }) => vertex == path[path.length - 1]).peers.filter(v => !path.includes(v));

            if (!nextSteps.length) continue;
            else if (path.length == n - 1) return [...path, nextSteps[0]];
            else nextSteps.forEach(step => tempPath.push([...path, step]));
        }
        paths = tempPath;

    }
}

const vertexes = [{ vertex: 1, peers: [3, 8, 15] }, { vertex: 2, peers: [7, 14, 23] }, { vertex: 3, peers: [1, 6, 13, 22] }, { vertex: 4, peers: [5, 12, 21] }, { vertex: 5, peers: [4, 11, 20] }, { vertex: 6, peers: [3, 10, 19] }, { vertex: 7, peers: [2, 9, 18] }, { vertex: 8, peers: [1, 17] }, { vertex: 9, peers: [7, 16] }, { vertex: 10, peers: [6, 15] }, { vertex: 11, peers: [5, 14] }, { vertex: 12, peers: [4, 13] }, { vertex: 13, peers: [3, 12, 23] }, { vertex: 14, peers: [2, 11, 22] }, { vertex: 15, peers: [1, 10, 21] }, { vertex: 16, peers: [9, 20] }, { vertex: 17, peers: [8, 19] }, { vertex: 18, peers: [7] }, { vertex: 19, peers: [6, 17] }, { vertex: 20, peers: [5, 16] }, { vertex: 21, peers: [4, 15] }, { vertex: 22, peers: [3, 14] }, { vertex: 23, peers: [2, 13] }];

let result = hamiltonian(vertexes, 18);
console.log('result', result);

/**

USING DYNAMIC PROGRAMMING:


//Initial 2D dynamic array to a size of the small string
var dpArr = [];
var size;
string_one_length <= string_two_length ? size = string_one_length : size = string_two_length;

for (var i = 0; i < size; i++) {
    dpArr.push([]);
}

function LCS_DP(S1, m, S2, n) {
    var finalResult;
    //check to see if the result is already stored in the array. if it is return that instead
    if (dpArr[m][n] !== undefined) {
        return dpArr[m][n];
    }
    //define base case. if the length of either strings are zero,
    //then no need to continue return 0
    if (m === 0 || n === 0) {
        finalResult = 0;
    } else if (S1[m - 1] === S2[n - 1]) { //if the last characters are the same
        finalResult = 1 + LCS_DP(S1, m - 1, S2, n - 1);
    } else {
        var excludeLastOfS1 = LCS_DP(S1, m - 1, S2, n),
            excludeLastOfS2 = LCS_DP(S1, m, S2, n - 1);

        finalResult = Math.max(excludeLastOfS1, excludeLastOfS2);
    }
    dpArr[m][n] = finalResult;
    //return the final result
    return finalResult;
}

console.log("LCS Dynamic Programming is: ", lcs);

 *
 */

/**var crackSafe = function(n, k) {
   if (k < 1 || n === 0) return ''
   let perms = getPerms(n, k)
   let graph = buildGraph(perms, k)
   let used = new Set
   let pass = dfs()
   return pass

   function dfs(current = perms[0], nextPerm = perms[0]) {
       used.add(nextPerm)
       if (used.size === perms.length) {
           return current
       }

       const children = graph[nextPerm]
       for (let overlapPerm of children) {
           if (used.has(overlapPerm)) continue
           let nonOverlap = overlapPerm.slice(overlapPerm.length - 1)
           let password = dfs(current + nonOverlap, overlapPerm)
           if (password.length) {
               return password
           }
       }

       used.delete(nextPerm)
       return ''
   }
};

function buildGraph(perms, k) {
   let graph = {}
   for (let perm of perms) {
       graph[perm] = []
   }
   for (let perm1 of perms) {
       for (let i = 0; i < k; i++) {
           let nextPerm = perm1.slice(1) + i
           for (let perm2 of perms) {
               if (nextPerm === perm2) {
                   graph[perm1].push(perm2)
               }
           }
       }
   }
   return graph
}

function getPerms(n, k) {
   let perms = []
   getPermsRec()
   return perms

   function getPermsRec(curr = '') {
       if (curr.length === n) {
           perms.push(curr)
           return
       }
       for (let i = 0; i < k; i++) {
           getPermsRec(curr + i)
       }
   }
}
*/
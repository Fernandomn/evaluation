function solution(mat) {
    const N = mat.length;
    const M = mat[0].length;
    const result = Array(N).fill().map(() => Array(M).fill())

    for (let i = 0; i < N; i++) {
        for (let j = M - 1; j >= 0; j--) {
            result[M-1-j][i] = mat[i][j];
        }
    }

    return result;
}

const entry1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const exp1 = [
  [3, 6, 9],
  [2, 5, 8],
  [1, 4, 7],
];

const entry2 = [
  [1, 2],
  [3, 4],
];

const exp2 = [
  [2, 4],
  [1, 3],
];

console.log("entry1:", entry1);
console.log("res1:", solution(entry1));
console.log("exp1: ", exp1);
console.log(`-----------`);
console.log("entry2:", entry2);
console.log("res2:", solution(entry2));
console.log("exp2: ", exp2);

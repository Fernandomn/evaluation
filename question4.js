function solution(mat, word) {
  let i = 0;
  let j = 0;

  let N = mat.length;
  let M = mat[0].length;

  for (i = 0; i < N; i++) {
    for (j = 0; j < M; j++) {
      if (mat[i][j] === word[0]) {
        if (validateWord(mat, word.substring(1), i, j)) {
          return true;
        }
      }
      F;
    }
  }

  return false;
}

const validateWord = (mat, word, i, j) => {
  console.log("word", word);
  console.log(`i: ${i}, j: ${j}`);

  if (word.length === 0) {
    return true;
  }
  for (let u = i - 1; u < i + 2; u++) {
    for (let v = j - 1; v < j + 2; v++) {
      console.log(`u: ${u}, v: ${v}`);
      if (u === i && v === j) continue;

      if (mat[u] && mat[u][v] && mat[u][v]) {
        console.log("mat[u][v]", mat[u][v]);
      }

      if (mat[u] && mat[u][v] && mat[u][v] === word[0]) {
        return validateWord(mat, word.substring(1), u, v);
      }
    }
  }
  return false;
};

const mat1 = [
  ["A", "B", "C", "D"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "J"],
];

const word1 = "ABCCED";

const mat2 = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

const word2 = "ABA";

const mat3 = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

const word3 = "ABBC";

console.log("word1:", word1);
console.log("mat1", mat1);
console.log("exec1: ", solution(mat1, word1));
console.log("expec:", true);

console.log("word2:", word2);
console.log("mat2", mat2);
console.log("exec2: ", solution(mat2, word2));
console.log("expec:", true);

console.log("word3:", word3);
console.log("mat3", mat3);
console.log("exec3: ", solution(mat3, word3));
console.log("expec:", false);

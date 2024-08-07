function solution({ array1, array2 }) {
  let i = 0;
  let j = 0;
  const resultList = [];
  array1.sort((a,b)=> a-b);
  array2.sort((a,b)=> a-b);
  console.log("array1", array1);
  console.log("array2", array2);
  

  while (i < array1.length || j < array2.length) {
    console.log("i", i);
    console.log("j", j);
    console.log("array1[i]", array1[i]);
    console.log("array2[j]", array2[j]);

    if (array1[i] !== null && array2[j] !== null) {
      if (array1[i] < array2[j]) {
        resultList.push(array1[i]);
        i++;
      } else {
        resultList.push(array2[j]);
        j++;
      }
    } else if (array1[i]) {
      resultList.push(array1[i]);
      i++;
    } else if (array2[j]) {
      resultList.push(array2[j]);
      j++;
    }
  }
  console.log("resultList", resultList);
  return resultList;
}

const entry1 = {
  array1: [2, 4, 4, 9, -3, 0],
  array2: [1, 10, 0, 3, 5],
};

const expec1 = [-3, 0, 0, 1, 2, 3, 4, 4, 5, 9, 10];

const entry2 = {
  array2: [4, 5, 6],
  array1: [1, 2, 3],
};
const expec2 = [1, 2, 3, 4, 5, 6];

console.log("exec1:", solution(entry1) === expec1);
console.log("exec2:", solution(entry2) === expec2);

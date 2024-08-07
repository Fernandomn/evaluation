export function solution(array) {
    array.sort((a, b) => a - b);

    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] !== null && array[i] === array[i + 1]) {
            return false;
        }
    }
    return true
}
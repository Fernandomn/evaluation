 function solution(array) {
    array.sort((a, b) => Math.abs(a) - Math.abs(b));

    return (
        array[array.length - 3] * array[array.length - 2] * array[array.length - 1]
    );
}


const reverse = require('./reverseArray');

function merge(left, right) {
    let sortedArr = [];
    indexL = 0;
    sizeL = left.length;
    indexR = 0;
    sizeR = right.length;

    while(indexL < sizeL && indexR < sizeR) {

        if (left[indexL] < right[indexR]) {
            sortedArr.push(left[indexL]);
            indexL++;
        } else {
            sortedArr.push(right[indexR]);
            indexR++;
        }

    }

    return [...sortedArr, ...left.slice(indexL), ...right.slice(indexR)];
}

function mergeSort(arr) {
    if (arr.length <= 1)
        return arr;

    const middle = Math.floor(arr.length / 2);
    const leftArr = mergeSort(arr.slice(0, middle));
    const rightArr = mergeSort(arr.slice(middle));

    return merge(leftArr, rightArr);
}

module.exports = {sort:mergeSort, reverse};
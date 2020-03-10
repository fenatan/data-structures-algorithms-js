const reverse = require('./reverseArray');

function partition(arr, min, max){
    const pivot = arr[max];

    let i = min - 1;
    for(let j = min; j < max; j++){
        if(arr[j] <= pivot){
            i++;
            let t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
        }
    }
    let t = arr[i+1];
    arr[i+1] = arr[max];
    arr[max] = t;
    return i + 1;
}

function quick(arr, min, max){
    if(min < max){
        const p = partition(arr, min, max);
        
        quick(arr,min,p-1);
        quick(arr,min+1, max);
    }
    return arr;
}

function quickSort(arr){
    return quick(arr, 0, arr.length - 1);
}

module.exports = {
    sort:quickSort,
    reverse
}
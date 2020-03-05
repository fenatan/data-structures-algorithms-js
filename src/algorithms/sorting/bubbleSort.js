const reverse = require('./reverseArray');

function bubbleSort(arr){
    let arr2 = [...arr];
    for(let i = 0; i < arr2.length; i++){
        for(let j = i+1; j < arr2.length; j++){
            if(arr2[i] > arr2[j]){
                let temp = arr2[i];
                arr2[i] = arr2[j];
                arr2[j] = temp;
            }
        }
    }

    return arr2;
}

module.exports = {sort:bubbleSort , reverse};
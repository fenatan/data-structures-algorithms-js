const assert = require('assert');
const MergeSort = require('../../src/algorithms/sorting/mergeSort');

describe('MergeSort', function(){
    const arr = [6,2,7,15,3,4,10,-8,56];
    const sortedArr = [-8,2,3,4,6,7,10,15,56];
    const reversedArr = [56,15,10,7,6,4,3,2,-8];

    it('should sort an array', () => {
        assert.deepEqual(MergeSort.sort(arr), sortedArr);    
    });


    it('should return a reversed array', () => {
        let tempArr = MergeSort.sort(arr);
        assert.deepEqual(MergeSort.reverse(tempArr), reversedArr);
    });
});
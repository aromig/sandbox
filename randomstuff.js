function twoSum(arr, S) {
    var sums = [],
        hash = {};

    for (var i = 0; i < arr.length; i++) {
        var sumMinus = S - arr[i];
        if (hash[sumMinus] !== undefined)
            sums.push([arr[i], sumMinus]);

        hash[arr[i]] = arr[i];
    }
    
    return sums;
}

var arr = [3, 5, 2, -4, 8, 11];
console.log(twoSum(arr, 7));

function findDuplicates(arr) {
    var hash = [],
        dupes = [];

    for (var i = 0; i < arr.length; i++) {
        if (hash[arr[i]] === undefined) {
            hash[arr[i]] = true;
        } else {
            dupes.push(arr[i]);
        }
    }

    return dupes;
}

var arr = [1, 21, -4, 103, 21, 4, 1];
console.log(findDuplicates(arr));
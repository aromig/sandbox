// easiest sort to implement but worse to use with real large data sets

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubblesort(arr) {
    var swaps = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i-1] > arr[i]) {
            swap(arr, i-1, i);
            swaps++;
        }
    }
    if (swaps > 0)
        return bubblesort(arr);
    
    return arr;
}

var arr = [18, -45, 90, -46, 32, -23, -49, 65, -3, 87, 59, 44, -68, -82, 29, 71, 85, -98, -31, 56, -99, -87, 4, -24, 83, 51, -93, -11, 96, -2, 10, 95, -39, 1, -73, 43, 75, -97, -100, 91, 72, -15, -63, -16, -89, 31, 62, 53, 5, 58];
var sorted = bubblesort(arr);

console.log(JSON.stringify(sorted));
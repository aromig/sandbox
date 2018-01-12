function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function dutchNatlFlag(arr) {
    var low = mid = 0;
    var high = arr.length - 1;

    while (mid <= high) {
        if        (arr[mid] === 0) {
            swap(arr, low++, mid++);
        } else if (arr[mid] === 2) {
            swap(arr, mid, high--);
        } else if (arr[mid] === 1) {
            mid++;
        }
    }

    return arr;
}

var arr = [2,1,1,0,1,2,0,0,1,2,1,0,2,0];
var dnf = dutchNatlFlag(arr);
console.log(dnf);
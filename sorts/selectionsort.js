const swap = require("./swap");

function selectionSort(arr) {
  let minIdx;
  for (let i = 0; i < arr.length; i++) {
    minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    swap(arr, i, minIdx);
  }
  return arr;
}

module.exports = selectionSort;

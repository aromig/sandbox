const swap = require("./swap");

function dutchNatlFlag(arr) {
  let low = (mid = 0);
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      swap(arr, low++, mid++);
    } else if (arr[mid] === 2) {
      swap(arr, mid, high--);
    } else if (arr[mid] === 1) {
      mid++;
    }
  }

  return arr;
}

module.exports = dutchNatlFlag;

const arr = [2, 1, 1, 0, 1, 2, 0, 0, 1, 2, 1, 0, 2, 0];

console.time("sort");
const dnf = dutchNatlFlag(arr);
console.timeEnd("sort");

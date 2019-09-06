const swap = require("./swap");
const bubbleSort = require("./bubblesort");
const countingSort = require("./countingsort");

function bucketSort(arr, sort, bucketCount) {
  const min = Math.min.apply(Math, arr),
    buckets = [];
  const max = Math.max.apply(Math, arr);

  bucketCount = bucketCount || 200;

  for (let i = 0; i < arr.length; i++) {
    let newIdx = Math.floor((arr[i] - min) / bucketCount);
    buckets[newIdx] = buckets[newIdx] || [];
    buckets[newIdx].push(arr[i]);
  }

  let idx = 0;
  for (i = 0; i < buckets.length; i++) {
    if (typeof buckets[i] !== "undefined") {
      buckets[i] = sort(buckets[i], max);
      for (let j = 0; j < buckets[i].length; j++) {
        arr[idx++] = buckets[i][j];
      }
    }
  }

  return arr;
}

module.exports = bucketSort;

function countingSort(arr, max) {
  let count = [];
  for (let i = 0; i <= max; i++) {
    count[i] = 0;
  }

  arr.forEach(x => (count[x] += 1));

  let sorted = [],
    idx = 0;

  for (let i = 0; i < count.length; i++) {
    for (let j = 0; j < count[i]; j++) {
      sorted[idx++] = i;
    }
  }

  return sorted;
}

module.exports = countingSort;

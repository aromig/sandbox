function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let left = [],
    right = [],
    sorted = [],
    pivot = arr.pop();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return sorted.concat(quickSort(left), pivot, quickSort(right));
}

module.exports = quickSort;

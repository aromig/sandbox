function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let toInsert = arr[i],
      j = i;

    while (j > 0 && arr[j - 1] > toInsert) {
      arr[j] = arr[j - 1];
      j--;
    }

    arr[j] = toInsert;
  }

  return arr;
}

module.exports = insertionSort;

function merge(left, right) {
  let result = [],
    L = (R = 0);

  while (L < left.length && R < right.length) {
    result.push(left[L] < right[R] ? left[L++] : right[R++]);
  }

  return result.concat(left.slice(L)).concat(right.slice(R));
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

module.exports = mergeSort;

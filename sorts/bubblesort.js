// easiest sort to implement but worse to use with real large data sets

const swap = require("./swap");

function bubbleSort(items) {
  let swaps = 0;
  for (let idx = 1; idx < items.length; idx++) {
    if (items[idx - 1] > items[idx]) {
      swap(items, idx - 1, idx);
      swaps++;
    }
  }
  if (swaps > 0) return bubbleSort(items);

  return items;
}

module.exports = bubbleSort;

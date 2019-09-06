function swap(items, idx_a, idx_b) {
  const temp = items[idx_a];
  items[idx_a] = items[idx_b];
  items[idx_b] = temp;
}

module.exports = swap;

// Given a list of ordered integers with some of the numbers missing (and with possible duplicates), find the missing numbers.

export function missingInts(input) {
  const first = input[0];
  const last = input[input.length - 1];
  const isAscending = first < last;
  let missing = [];
  const uniqueInts = [...new Set(input)];

  for (
    let idx = first;
    isAscending ? idx < last : idx > last;
    isAscending ? idx++ : idx--
  ) {
    if (!uniqueInts.some(num => num === idx)) {
      missing.push(idx);
    }
  }
  return missing;
}

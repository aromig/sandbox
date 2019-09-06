const assert = require("assert");

const swap = require("./swap");
const bubbleSort = require("./bubblesort");
const countingSort = require("./countingsort");
const quickSort = require("./quicksort");
const insertionSort = require("./insertionsort");
const selectionSort = require("./selectionsort");
const mergeSort = require("./mergesort");
const bucketSort = require("./bucketsort");
const dutchNatlFlag = require("./dutchnatlflag");

describe("Sorts", function() {
  describe("swap()", function() {
    it("should swap values of index 0 and index 1", function() {
      let items = [1, 2, 3, 4];
      swap(items, 0, 1);
      assert.deepEqual(items, [2, 1, 3, 4]);
    });
    it("should swap values of index 3 and index 0", function() {
      let items = [1, 2, 3, 4];
      swap(items, 3, 0);
      assert.deepEqual(items, [4, 2, 3, 1]);
    });
  });
  describe("bubbleSort()", function() {
    it("should sort the array in ascending order", function() {
      let items = [3, 5, 19, 12, 2, 1];
      assert.deepEqual(bubbleSort(items), [1, 2, 3, 5, 12, 19]);
    });
  });
  describe("countingSort()", function() {
    it("should sort the array in ascending order", function() {
      let items = [3, 5, 19, 12, 2, 1];
      const max = Math.max.apply(null, items);
      assert.deepEqual(countingSort(items, max), [1, 2, 3, 5, 12, 19]);
    });
  });
  describe("quickSort()", function() {
    it("should sort the array in ascending order", function() {
      let items = [3, 5, 19, 12, 2, 1];
      assert.deepEqual(quickSort(items), [1, 2, 3, 5, 12, 19]);
    });
  });
  describe("insertionSort()", function() {
    it("should sort the array in ascending order", function() {
      let items = [3, 5, 19, 12, 2, 1];
      assert.deepEqual(insertionSort(items), [1, 2, 3, 5, 12, 19]);
    });
  });
  describe("selectionSort()", function() {
    it("should sort the array in ascending order", function() {
      let items = [3, 5, 19, 12, 2, 1];
      assert.deepEqual(selectionSort(items), [1, 2, 3, 5, 12, 19]);
    });
  });
  describe("mergeSort()", function() {
    it("should sort the array in ascending order", function() {
      let items = [3, 5, 19, 12, 2, 1];
      assert.deepEqual(mergeSort(items), [1, 2, 3, 5, 12, 19]);
    });
  });
  describe("bucketSort()", function() {
    describe("using bubbleSort with 2 buckets", function() {
      it("should sort the array in ascending order", function() {
        let items = [3, 5, 19, 12, 2, 1];
        const max = Math.max.apply(null, items);
        assert.deepEqual(bucketSort(items, bubbleSort, 2), [
          1,
          2,
          3,
          5,
          12,
          19
        ]);
      });
    });
    describe("using countingSort with 2 buckets", function() {
      it("should sort the array in ascending order", function() {
        let items = [3, 5, 19, 12, 2, 1];
        const max = Math.max.apply(null, items);
        assert.deepEqual(bucketSort(items, countingSort, 2), [
          1,
          2,
          3,
          5,
          12,
          19
        ]);
      });
    });
  });
  describe("Dutch National Flag sort", function() {
    it("should sort the array in ascending order", function() {
      let items = [2, 1, 1, 0, 1, 2, 0, 0, 1, 2, 1, 0, 2, 0];
      assert.deepEqual(dutchNatlFlag(items), [
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        2,
        2
      ]);
    });
  });
});

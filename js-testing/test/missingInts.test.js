const chai = require("chai");
const expect = chai.expect;

import { missingInts } from "../missingInts";

describe("missingInts", () => {
  it("should find the missing numbers in [1,3,3,3,5,6]", () => {
    const original = [1, 3, 3, 3, 5, 6];
    const expected = [2, 4];
    expect(missingInts(original)).to.eql(expected);
  });
  it("should find the missing numbers in [1,2,3,4,4,7,7]", () => {
    const original = [1, 2, 3, 4, 4, 7, 7];
    const expected = [5, 6];
    expect(missingInts(original)).to.eql(expected);
  });
  it("should find the missing numbers in [10,9,5,4,1,-2]", () => {
    const original = [10, 9, 5, 4, 1, -2];
    const expected = [8, 7, 6, 3, 2, 0, -1];
    expect(missingInts(original)).to.eql(expected);
  });
});

const chai = require("chai");
const expect = chai.expect;

import * as str from "../strings";

describe("strings.js", () => {
  describe("reverseString()", () => {
    it("should reverse the given string", () => {
      expect(str.reverseString("Supercalifragilisticexpialidocious")).to.equal(
        "suoicodilaipxecitsiligarfilacrepuS"
      );
    });

    it("should not return an empty string non-string parameters", () => {
      expect(str.reverseString(12345)).to.equal("");
    });
  });

  describe("getWords()", () => {
    it("should put all words from sentence into an array", () => {
      expect(str.getWords("Hello World")).to.deep.equal(["Hello", "World"]);
    });
  });
});

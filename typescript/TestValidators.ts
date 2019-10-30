/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />

let strings = ["Hello", "45424", "101"];

let validators: { [s: string]: Validation.StringValidator } = {};
validators["Zip Code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

for (let s of strings) {
  for (let validator in validators) {
    let isMatch = validators[validator].isAcceptable(s);
    console.log(
      `'${s}' ${isMatch ? "matches" : "does not match"} '${validator}'.`
    );
  }
}

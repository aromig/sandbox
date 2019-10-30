interface StringValidator {
  isAcceptable(s: string): boolean;
}

let lettersRegExp = /^[A-Za-z]+$/;
let numberRegExp = /^[0-9]+$/;

class LettersOnlyValidator implements StringValidator {
  isAcceptable(s: string) {
    return lettersRegExp.test(s);
  }
}

class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegExp.test(s);
  }
}

// ---

let strings = ["Hello", "45424", "101"];

let validators: { [s: string]: StringValidator } = {};
validators["Zip Code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();

for (let s of strings) {
  for (let validator in validators) {
    let isMatch = validators[validator].isAcceptable(s);
    console.log(
      `'${s}' ${isMatch ? "matches" : "does not match"} '${validator}'.`
    );
  }
}

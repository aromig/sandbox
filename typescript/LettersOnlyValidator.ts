/// <reference path="Validation.ts" />
namespace Validation {
  let lettersRegExp = /^[A-Za-z]+$/;

  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegExp.test(s);
    }
  }
}

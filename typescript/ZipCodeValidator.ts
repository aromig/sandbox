/// <reference path="Validation.ts" />
namespace Validation {
  let numberRegExp = /^[0-9]+$/;

  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegExp.test(s);
    }
  }
}

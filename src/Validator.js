/* eslint-disable max-len */
/* eslint-disable no-bitwise */
export default class Validator {
  validateUsername(username) {
    this.rowStartOnlyLetters = /^([^\W\d_])/.test(username);
    this.allowedLetters = /([A-z])/.test(username);
    this.allowedThreeDigits = /(\d){0,3}/.test(username);
    this.allowedUnderscores = /(_)/.test(username);
    this.allowedDashes = /(-)/.test(username);
    this.rowEndOnlyLetters = /([^\W\d_]$)/.test(username);

    return this.rowStartOnlyLetters && this.allowedLetters | this.allowedThreeDigits | this.allowedUnderscores | this.allowedDashes && this.rowEndOnlyLetters;
  }
}

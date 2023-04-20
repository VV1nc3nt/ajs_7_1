export default class Validator {
  validateUsername(username) {
    this.regexTestTemplate = /^([^\W\d_])+(([A-z])|(\d){0,3}|(_)|(-))+([^\W\d_])$/.test(username);
    return this.regexTestTemplate;
  }
}

// class Currency
// constructor attribures - code, name
// make their getter and setters
// displayFullCurrency that return the attributes
// in the following format name (code)

// 3-currency.js
export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    } else {
      throw new TypeError('Code must be a string');
    }
  }

  get code() {
    return this._code;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

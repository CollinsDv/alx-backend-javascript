// implement class HolbertonCourse
// constructor attributes: name(str), length(Number), students(arrays of Strings)
// implement their getters and setters

export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(value) && value.every((student) => typeof student === 'string')) {
      this._students = value;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number' && value > 0) {
      this._length = value;
    } else {
      throw new TypeError('Length must be a positive number');
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }
}

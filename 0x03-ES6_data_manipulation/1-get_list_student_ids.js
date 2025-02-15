// Create a function getListStudentIds that returns an array of ids from a list of object.

// This function is taking one argument which is an array of objects - and this array is
// the same format as getListStudents from the previous task.

// If the argument is not an array, the function is returning an empty array.

// You must use the map function on the array.

import getListStudents from './0-get_list_students';

export default function getListStudentIds(arr = getListStudents()) {
  if (toString.call(arr) === '[object Array]') {
    return arr.map((student) => student.id);
  }
  return [];
}

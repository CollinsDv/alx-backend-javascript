// Create a function getStudentsByLocation that returns an array of objects who are located in a specific city.

// It should accept a list of students (from getListStudents) and a city (string) as parameters.

// You must use the filter function on the array.
import getListStudents from "./0-get_list_students";

export default function getStudentsByLocation(students, located) {
  return students.filter((student) => student.location === located)
}
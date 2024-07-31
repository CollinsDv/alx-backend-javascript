// Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
// Create two students, and create an array named studentsList containing the two variables
// Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
// Each row should contain the first name of the student and the location
// Requirements:

// When running, Webpack should return No type errors found.
// Every variable should use TypeScript when possible.

interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: 'Collins',
    lastName: 'Dv',
    age: 20,
    location: 'Kenya'
};

const student2: Student = {
    firstName: 'Joan',
    lastName: 'Njeri',
    age: 20,
    location: 'Lagos'
};

const studentList: Student[] = [student1, student2];

// Render a table and append a new row for each student
const table = document.createElement('table');
studentList.forEach(student => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});

// Append the table to the document body
document.body.appendChild(table);

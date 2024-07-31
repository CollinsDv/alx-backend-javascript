// 
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// Interface named Directors that extends Teacher.
// It requires an attribute named numberOfReports(number)
interface Directors extends Teacher {
    numberOfReports: number;
}

// function printTeacher:
// It accepts two arguments firstName and lastName
// It returns the first letter of the firstName and the full lastName
// Example: printTeacher("John", "Doe") -> J. Doe
// Write an interface for the function named printTeacherFunction.

interface printTeacherFunction {
    (firstName: string, lastName: string): string
}

const printTeacher = (firstName: string, lastName: string) => {
    return `${firstName[0]}.${lastName}`;
}

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Dwight',
  lastName: 'Schroot',
  age: 32,
  location: 'The electric city',
};

const student2: Student = {
  firstName: 'Jim',
  lastName: 'Halpert',
  age: 31,
  location: "Pam's heart",
};

const students: Student[] = [student1, student2];

console.log('Firstname\tLastName\tAge\tLocation');
students.forEach((student) => {
  console.log(`\n${student.firstName}\t\t${student.lastName}\t\t${student.age}\t${student.location}`);
});

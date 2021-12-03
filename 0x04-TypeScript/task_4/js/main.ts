import Java from './Java.ts';
import Cpp from './Cpp.ts';
import React from './React.ts';
import Teacher from './Teacher.ts';

export const cpp;

export const java;

export const react;

export const cTeacher: Teacher = { experienceTeachingC: 10 };

console.log('C++');
const cpp = Cpp();
cpp.teacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
const java = Java();
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
const react = React();
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

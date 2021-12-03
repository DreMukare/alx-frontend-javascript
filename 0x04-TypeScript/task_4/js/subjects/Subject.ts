import Teacher from './Teacher';

namespace Subjects {
  export default class Subject {
    teacher: Teacher;

    constructor () {
        this.teacher: Teacher;
    }

    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}

import Subject from './Subject.ts';

namespace Subjects {
  interface Teacher {
    experienceTeachingJava?: number;
  }

  class Java extends Subject {
    constructor() {
      super();
    }

    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      return this.teacher.experienceTeachingJava ?
        `Available Teacher: ${this.teacher.firstName}`:
        'No available teacher';
    }
  }
}
